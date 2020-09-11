import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DropDown from "react-dropdown"

import Logo from "../components/Logo";
import Button from "../components/Button";

const options = [
  'one', 'two', 'three'
];

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      nav: [
        {
          name: "home",
          link: "/",
        },
        {
          name: "getting started",
          link: "/getting_started",
        },
        {
          name: "features",
          link: "/features",
        },
        {
          name: "Resources",
          link: "/resources",
        },
      ],
    };
  }

  handeleHide = () => {
    this.setState({ hide: !this.state.hide });
  };

  render() {
    const { nav, hide } = this.state;
    return (
      <>
        <nav className="main-nav">
          <i onClick={this.handeleHide} className="fas fa-bars"></i>
          <Logo />
          <ul>
            {nav.map((nav, i) => (
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to={nav.link}
                activeClassName="active-nav"
              >
                <li key={i}>{nav.name}</li>
              </NavLink>
            ))}
          </ul>
          <Button />
        </nav>
        <ul className={hide === false ? "re-nav" : "drop"}>
          {nav.map((nav, i) => (
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to={nav.link}
              activeClassName="active-nav"
            >
              <li key={i}>{nav.name}</li>
            </NavLink>
          ))}
        </ul>
      </>
    );
  }
}

export default Navigation;
