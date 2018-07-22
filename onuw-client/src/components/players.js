import React, { Component } from "react";
import { connect } from "react-redux";

import {
  CenterComponentWrapper,
  Title,
  Line,
  PlayerCardWrapper,
  PlayerCard
} from "../theme/styles";

class Players extends Component {
  render() {
    return (
      <CenterComponentWrapper>
        <Title>Players</Title>
        <Line />
        <PlayerCardWrapper>
          {this.props.players.map(player => {
            return <PlayerCard>{player}</PlayerCard>;
          })}
        </PlayerCardWrapper>
      </CenterComponentWrapper>
    );
  }
}

// The players component only needs the list of current players from the global state
const mapStateToProps = state => ({
  players: state.players
});

// Connect this component to the store
export default connect(mapStateToProps)(Players);
