# Alfred atop
![GitHub downloads](https://img.shields.io/github/downloads/chrisgrieser/alfred-atop/total?label=GitHub%20Downloads&style=plastic&logo=github)
![Alfred Gallery downloads](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fraw.githubusercontent.com%2Fchrisgrieser%2F.config%2Frefs%2Fheads%2Fmain%2FAlfred.alfredpreferences%2Falfred-gallery-downloads.yaml&query=atop&style=plastic&logo=alfred&label=Gallery%20Downloads&color=%235C1F87)
![Latest release](https://img.shields.io/github/v/release/chrisgrieser/alfred-atop?label=Latest%20Release&style=plastic)

System monitoring and process management via Alfred.

<img alt="atop overview showcase" width="70%" src="https://github.com/chrisgrieser/alfred-atop/assets/73286100/688059a7-7878-4928-9164-ee6f8eb43381">

## Features
- Process management: CPU usage, memory usage, parent processes, and child
  processes.
- Bluetooth: device connection status and battery information (if available)
- Network connections
- Removable volumes
- Uptime & reboots
- Speed-test of internet connection
- DNS switching
- *All features are live refreshing.*

## Installation
[➡️ Download the latest release.](https://github.com/chrisgrieser/alfred-atop/releases/latest)

## Usage
List all available tools via `atop` and select one. Alternatively, you can also
directly access the more frequently used tools via a configurable keyword.

<img width="60%" alt="showcase overview" src="https://github.com/alfredapp/gallery-edits/assets/73286100/0ee2329e-45f8-4364-af47-70c06690932f">

### Process management
<img width="60%" alt="showcase processes" src="https://github.com/alfredapp/gallery-edits/assets/73286100/70304f1f-2856-4329-8d69-65c179bb3378">

Display processes directly via `top`. Append "parent" to the query to display
only processes that have child processes.
- <kbd>⏎</kbd>: Kill the process.
- <kbd>⌘⏎</kbd>: Force-kill the process.
- <kbd>⌃⏎</kbd>: Kill all processes with the same name.
- <kbd>⌘⌃⏎</kbd>: Force-kill all processes with the same name.
- <kbd>⇧⏎</kbd>: If the process belongs to a regular app, restart the app.
- <kbd>fn⏎</kbd>: Toggle between sorting processes by memory or CPU.
- <kbd>⌘C</kbd>: Copy the process identifier (PID).
- <kbd>⌥⏎</kbd>: Copy the process path.

**Meaning of the icons** <!-- rumdl-disable-line MD036 -->
- `⭕`: process is owned by root.
- `n⇣`: process is a parent of `n` child processes.
- `↖ foobar`: process is a child of `foobar`.

### Bluetooth devices
<img width="60%" alt="showcase bluetooth devices" src="https://github.com/alfredapp/gallery-edits/assets/73286100/823a6e8d-0d89-43fe-bde7-20547841ca27">

Display paired Bluetooth devices directly via `blue`.
- <kbd>⏎</kbd>: Connect/Disconnect the selected device.
- <kbd>⌥</kbd><kbd>⏎</kbd>: Copy the device address.

### Removable volumes
<img width="60%" alt="showcase rjectable volumes" src="https://github.com/alfredapp/gallery-edits/assets/73286100/8b115799-d02d-4116-8b4b-520db63ba454">

Display mounted volumes directly via `vol`.
- <kbd>⏎</kbd>: Open the Volume in Finder.
- <kbd>⌘</kbd><kbd>⏎</kbd>: Browse the Volume in the Terminal, [using the
  Terminal app you have configured in your Alfred
  preferences](https://www.alfredapp.com/help/features/terminal/).
- <kbd>⌃</kbd><kbd>⏎</kbd>: Eject the Volume.

### DNS switching
<img width="60%" alt="showcase DNS switching" src="https://github.com/chrisgrieser/alfred-atop/assets/73286100/b4ba04bc-4f30-4e09-8eb9-081af24d6f84">

## About the developer
In my day job, I am a sociologist studying the social mechanisms underlying the
digital economy. For my PhD project, I investigate the governance of the app
economy and how software ecosystems manage the tension between innovation and
compatibility. If you are interested in this subject, feel free to get in touch.

- [Website](https://chris-grieser.de/)
- [Mastodon](https://pkm.social/@pseudometa)
- [ResearchGate](https://www.researchgate.net/profile/Christopher-Grieser)
- [LinkedIn](https://www.linkedin.com/in/christopher-grieser-ba693b17a/)

If you find this project helpful, you can support me via [🩷 GitHub
Sponsors](https://github.com/sponsors/chrisgrieser?frequency=one-time).
