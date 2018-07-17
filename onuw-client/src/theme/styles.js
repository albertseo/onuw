import React, { Component } from "react";
import styled from "styled-components";

// Styled-Components for general components

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

// Styles Specific to players component
const PlayerWrapper = styled.div`
  justify-content: center;
  margin-top: 1em;
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

export { 
  PlayerWrapper,
  Title,
  Line, 
  PlayerListWrapper,
  PlayerDiv
};