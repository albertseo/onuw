import React, { Component } from "react";

import {
  CenterComponentWrapper,
  Title,
  Line,
  PlayerCardWrapper,
  PlayerCard
} from "../theme/styles";

// This component displays the center cards that are not assinged to a player
export default class Center extends Component {
  render() {
    return (
      <CenterComponentWrapper>
        <Title>Center Cards</Title>
        <Line />
        <PlayerCardWrapper>
          <PlayerCard>Alpha</PlayerCard>
          <PlayerCard>Beta</PlayerCard>
          <PlayerCard>Gamma</PlayerCard>
        </PlayerCardWrapper>
      </CenterComponentWrapper>
    );
  }
}
