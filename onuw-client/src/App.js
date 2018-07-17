import React, { Component } from "react";
import socketIOClient from "socket.io-client";

import { connect } from "react-redux";

import Lobby from "./components/lobby";
import Intro from "./components/intro";

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
    switch (this.props.gameState) {
      case "Intro":
        return <Intro />;
      case "Lobby":
        return <Lobby />;
      default:
        return <Lobby />;
    }
  }
}

const mapStateToProps = state => ({
  gameState: state.gameState
});

export default connect(mapStateToProps)(App);
