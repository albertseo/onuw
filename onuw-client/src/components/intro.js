import React, { Component } from 'react'

import Header from "./header";
import Players from "./players";
import Center from "./center";
import Footer from "./footer";
import { MainWrapper } from '../theme/styles';

export default class Intro extends Component {
  render() {
    return (
        <MainWrapper>
            <Header />
        </MainWrapper>
    )
  }
}
