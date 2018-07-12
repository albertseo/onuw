import React, { Component } from "react";
import styled from "styled-components";

export default class Center extends Component {
  render() {
    return (
      <CardWrapper>
        <Title>Center Cards</Title>
        <Line />
        <CardListWrapper>
          <CardDiv>Alpha</CardDiv>
          <CardDiv>Beta</CardDiv>
          <CardDiv>Gamma</CardDiv>
        </CardListWrapper>
      </CardWrapper>
    );
  }
}

// Styles for subcomponents
const CardWrapper = styled.div`
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

const CardListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const CardDiv = styled.div`
  width: 45%;
  color: #f7f7f7;
  border-radius: 2px;
  display: flex;
  margin-top: 10px;

  &:hover {
    background-color: gray;
  }
`;