# One Night Ultimate Werewolf Online

This is a web port of the board game [One Night Ultimate Werewolf](https://beziergames.com/products/one-night-ultimate-werewolf) by Bezier Games.
Play together with friends anywhere, anytime!

**This is still a work in progress**

# Built with React and socket.io
The code is split in two locations for the server and the client. Server code is located at `/onuw-server`, while client code is located at `/onuw-client`.

Backend is written with [Node.js](https://nodejs.org/en/) and [socket.io](https://socket.io/) to handle realtime communication between clients and the server.

Frontend is written with [React](https://reactjs.org/) and [Redux](https://redux.js.org/) to manage state between components.

# Installation
Clone the git repo:
```
git clone https://github.com/albertseo/onuw
```
Install packages with npm in both `/onuw-client` and `/onuw-server`
```
npm install
```
Start the server while in in `/onuw-server`
```
npm start 
```
Then start the client in `/onuw-client`
```
npm start 
```

# TODO:
There are many additional features I would like to add in the future.
- [ ] Host server and client to make it fully accessible
- [ ] Use socket.io rooms and namespaces to allow for multiple games to be played at the same time
- [ ] Refractor code for Doppleganger role to be playable