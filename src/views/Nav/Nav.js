import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav-header">
        <NavLink to="/" activeClassName="active-nav" exact>
          Home
        </NavLink>
        <NavLink to="/todo" activeClassName="active-nav">
          Todo
        </NavLink>
      </div>
    );
  }
}

export default Nav;
