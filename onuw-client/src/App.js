import React, { Component } from "react";
import { connect } from "react-redux";

import Intro from "./components/intro";
import Lobby from "./components/lobby";
import RoleSelect from "./components/roleSelect";
import Night from "./components/night";
import Day from "./components/day";

class App extends Component {
  render() {
    // Load the view that matches the current state of the game
    switch (this.props.gamePhase) {
      case "Intro":
        return <Intro />;
      case "Lobby":
        return <Lobby />;
      case "Pick Roles":
        return <RoleSelect/>;
      case "Night":
        return <Night />;
      case "Daytime":
        return <Day />;
      default:
        return <Intro />;
    }
  }
}

const mapStateToProps = state => ({
  gamePhase: state.gamePhase
});

export default connect(mapStateToProps)(App);
