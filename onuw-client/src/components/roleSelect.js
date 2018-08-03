import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./header";
import Footer from "./footer";
import Roles from "./roles";
import { MainWrapper } from "../theme/styles";

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


export default connect(null)(RoleSelect);