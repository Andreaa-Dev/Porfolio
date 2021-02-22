import React, { Component } from "react";
import styled from "styled-components";
import ContactUs from "./ContactUs.gif";
import Phone from "./Phone.gif";
import Mailbox from "./Mailbox.gif";

const H1 = styled.h1`
  font-family: "Cookie", cursive;
  color: #949cdf;
  font-size: 80px;
  text-align: center;
`;

const Img = styled.img`
  margin-bottom: 0px;
  margin-left: 1700px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: table;
  justify-content: space-around;
`;

const Size = styled.div`
  font-size: 30px;
`;

export default class Contact extends Component {
  render() {
    return (
      <div>
        <H1>Get in touch !!! </H1>
        <Title>
          <div>
            <img src={Phone} alt="error" height="150px" width="150px" />
            <Size>+358 44981 6375 </Size>
          </div>
          <div>
            <img src={Mailbox} alt="error" height="150px" width="150px" />
            <Size>ngocanhhsgs@gmail.com</Size>
          </div>
        </Title>
        <Img src={ContactUs} alt="error" height="350px" width="350px" />
      </div>
    );
  }
}
