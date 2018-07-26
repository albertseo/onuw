import React, { Component } from "react";

import { FooterWrapper, LinkText, FlexCenter } from "../theme/styles";

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <FlexCenter>
          One Night Ultimate Werewolf desinged by Ted Alspach and Akisha Okui,
          published by &nbsp;
          <a href="https://beziergames.com/" target="_blanck">
            <LinkText>Bexier Games</LinkText>
          </a>
        </FlexCenter>
        <a href="https://github.com/albertseo/onuw" target="_blanck">
          <LinkText>github.com/albertseo/onuw</LinkText>
        </a>
      </FooterWrapper>
    );
  }
}
