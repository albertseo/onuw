import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleSelect } from "../actions/playerActions";

import {
  CenterComponentWrapper,
  Title,
  Line,
  PlayerCardWrapper,
  PlayerCard,
  PlayerCardSelected
} from "../theme/styles";

class PlayersNight extends Component {
  constructor() {
    super();

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(player) {
    let isSelected = this.props.players[player];
    this.props.toggle(player, isSelected);
  }

  render() {
    return (
      <CenterComponentWrapper>
        <Title>Players</Title>
        <Line />
        <PlayerCardWrapper>
          {Object.keys(this.props.players).map(player => {
            if (!this.props.players[player]) {
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
    );
  }
}

// The players component only needs the list of current players from the global state
const mapStateToProps = state => ({
  players: state.players,
  nightSelectNum: state.nightSelectNum
});

const mapDispatchToProps = dispatch => {
  return {
    toggle: (playerName, select) => dispatch(toggleSelect(playerName, select))
  };
};

// Connect this component to the store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersNight);
