<p align="center">
<img src="https://raw.githubusercontent.com/AstralsDB/MistCord/main/images/mistLogo.png" width="200px;">
</p>

# MistCord
A modern Discord client modifaction and selfbot

## Features
- Live injection via websockets
- Live theme updating
- Selfbot via a fork of Discum

## Injection Method
We inject Discord via the [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/)

Steps:
- Scan for all versions of Discord. Discord, Canary, Developer
- Kill Discord
- Start Discord with the remote-debugging-port argument to allow connections
- Inject via the Runtime eval method.
