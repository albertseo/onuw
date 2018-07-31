import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./header";
import Footer from "./footer";
import Players from "./players";
import CenterCards from "./centerCards";
import { MainWrapper, RoleDisplay } from "../theme/styles";

class Night extends Component {
  render() {
    return (
      <MainWrapper>
        <Header />
        <RoleDisplay>Your Role: {this.props.userRole}</RoleDisplay>
        <RoleDisplay>{this.props.userRoleDescription}</RoleDisplay>
        <Players />
        <CenterCards />
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