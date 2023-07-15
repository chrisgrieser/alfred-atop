<!-- LTeX: enabled=false -->
# atop
<!-- LTeX: enabled=true -->
![](https://img.shields.io/github/downloads/chrisgrieser/alfred-atop/total?label=Total%20Downloads&style=plastic) ![](https://img.shields.io/github/v/release/chrisgrieser/alfred-atop?label=Latest%20Release&style=plastic) 

System Monitoring and Process Management via Alfred. 

<img src="./assets/showcase overview.png" alt="atop overview showcase" width="50%">

<img src="./assets/showcase processes.png" alt="showcase processes" width="50%">

## Features
- Process Management: CPU & Memory, kill processes, restart apps
- Bluetooth Devices: Battery Information (if available), Connection
- Network Connections
- Removable Volumes
- Uptime & Reboots
- Speedtest
- Live refreshing of all

## Installation
[➡️ Download the latest release.](https://github.com/chrisgrieser/alfred-atop/releases/latest)

When admitted to the Alfred Gallery, the workflow auto-updates via Alfred's workflow-update mechanism.

## Usage
List all available tools via `atop` and select one. 

Alternatively, you can also directly access the more frequently used tools via a configurable keyword, e.g. by default `top` to show active processes.

### Process Management
<img width="1106" alt="showcase processes" src="https://github.com/alfredapp/gallery-edits/assets/73286100/70304f1f-2856-4329-8d69-65c179bb3378">

<kbd>↩︎</kbd>: Kill the process.
<kbd>↩︎</kbd><kbd>⌘</kbd>: Force kill the process.
<kbd>↩︎</kbd><kbd>⌃</kbd>: Kill all processes with the same name.
<kbd>↩︎</kbd><kbd>⇧</kbd>: If the process belongs to a regular app, restart the app.
<kbd>↩︎</kbd><kbd>⌥</kbd>: Copy the PID.

### Bluetooth Devices
<kbd>↩︎</kbd>: If `blueutil` is installed, toggle the connection state. Otherwise, open the bluetooth preferences.
<kbd>↩︎</kbd><kbd>⌥</kbd>: Copy the device address.

### Ejectable Volumes
<kbd>↩︎</kbd>: Open the Volume in Finder.
<kbd>↩︎</kbd><kbd>⌘</kbd>: Browse the Volume in the Terminal, [using the Terminal app you have configured in your Alfred preferences](https://www.alfredapp.com/help/features/terminal/).
<kbd>↩︎</kbd><kbd>⌃</kbd>: Eject the Volume.

## Credits
<!-- vale Google.FirstPerson = NO -->
__About Me__  
In my day job, I am a sociologist studying the social mechanisms underlying the digital economy. For my PhD project, I investigate the governance of the app economy and how software ecosystems manage the tension between innovation and compatibility. If you are interested in this subject, feel free to get in touch.

__Profiles__  
- [reddit](https://www.reddit.com/user/pseudometapseudo)
- [Discord](https://discordapp.com/users/462774483044794368/)
- [Academic Website](https://chris-grieser.de/)
- [Twitter](https://twitter.com/pseudo_meta)
- [ResearchGate](https://www.researchgate.net/profile/Christopher-Grieser)
- [LinkedIn](https://www.linkedin.com/in/christopher-grieser-ba693b17a/)

__Buy Me a Coffee__  
<br>
<a href='https://ko-fi.com/Y8Y86SQ91' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
