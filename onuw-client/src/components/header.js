import React, { Component } from "react";
import { connect } from "react-redux";
import { HeaderWrapper, GameTitle, Line, TimeOfDay } from "../theme/styles"

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <GameTitle>One Night Ultimate Werewolf</GameTitle>
        <Line />
        <TimeOfDay>{this.props.gameState}</TimeOfDay>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => ({
  gameState: state.gameState
})
export default connect(mapStateToProps)(Header);