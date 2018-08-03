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
    this.state = {
      numberOfSelectableRoles: 0
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e) {
    let role = e.target.textContent;
    let selected = this.props.roles[role];
    this.handleToggle(role, selected);
  }

  handleToggle(role, selected) {
    if (selected) {
      // If already selected, then can deselect whenever
      this.props.toggle(role, selected);
      this.setState({
        numberOfSelectableRoles: this.state.numberOfSelectableRoles + 1
      });
    } else if (!selected && this.state.numberOfSelectableRoles > 0) {
      // else if there's still room to select one more
      this.props.toggle(role, selected);
      this.setState({
        numberOfSelectableRoles: this.state.numberOfSelectableRoles - 1
      });
    }
  }

  componentWillMount() {
    // Should get an updated version of roles when it mounts
    this.setState({
      numberOfSelectableRoles: Object.keys(this.props.playersList).length + 3
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
  playersList: state.players,
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
