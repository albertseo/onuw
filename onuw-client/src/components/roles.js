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

  handleSelect(role) {
    let selected = this.props.roles[role];
    this.handleToggle(role, selected);
  }

  handleToggle(role, selected) {
    if (selected) {
      // If already selected, then can deselect whenever
      this.props.toggle(role, selected);
    } else if (!selected && this.props.numRolesToSelect > 0) {
      // else if there's still room to select one more
      this.props.toggle(role, selected);
    }
  }

  componentWillMount() {
    // Should get an updated version of roles when it mounts
    this.setState({
      numberOfSelectableRoles: Object.keys(this.props.players).length + 3
    });
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
                <PlayerCard key={role} onClick={() => this.handleSelect(role)}>
                  {role}
                </PlayerCard>
              );
            } else {
              return (
                <PlayerCardSelected key={role} onClick={() => this.handleSelect(role)}>
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
  players: state.players,
  roles: state.allRoles,
  numRolesToSelect: Object.keys(state.players).length + 3 - state.numRoleSelected
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
