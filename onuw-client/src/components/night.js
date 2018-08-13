import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./header";
import Footer from "./footer";
import PlayersNight from "./playersNight";
import CenterCardsNight from "./centerCardsNight";
import { MainWrapper, RoleDisplay, DescriptionDisplay, StartButton } from "../theme/styles";
import { performNightAction } from "../actions/gameActions";

class Night extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true
    })
    this.props.performNightAction(this.props.userRole, this.props.selectedPlayers);
  }

  render() {
    let button;
    if (this.state.clicked) {
        button = <StartButton>Waiting for other players...</StartButton>
    } else {
        button = <StartButton onClick={this.handleClick}>Perform Night Action</StartButton>
    }
    
    return (
      <MainWrapper>
        <Header />
        <RoleDisplay>Your Role: {this.props.userRole}</RoleDisplay>
        <DescriptionDisplay>{this.props.userRoleDescription}</DescriptionDisplay>
        <PlayersNight />
        <CenterCardsNight />
        {button}
        <Footer />
      </MainWrapper>
    );
  }
}

const mapStateToProps = state => ({
  userRole: state.userRole,
  userRoleDescription: state.userRoleDescription,
  selectedPlayers: state.nightSelectPlayer
});

const mapDispatchToProps = dispatch => {
  return {
    performNightAction: (role, selectedPlayer) => dispatch(performNightAction(role, selectedPlayer))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Night);