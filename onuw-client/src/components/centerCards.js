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

class CenterCards extends Component {
  constructor() {
    super();

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    console.log("clicked");
    let player = e.target.textContent;
    this.props.toggle(player, this.props.center[player]);
  }

  render() {
    return (
      <CenterComponentWrapper>
        <Title>Center Cards</Title>
        <Line />
        <PlayerCardWrapper>
          {Object.keys(this.props.center).map(player => {
            if (!this.props.center[player]) {
              return (
                <PlayerCard key={player} onClick={this.handleSelect}>
                  {player}
                </PlayerCard>
              );
            } else {
              return (
                <PlayerCardSelected key={player} onClick={this.handleSelect}>
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
  center: state.centerCards
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
)(CenterCards);
