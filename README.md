# keyengine

[![Build Status](https://travis-ci.org/rhythm-collective/keyengine.svg?branch=master)](https://travis-ci.org/rhythm-collective/keyengine) [![Coverage Status](https://coveralls.io/repos/github/rhythm-collective/keyengine/badge.svg?branch=master)](https://coveralls.io/github/rhythm-collective/keyengine?branch=master) [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

## Initial configuration

- Install [node.js](https://nodejs.org/en/download/).
- Install Visual Studio Code
- Open the keyengine workspace.
- Install the workspace recommended extensions.
- Enter the workspace console with ```ctrl+` ```.
- Initialize the node workspace `npm install`
- Start active transpiling: `Ctrl + Shift + B`

## Set Up Debugging in Firefox

- Install [Debugger for Firefox](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-firefox-debug)
- Launch the debugger with 'Launch Firefox' debug launch (see launch.json).

## Set Up Debuggin in Chrome

> *Contribution Needed* Please fill out when configuring for chrome debugging.
> [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
> Please match the style of [Debugging in Firefox](#Debugging-in-Firefox)

## Debugging in Browser

- In a workspace bash terminal run `./node_modules/.bin/ws -p 80 --hostname lvh.me`.
- Run the launch task of your preferred browser.

## Debugging

- Place breakpoints as you wish.
- Run Debug launch task.

### Possible Errors

- **SEC_ERROR_UNKNOWN_ISSUER**
  - If you use a system level adblocker or a VPN, disable them. (Ex. Adguard)

## Testing the spotify example

- Navigate to [WEb Playback SDK Quick Start](https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#)
- Generate your own access token. (It will expire in an hour.)
- Paste it into the quotes at `const token = '';` on line 13.
- The webserver *may* be restarted with `./node_modules/.bin/ws -p 80 -d examples --hostname lvh.me`
- Run the Launch Firefox Examples project.
- If it worked you will see: `Ready with Device ID ###...`
- If you get the error:

        Authentication failed spotify:21:77
            onSpotifyWebPlaybackSDKReady http://lvh.me/examples/spotify:21
            _onEvent https://sdk.scdn.co/spotify-player.js:2
            _onEvent https://sdk.scdn.co/spotify-player.js:2
            _handleMessages https://sdk.scdn.co/spotify-player.js:2
            _receiveMessage https://sdk.scdn.co/spotify-player.js:2

  Then your access token has either expired, or is incorrect.

- Open a Spotify instance, and look for `Web Playback SDK Quick Start Player` in the device menu. Select it and play a song.
- If you hear nothing in the browser, but you see all of the console output related to it, check that the audio auto play permissions are enabled. (In the security shield box.)
