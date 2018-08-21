import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./header";
import Footer from "./footer";

import {
  MainWrapper,
  SpacerDiv,
  DescriptionDisplay,
} from "../theme/styles";

class Finale extends Component {
  render() {
    return (
      <MainWrapper>
        <Header />
        <SpacerDiv />
        <DescriptionDisplay>The village killed off: {this.props.killed["vote"]}</DescriptionDisplay>
        <DescriptionDisplay>{this.props.killed["hunter"]}</DescriptionDisplay>
        <Footer />
      </MainWrapper>
    );
  }
}

const mapStateToProps = state => ({
    killed: state.killed,
});

export default connect(mapStateToProps, null)(Finale);