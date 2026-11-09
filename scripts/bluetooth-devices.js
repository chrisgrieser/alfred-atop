#!/usr/bin/env osascript -l JavaScript
ObjC.import("stdlib");
ObjC.import("IOBluetooth");
const app = Application.currentApplication();
app.includeStandardAdditions = true;
//──────────────────────────────────────────────────────────────────────────────

// DOCS https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice
/** @typedef {Object} BluetoothDevice
 * @property {{js?: string}} getDisplayName
 * @property {{js: string}} nameOrAddress
 * @property {boolean} isConnected
 * @property {{js: string}} addressString
 * @property {unknown} closeConnection
 * @property {unknown} openConnection
 */

/**
 * @param {string} title
 * @param {string=} subtitle
 */
function alfredErrorItem(title, subtitle) {
	if (!subtitle) subtitle = "";
	return JSON.stringify({ items: [{ title: "⛔ " + title, subtitle: subtitle, valid: false }] });
}

//────────────────────────────────────────────────────────────────────────

/** @type {AlfredRun} */
// biome-ignore lint/correctness/noUnusedVariables: Alfred run
function run() {
	// GUARD
	const { majorVersion: major, minorVersion: minor } =
		$.NSProcessInfo.processInfo.operatingSystemVersion;
	if ((parseInt(major) === 10 && parseInt(minor) < 15) || parseInt(major) < 10) {
		return alfredErrorItem("This feature requires at least macOS 10.15");
	}
	// @ts-expect-error
	if ($.CBManager.authorization !== $.CBManagerAuthorizationAllowedAlways) {
		return alfredErrorItem(
			"Unable to access Bluetooth",
			"Open System Settings, then grant Alfred Bluetooth permissions.",
		);
	}
	//───────────────────────────────────────────────────────────────────────────

	// CAVEAT this only shows the battery for first-party Apple devices
	let ioregOutput;
	try {
		ioregOutput = app.doShellScript(
			"ioreg -rak BatteryPercent | sed 's/data>/string>/' | plutil -convert json - -o -",
		);
	} catch (_error) {
		const msg = "ioreg failed, battery info will not be included. ioreg output: " + ioregOutput;
		console.log(msg);
	}

	/** @type {Record<string, number>} */
	const batteryInfo = ioregOutput
		? JSON.parse(ioregOutput).reduce((/** @type {any} */ acc, /** @type {any} */ device) => {
				acc[device.DeviceAddress] = device.BatteryPercent;
				return acc;
			}, {})
		: {};

	const excludedDevices = $.getenv("excluded_devices").split(/ *, */);

	/** @type {BluetoothDevice[]} */
	const devices = $.IOBluetoothDevice.pairedDevices.js;

	/** @type {AlfredItem[]} */
	const deviceArr = devices.flatMap((device) => {
		// Dual-mode devices (e.g. AirPods) attach a BLE `CBPeripheral` once connected,
		// causing `nameOrAddress` to return the generic BLE GATT name ("AirPods Pro")
		// instead of the user's Classic display name ("…’s AirPods Pro").
		const name = device.getDisplayName.js || device.nameOrAddress.js;
		if (excludedDevices.includes(name)) return [];

		const connectedIcon = device.isConnected ? "🟢 " : "🔴 ";
		const address = device.addressString.js;
		const battery = batteryInfo[address] ? batteryInfo[address] + "%" : "";

		return {
			title: name,
			subtitle: connectedIcon + "  " + battery,
			uid: address,
			arg: address,
		};
	});

	return JSON.stringify({ rerun: 1, items: deviceArr });
}
