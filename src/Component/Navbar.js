import React, { Component } from "react";
import styled from "styled-components";
import "./Nav.css";
import { icon1 } from "./icon";
import { Link } from "react-router-dom";

const Icon = styled.img`
  width: 100px;
  height: 100px;
  padding-left: 5px;
  margin-top: 8px;
`;
const Button = styled.button`
  margin: 1em;
  colour: black;
  border: 3px solid #949cdf;
  border-radius: 7px;
  padding: 0.25em 1em;
  font-size: 20px;
  margin-right: 70px;
`;
export default class Navbar extends Component {
  render() {
    return (
      <div className="Nav">
        <Icon src={icon1} alt="error" />
        <div>
          <Link to="/Porfolio">
            <Button>Home</Button>
          </Link>
          <Link to="/About">
            <Button>About</Button>
          </Link>
          <Link to="MyWork">
            <Button>My Works</Button>
          </Link>
          <Link to="Contact">
            <Button>Contact</Button>
          </Link>
        </div>
      </div>
    );
  }
}
