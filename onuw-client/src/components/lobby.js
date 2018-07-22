import React, { Component } from "react";

import Header from "./header";
import Players from "./players";
import Footer from "./footer";
import { StartButton, StartButtonWrapper } from "../theme/styles";
import { MainWrapper } from "../theme/styles";

// This the the view that the players see when they are waiting to start a game
export default class Lobby extends Component {
  render() {
    return (
      <MainWrapper>
        <Header />
        <Players />
        <StartButtonWrapper>
          <StartButton>Start Game</StartButton>
        </StartButtonWrapper>
        <Footer />
      </MainWrapper>
    );
  }
}