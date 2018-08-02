import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./header";
import Footer from "./footer";
import Players from "./players";
import Roles from "./roles";
import { MainWrapper, RoleDisplay } from "../theme/styles";

class RoleSelect extends Component {
  render() {
    return (
      <MainWrapper>
        <Header />
        <Roles />
        <Footer />
      </MainWrapper>
    );
  }
}

const mapStateToProps = state => ({
  userRole: state.userRole,
  userRoleDescription: state.userRoleDescription
});

export default connect(mapStateToProps)(RoleSelect);