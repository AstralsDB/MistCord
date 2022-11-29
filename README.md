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

The Chrome DevTools Protocol allows for tools to instrument, inspect, debug and profile Chromium, Chrome and other Blink-based browsers. Many existing projects currently use the protocol. The Chrome DevTools uses this protocol and the team maintains its API.

Instrumentation is divided into a number of domains (DOM, Debugger, Network etc.). Each domain defines a number of commands it supports and events it generates. Both commands and events are serialized JSON objects of a fixed structure. 

Steps:
- Scan for all versions of Discord. Discord, Canary, Developer
- Kill Discord
- Start Discord with the remote-debugging-port argument to allow connections
- Inject via the Runtime eval method.
