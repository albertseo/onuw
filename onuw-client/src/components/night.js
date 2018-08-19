import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./header";
import Footer from "./footer";
import PlayersNight from "./playersNight";
import CenterCardsNight from "./centerCardsNight";
import {
  MainWrapper,
  RoleDisplay,
  DescriptionDisplay,
  StartButton
} from "../theme/styles";
import { performNightAction, majorityNumAdd } from "../actions/gameActions";

class Night extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props.selectedPlayers);
    if (this.props.nightSelectNum <= 0) { // Make sure that the full number of roles are selected
      this.setState({
        clicked: true
      });
      this.props.performNightAction(
        this.props.userRole,
        this.props.selectedPlayers
      );
    }
  }

  render() {
    let button;
    let noActionRoles = [
      "Villager 1",
      "Villager 2",
      "Minion",
      "Mason 1",
      "Mason 2",
      "Werewolf 1",
      "Werewolf 2",
      "Tanner",
      "Hunter",
      "Insomniac"
    ];
    if (noActionRoles.indexOf(this.props.userRole) > -1) { // If the user's role is a non-action role then just wait
      this.props.performNightAction(this.props.userRole, null);
      button = <StartButton>Waiting for other players...</StartButton>;
    } else if (this.state.clicked ) { // If the user already peformed their role
      button = <StartButton>Waiting for other players...</StartButton>;
    } else { // If the user needs to perform their role
      button = (
        <StartButton onClick={this.handleClick}>
          Perform Night Action
        </StartButton>
      );
    }

    return (
      <MainWrapper>
        <Header />
        <RoleDisplay>Your Role: {this.props.userRole}</RoleDisplay>
        <DescriptionDisplay>
          {this.props.userRoleDescription}
        </DescriptionDisplay>
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
  selectedPlayers: state.nightSelectPlayer,
  majNum: state.majorityNum,
  nightSelectNum: state.nightSelectNum
});

const mapDispatchToProps = dispatch => {
  return {
    performNightAction: (role, selectedPlayer) =>
      dispatch(performNightAction(role, selectedPlayer)),
    majAdd: () => dispatch(majorityNumAdd()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Night);
