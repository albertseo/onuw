import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

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

// Styles for subcomponents
const PlayerWrapper = styled.div`
  justify-content: center;
  margin-top: 1em;
`;

const Title = styled.p`
  font-size: 1.4em;
  color: #e5e5e5;
  text-align: left;
`;

const Line = styled.hr`
  color: #f7f7f7;
  background-color: #f7f7f7;
  height: 2px;
`;

const PlayerListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const PlayerDiv = styled.div`
  width: 45%;
  color: #f7f7f7;
  border-radius: 2px;
  display: flex;
  margin-top: 10px;

  &:hover {
    background-color: gray;
  }
`;
