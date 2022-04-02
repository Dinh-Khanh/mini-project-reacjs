import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav-header">
        <NavLink to="/" activeClassName="active-nav" exact>
          HOME
        </NavLink>
        <NavLink to="/todo" activeClassName="active-nav">
          TODO
        </NavLink>
        <NavLink to="/user" activeClassName="active-nav">
          USER
        </NavLink>
      </div>
    );
  }
}

export default Nav;
