import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import styled, { injectGlobal } from "styled-components";

import { Provider } from "react-redux";

import Header from "./components/header";
import Players from "./components/players";
import Center from "./components/center";
import store from "./store.js";

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

// Inject Directly into stylesheet for Raleway font
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Raleway');

  * {
    margin-bottom: 0px;
    margin-top: 0px;
  }

  body {
    padding: 0px;
    margin: 0px;
    background-color: #181E24;
    font-family: Raleway, sans-serif;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
`;

// Style for Wrapper Div
const MainWrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;

  @media (min-width: 500px) {
    width: 500px;
  }
  justify-content: center;
  flex-direction: column;
`;

export default App;
