import React, { Component } from "react";

import { FooterWrapper, Link } from "../theme/styles";

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <div>
          One Night Ultimate Werewolf desinged by Ted Alspach and Akisha Okui,
          published by &nbsp;
          <a href="https://beziergames.com/" target="_blanck">
            <Link>Bezier Games</Link>
          </a>.
        </div>
        <a href="https://github.com/albertseo/onuw" target="_blanck">
          <Link>github.com/albertseo/onuw</Link>
        </a>
      </FooterWrapper>
    );
  }
}
