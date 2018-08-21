import React, { Component } from "react";
import { connect } from "react-redux";
import { setPhaseState } from "../actions/gameStateActions";
import { toggleSelect } from "../actions/playerActions";

import Header from "./header";
import Footer from "./footer";
import {
  MainWrapper,
  DescriptionDisplay,
  CenterComponentWrapper,
  Title,
  Line,
  PlayerCardWrapper,
  PlayerCard,
  PlayerCardSelected,
  StartButton,
  StartButtonPressed
} from "../theme/styles";

// This the the view that the players see when they are waiting to start a game
class Day extends Component {
  constructor() {
    super();

    this.state = {
      players: {},
      pressed: false,
      killSelect: null
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  // Selecting a player to kill 
  handleSelect(player) {
    let isSelected = this.state.players[player];
    let changedPlayers = Object.assign({}, this.state.players);
    changedPlayers[player] = !isSelected;

    if (!isSelected) {
      if (this.state.killSelect === null) {
        this.setState({
          ...this.state,
          players: changedPlayers,
          killSelect: player
        });
      }
    } else {
      this.setState({
        ...this.state,
        players: changedPlayers,
        killSelect: null
      });
    }
  }

  // Sending killSelect to server
  handleConfirm() {
    if (this.state.killSelect !== null) {
      this.setState({
        ...this.state,
        pressed: true
      });
      // Send to server here
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      players: this.props.players
    });
  }

  render() {
    let button;
    if (this.state.pressed) {
      button = <StartButtonPressed>Confirmed</StartButtonPressed>;
    } else {
      button = (
        <StartButton onClick={this.handleConfirm}>
          Select Person to Kill
        </StartButton>
      );
    }
    return (
      <MainWrapper>
        <Header />
        <DescriptionDisplay>{this.props.dayDescription}</DescriptionDisplay>
        <DescriptionDisplay>Select a player to kill</DescriptionDisplay>

        <CenterComponentWrapper>
          <Title>Players</Title>
          <Line />
          <PlayerCardWrapper>
            {Object.keys(this.state.players).map(player => {
              if (!this.state.players[player]) {
                return (
                  <PlayerCard
                    key={player}
                    onClick={() => this.handleSelect(player)}
                  >
                    {player}
                  </PlayerCard>
                );
              } else {
                return (
                  <PlayerCardSelected
                    key={player}
                    onClick={() => this.handleSelect(player)}
                  >
                    {player}
                  </PlayerCardSelected>
                );
              }
            })}
          </PlayerCardWrapper>
        </CenterComponentWrapper>
        {button}
        <Footer />
      </MainWrapper>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players,
  numPlayers: Object.keys(state.players).length,
  dayDescription: state.dayDescription
});

const mapDispatchToProps = dispatch => {
  return {
    toggle: (playerName, select) => dispatch(toggleSelect(playerName, select))
    // Something to send killSelect to server here
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Day);
