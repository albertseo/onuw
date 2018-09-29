# One Night Ultimate Werewolf Online

This is a web port of the board game [One Night Ultimate Werewolf](https://beziergames.com/products/one-night-ultimate-werewolf) by Bezier Games.

Design and inspiration drawn from mpcovcd's online version of [Spyfall](https://github.com/mpcovcd/spyfall)

**[Live Demo](https://onuw.herokuapp.com/)**
**This project has been split into two repositories for conveniece when deploying to Heroku**
- [New Client Repository](https://github.com/albertseo/onuw_client)
- [New Server Repository](https://github.com/albertseo/onuw_server)

# Disclaimer

One Night Ultimate Werewolf is a board game designed by desinged by Ted Alspach and Akisha Okui, and published by  
[Bezier Games](https://beziergames.com/). This is an unofficial fan project written as a fun learning project, and is not endorsed by the designer nor publisher.

# Built with React and socket.io
The code is split in two locations for the server and the client. Server code is located at `/onuw-server`, while client code is located at `/onuw-client`.

Backend is written with [Node.js](https://nodejs.org/en/) and [socket.io](https://socket.io/) to handle realtime communication between clients and the server.

Frontend is written with [React](https://reactjs.org/) and [Redux](https://redux.js.org/) to manage state between components.

Both applications are deployed using [Heroku](https://www.heroku.com/).

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

# License
MIT © [Albert Seo](https://github.com/albertseo)