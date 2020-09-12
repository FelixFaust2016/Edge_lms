import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../components/Logo";
import Button from "../components/Button";
import DropDown from "../components/DropDown";

const options = ["one", "two", "three"];

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
          name: "features",
          link: "/features",
        },
        {
          name: "getting started",
          link: "/getting_started",
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
                key={i}
                style={{ textDecoration: "none", color: "black" }}
                to={nav.link}
                activeClassName="active-nav"
              >
                <li>{nav.name}</li>
              </NavLink>
            ))}
            <DropDown />
          </ul>
          <NavLink
            to="/demo"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button />
          </NavLink>
        </nav>
        <ul className={hide === false ? "re-nav" : "drop"}>
          <div>
            <i
              style={{
                top: "20px",
                left: "20px",
                position: "fixed",
                fontSize: "1.5rem",
                display: hide === false ? "none" : "block",
              }}
              onClick={this.handeleHide}
              className="fas fa-times"
            ></i>
            {nav.map((nav, i) => (
              <NavLink
                key={i}
                style={{ textDecoration: "none", color: "black" }}
                to={nav.link}
                activeClassName="active-nav"
              >
                <li>{nav.name}</li>
              </NavLink>
            ))}{" "}
            <div style={{ margin: "20px auto" }}>
              <DropDown />
            </div>
          </div>
        </ul>
      </>
    );
  }
}

export default Navigation;
