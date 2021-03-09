import React, { Component } from "react";
import Navbar from "../Component/Navbar";
import Code from "./Code.gif";

import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-family: "Cookie", cursive;
  color: #949cdf;
  font-size: 80px;
  margin-bottom: 0;
  margin-top: 5;
`;

const Text = styled.p`
  font-family: "Inconsolata", monospace;
  font-size: 30px;
  padding-bottom: 0px;
`;

const Text1 = styled.div`
  width: 100rem;
  margin: 0;
`;

export default class About extends Component {
  render() {
    return (
      <Container>
        <H1>Framework</H1>
        <Text1>
          <Text>
            I am familiar with <b> HTML, CSS</b> and <b>JavaScript </b> as the
            basic framework. In addition, I am also learning <b>React</b> and it
            has been a useful tool to create a Website since I has started
            learning coding.
          </Text>
        </Text1>

        <img src={Code} alt="error" width="700px" height="600px" />
      </Container>
    );
  }
}
