import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { PlayerWrapper, Title, Line, PlayerListWrapper, PlayerDiv } from "../theme/styles"

class Players extends Component {
  render() {
    return (
      <PlayerWrapper>
        <Title>Players</Title>
        <Line />
        <PlayerListWrapper>
          {this.props.players.map(player => {
            return <PlayerDiv>{player}</PlayerDiv>;
          })}
        </PlayerListWrapper>
      </PlayerWrapper>
    );
  }
}

// The players component only needs the list of current players from the global state
const mapStateToProps = state => ({
  players: state.players
});

// Connect this component to the store
export default connect(mapStateToProps)(Players);