import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./header";
import Footer from "./footer";
import PlayersNight from "./playersNight";
import CenterCardsNight from "./centerCardsNight";
import { MainWrapper, RoleDisplay, DescriptionDisplay } from "../theme/styles";

class Night extends Component {
  render() {
    return (
      <MainWrapper>
        <Header />
        <RoleDisplay>Your Role: {this.props.userRole}</RoleDisplay>
        <DescriptionDisplay>{this.props.userRoleDescription}</DescriptionDisplay>
        <PlayersNight />
        <CenterCardsNight />
        <Footer />
      </MainWrapper>
    );
  }
}

const mapStateToProps = state => ({
  userRole: state.userRole,
  userRoleDescription: state.userRoleDescription
});

export default connect(mapStateToProps)(Night);