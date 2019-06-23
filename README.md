# keyengine

[![Build Status](https://travis-ci.org/rhythm-collective/keyengine.svg?branch=master)](https://travis-ci.org/rhythm-collective/keyengine) [![Coverage Status](https://coveralls.io/repos/github/rhythm-collective/keyengine/badge.svg?branch=master)](https://coveralls.io/github/rhythm-collective/keyengine?branch=master) [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

## Initial configuration

- Install [node.js](https://nodejs.org/en/download/).
- Install Visual Studio Code
- Open the keyengine workspace.
- Install the workspace recommended extensions.
- Enter the workspace console with ```ctrl+` ```.
- Initialize the node workspace `npm init -y`
- Install node's typescript compiler: `npm install`
- Start active transpiling: `ctrl + shift + b`

## Set Up Debugging in Firefox

- Install [Debugger for Firefox](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-firefox-debug)
- Launch the debugger with 'Launch Firefox' debug launch (see launch.json).

## Set Up Debuggin in Chrome

> *Contribution Needed* Please fill out when configuring for chrome debugging.
> [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
> Please match the stype of [Debugging in Firefox](#Debugging-in-Firefox)

## Debugging in Browser

- In a workspace bash terminal run `./node_modules/.bin/ws -p 80 -d bin --hostname lvh.me`.
- Run the launch task of your preferred browser.

## Debugging

- Place breakpoints as you wish.
- Run Debug launch task.
