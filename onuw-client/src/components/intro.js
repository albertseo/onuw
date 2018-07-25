import React, { Component } from "react";
import { connect } from "react-redux";
import newNamePost from "../actions/playerActions";
import setPhaseState from "../actions/gameStateActions";

import Header from "./header";
import Footer from "./footer";

import {
  MainWrapper,
  NameTextInput,
  NameTextButton,
  NameTextWrapper,
  SpacerDiv
} from "../theme/styles";

class Intro extends Component {
  constructor() {
    super();
    this.state = {
      textValue: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Should check for duplicate names as well
    if (this.state.textValue !== "") {
      this.props.newName(this.state.textValue);
      this.props.gamePhase("Lobby");
    }
  }

  handleChange(e) {
    this.setState({textValue: e.target.value})
  }

  render() {
    return (
      <MainWrapper>
        <Header />
        <SpacerDiv />
        <NameTextWrapper>
          <NameTextInput onChange={this.handleChange} type="text" placeholder="Enter your name here"/>
          <NameTextButton onClick={this.handleClick}>Next</NameTextButton>
        </NameTextWrapper>
        <Footer />
      </MainWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newName: (playerName) => dispatch(newNamePost(playerName)),
    gamePhase: (gameState) => dispatch(setPhaseState(gameState))
  };
};

export default connect(null, mapDispatchToProps)(Intro);