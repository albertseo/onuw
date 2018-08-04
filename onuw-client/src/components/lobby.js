import React, { Component } from "react";
import { connect } from "react-redux";
import { setPhaseState } from "../actions/gameStateActions";

import Header from "./header";
import Players from "./players";
import Footer from "./footer";
import { StartButton } from "../theme/styles";
import { MainWrapper } from "../theme/styles";

// This the the view that the players see when they are waiting to start a game
class Lobby extends Component {
  constructor() {
    super();

    this.handleStart = this.handleStart.bind(this);
  }

  handleStart() {
    this.props.setPhase("Pick Roles", true);
  }

  render() {
    return (
      <MainWrapper>
        <Header />
        <Players />
        <StartButton onClick={this.handleStart}>Pick Roles</StartButton>
        <Footer />
      </MainWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPhase: gamePhase => dispatch(setPhaseState(gamePhase, true))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Lobby);
