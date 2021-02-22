import React, { Component } from "react";
import Img from "./1.gif";
import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Cookie", cursive;
  color: #949cdf;
  font-size: 80px;
  margin-top: 200px;
  margin-left: 1200px;
  margin-bottom: 0px;
`;
const Text = styled.p`
  font-size: 60px;
  font-family: "Noto Sans JP", sans-serif;
  margin-left: 1500px;
  margin-top: 10px;
`;
const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;
export default class Page1 extends Component {
  render() {
    return (
      <div>
        <H1>Hola ! I am Andrea !!!!</H1>
        <Text>A web developer</Text>
        <Image src={Img} alt="error" width="730" height="650" />
      </div>
    );
  }
}
