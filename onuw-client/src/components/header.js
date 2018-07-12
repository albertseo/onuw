import React, { Component } from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  margin-botton: 5px;
`;

const Title = styled.p`
  font-size: 2.25em;
  color: #e5e5e5;
  text-align: center;
  margin-bottom: 0px;
`;

const Line = styled.hr`
  color: #f7f7f7;
  background-color: #f7f7f7;
  height: 2px;
  margin-bottom: 0px;
`;

const TimeOfDay = styled.p`
  font-size: 1.75em;
  color: #e5e5e5;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 0px;
`;

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      gameStatus: "Lobby"
    };
  }
  render() {
    return (
      <HeaderWrapper>
        <Title>One Night Ultimate Werewolf</Title>
        <Line />
        <TimeOfDay>{this.state.gameStatus}</TimeOfDay>
      </HeaderWrapper>
    );
  }
}
