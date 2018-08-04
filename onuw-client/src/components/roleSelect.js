import React, { Component } from "react";
import { connect } from "react-redux";

import { setPhaseState } from "../actions/gameStateActions";

import Header from "./header";
import Footer from "./footer";
import Roles from "./roles";
import { MainWrapper, StartButton } from "../theme/styles";

class RoleSelect extends Component {
  constructor() {
    super();

    this.handleConfirm = this.handleConfirm.bind(this);
  };

  handleConfirm(e) {
    this.props.setPhase("Night");
  };

  render() {
    return (
      <MainWrapper>
        <Header />
        <Roles />
        <StartButton onClick={this.handleConfirm}> Next </StartButton>
        <Footer />
      </MainWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPhase: (gamePhase) => dispatch(setPhaseState(gamePhase, true))
  };
};

export default connect(null, mapDispatchToProps)(RoleSelect);