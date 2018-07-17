import React, { Component } from "react";
import socketIOClient from "socket.io-client";

import { Provider } from "react-redux";

import Header from "./components/header";
import Players from "./components/players";
import Center from "./components/center";
import store from "./store.js";

import { MainWrapper } from "./theme/styles"

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

    return (
      <Provider store={store}>
        <MainWrapper>
          <Header />
          <Players />
          <Center />
        </MainWrapper>
      </Provider>
    );
  }
}

export default App;
