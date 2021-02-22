import React, { Component } from "react";
import Navbar from "../Component/Navbar";
import HTML from "../Component/html.jpg";
import CSS from "../Component/css.jpg";
import JS from "../Component/js.jpg";
import ReactImg from "../Component/react.jpg";
import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Cookie", cursive;
  color: #949cdf;
  font-size: 80px;
  text-align: center;
`;

const Title = styled.p`
  text-align: center;
  font-size: 30px;
`;
const Prog = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export default class About extends Component {
  render() {
    return (
      <div>
        <H1>I am familiar with</H1>
        <Prog>
          <div>
            <Title>HTML</Title>
            <img src={HTML} alt="error" width="230px" height="230px" />
          </div>
          <div>
            <Title>CSS</Title>
            <img src={CSS} alt="error" width="250px" height="250px" />
          </div>
          <div>
            <Title>JavaScript</Title>
            <img src={JS} alt="error" width="360px" height="250px" />
          </div>
          <div>
            <Title>React</Title>
            <img src={ReactImg} alt="error" width="200px" height="230px" />
          </div>
        </Prog>
      </div>
    );
  }
}
