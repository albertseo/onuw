import React, { Component } from "react";
import { connect } from "react-redux";
import { setPhaseState } from "../actions/gameStateActions";
import { majorityNumAdd, majorityReset } from "../actions/gameActions";

import Header from "./header";
import Players from "./players";
import Footer from "./footer";
import { StartButton, StartButtonPressed } from "../theme/styles";
import { MainWrapper } from "../theme/styles";

// This the the view that the players see when they are waiting to start a game
class Lobby extends Component {
  constructor() {
    super();
    this.state = {
      pressed: false
    };

    this.handleStart = this.handleStart.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleStart() {
    this.props.setPhase("Pick Roles", true);
    this.props.majReset();
  }

  handleConfirm() {
    this.props.majAdd();
    this.setState({
      pressed: true
    });
  }

  render() {
    let button = null;

    if (this.props.ready) {
      button = <StartButton onClick={this.handleStart}>Pick Roles</StartButton>;
    } else if (this.state.pressed) {
      button = (
        <StartButtonPressed>
          Confirmed - {this.props.majNum}/{this.props.numPlayers}
        </StartButtonPressed>
      );
    } else if (!this.props.ready && !this.state.pressed) {
      button = (
        <StartButton onClick={this.handleConfirm}>Confirm - {this.props.majNum}/{this.props.numPlayers}</StartButton>
      );
    }


    return (
      <MainWrapper>
        <Header />
        <Players />
        {button}
        <Footer />
      </MainWrapper>
    );
  }
}

const mapStateToProps = state => ({
  playersList: state.players,
  numPlayers: Object.keys(state.players).length,
  majNum: state.majorityNum,
  ready: state.majorityReady
});

const mapDispatchToProps = dispatch => {
  return {
    setPhase: gamePhase => dispatch(setPhaseState(gamePhase, true)),
    majAdd: () => dispatch(majorityNumAdd()),
    majReset: () => dispatch(majorityReset())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lobby);
