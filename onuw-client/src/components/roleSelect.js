import React, { Component } from "react";
import { connect } from "react-redux";

import { setPhaseState } from "../actions/gameStateActions";

import Header from "./header";
import Footer from "./footer";
import Roles from "./roles";
import { MainWrapper, StartButton, StartButtonPressed } from "../theme/styles";

class RoleSelect extends Component {
  constructor() {
    super();
    this.state = {
      pressed: false,
      readyToConfirm: false
    };

    this.handleStart = this.handleStart.bind(this);
  }

  handleStart(e) {
    this.props.setPhase("Night");
  }

  render() {
    let button = null;

    if (this.props.ready) {
      button = <StartButton onClick={this.handleStart}>Next</StartButton>;
    } else if (this.state.pressed) {
      button = (
        <StartButtonPressed>
          Confirmed - {this.props.majNum}/{this.props.numPlayers}
        </StartButtonPressed>
      );
    } else if (this.state.readyToConfirm) {
      button = (
        <StartButton onClick={this.handleConfirm}>
          Confirm - {this.props.majNum}/{this.props.numPlayers}
        </StartButton>
      );
    } else if (!this.state.readyToConfirm) {
      button = (
        <StartButton>
          need - {this.props.numRoles}
        </StartButton>
      );
    }

    return (
      <MainWrapper>
        <Header />
        <Roles />
        {button}
        <StartButton onClick={this.handleConfirm}> Next I </StartButton>
        <Footer />
      </MainWrapper>
    );
  }
}

const mapStateToProps = state => ({
  majNum: state.majorityNum,
  ready: state.majorityReady,
  players: state.players,
  numRoles: Object.keys(state.players).length,
});

const mapDispatchToProps = dispatch => {
  return {
    setPhase: gamePhase => dispatch(setPhaseState(gamePhase, true))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoleSelect);
