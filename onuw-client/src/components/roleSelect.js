import React, { Component } from "react";
import { connect } from "react-redux";

import { setPhaseState } from "../actions/gameStateActions";
import { majorityNumAdd, majorityNumSub, majorityReset } from "../actions/gameActions";

import Header from "./header";
import Footer from "./footer";
import Roles from "./roles";
import { MainWrapper, StartButton, StartButtonPressed } from "../theme/styles";

class RoleSelect extends Component {
  constructor() {
    super();
    this.state = {
      pressed: false,
    };

    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleStart = this.handleStart.bind(this);
  }

  handleConfirm(e) {
    this.setState({
      ...this.state,
      pressed: true
    })
    this.props.majAdd();
  }

  handleStart(e) {
    this.props.majReset();
    this.props.setPhase("Night", true);
  }

  render() {
    let button = null;

    if (this.props.ready) {
      button = <StartButton onClick={this.handleStart}>Next</StartButton>;
    } else if (this.state.pressed) {
      button = (
        <StartButtonPressed>
          Confirmed - {this.props.majNum}/{this.props.playersNum}
        </StartButtonPressed>
      );
    } else if (this.props.playersNum + 3 - this.props.numRoleSelected <= 0) {
      button = (
        <StartButton onClick={this.handleConfirm}>
          Confirm - {this.props.majNum}/{this.props.playersNum}
        </StartButton>
      );
    } else if (!this.state.readyToConfirm) {
      button = (
        <StartButton>
          Select {this.props.playersNum + 3 - this.props.numRoleSelected} More Roles to Continue
        </StartButton>
      );
    }

    return (
      <MainWrapper>
        <Header />
        <Roles />
        {button}
        <Footer />
      </MainWrapper>
    );
  }
}

const mapStateToProps = state => ({
  majNum: state.majorityNum,
  ready: state.majorityReady,
  players: state.players,
  playersNum: Object.keys(state.players).length,
  numRoleSelected: state.numRoleSelected,
});

const mapDispatchToProps = dispatch => {
  return {
    setPhase: gamePhase => dispatch(setPhaseState(gamePhase, true)),
    majAdd: () => dispatch(majorityNumAdd()),
    majReset: () => dispatch(majorityReset()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoleSelect);
