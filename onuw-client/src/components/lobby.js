import React, { Component } from "react";

import Header from "./header";
import Players from "./players";
import Center from "./center";
import Footer from "./footer";
import { MainWrapper } from "../theme/styles";

export default class Lobby extends Component {
  render() {
    return (
      <MainWrapper>
        <Header />
        <Players />
        <Center />
        <Footer />
      </MainWrapper>
    );
  }
}
