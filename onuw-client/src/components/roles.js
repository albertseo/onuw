import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleRole } from "../actions/gameActions";

import {
  CenterComponentWrapper,
  Title,
  Line,
  PlayerCardWrapper,
  PlayerCard,
  PlayerCardSelected
} from "../theme/styles";

class Roles extends Component {
  constructor() {
    super();

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    let role = e.target.textContent;
    this.props.toggle(role, this.props.roles[role]);
  }

  render() {
    return (
      <CenterComponentWrapper>
        <Title>All Roles</Title>
        <Line />
        <PlayerCardWrapper>
          {Object.keys(this.props.roles).map(role => {
            if (!this.props.roles[role]) {
              return (
                <PlayerCard key={role} onClick={this.handleSelect}>
                  {role}
                </PlayerCard>
              );
            } else {
              return (
                <PlayerCardSelected key={role} onClick={this.handleSelect}>
                  {role}
                </PlayerCardSelected>
              );
            }
          })}
        </PlayerCardWrapper>
      </CenterComponentWrapper>
    );
  }
}

// The players component only needs the list of current players from the global state
const mapStateToProps = state => ({
  roles: state.allRoles
});

const mapDispatchToProps = dispatch => {
  return {
    toggle: (roleName, select) => dispatch(toggleRole(roleName, select))
  };
};

// Connect this component to the store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Roles);
