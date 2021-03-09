import React, { Component } from "react";
import Img from "./1.gif";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Hello from "./hello.png";

const H1 = styled.div`
  font-family: "Cookie", cursive;
  color: #4a47a3;
  font-size: 80px;
  margin-top: 120px;
  margin-left: 1000px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
`;

const Text = styled.p`
  font-size: 40px;
  font-family: "Inconsolata", monospace;
  margin-left: 1050px;
  margin-top: 1px;
`;
const Text1 = styled.p`
  font-size: 30px;
  font-family: "Inconsolata", monospace;
  margin-left: 1000px;
  margin-top: 70px;
`;
const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Button = styled.button`
  margin: 1em;
  colour: black;
  border: 3px solid #949cdf;
  border-radius: 7px;
  padding: 0.25em 1em;
  font-size: 20px;
  margin-right: 100px;
  float: right;
`;
export default class Page1 extends Component {
  render() {
    return (
      <div>
        <H1>
          <img src={Hello} alt="error" height="150" width="150" />
          <Title>I am Andrea !!!!</Title>
        </H1>
        <Text>A web developer</Text>
        <Text1>
          I'm an Environmental Engineering based student and in the past few
          months I have been starting making a website and find it very
          interesting and wanted to know more. I believe that a good developer
          is always acquiring new skills, challenging their assumptions and
          seeking feedback to grow. Check out some of my projects in About
          section
        </Text1>
        <Link to="/About">
          <Button>Get to know me</Button>
        </Link>

        <Image src={Img} alt="error" width="870" height="800" />
      </div>
    );
  }
}
