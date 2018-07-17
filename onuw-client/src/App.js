import React, { Component } from "react";
import socketIOClient from "socket.io-client";

import { connect } from "react-redux";

import Lobby from "./components/lobby";

class App extends Component {
  constructor() {
    super();

    this.state = {
      endpoint: "http://localhost:8000",
      socket: socketIOClient("http://localhost:8000")
    };
  }

  // Send Color Update to Server
  send = () => {
    this.state.socket.emit("colorChangeGlobal", this.state.color);
  };

  // Set Color
  setColor = color => {
    this.setState({ color });
  };

  render() {
    this.state.socket.on("colorChange", color => {
      document.body.style.backgroundColor = color;
    });

    // Load the view that matches the current state of the game
    if (this.props.gameState === "lobby") {
      return <Lobby />
    } 
    // TODO: Add default case as well as other game states
  }
}

const mapStateToProps = state => ({
  gameState: state.gameState
});

export default connect(mapStateToProps)(App)
