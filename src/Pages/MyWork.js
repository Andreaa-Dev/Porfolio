import React, { Component } from "react";
import Navbar from "../Component/Navbar";
import styled from "styled-components";

const Projects = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Title = styled.h1`
  font-family: "Cookie", cursive;
  color: #949cdf;
  font-size: 80px;
  text-align: center;
`;

const Name = styled.a`
  font-family: "Noto Sans JP", sans-serif;
  color: #949cdf;
  font-size: 30px;
  text-align: center;
`;

export default class MyWork extends Component {
  render() {
    return (
      <div className="MyWork">
        <Title>Projects</Title>
        <Projects>
          <div>
            <img
              src="https://media.giphy.com/media/l4hLAf6Eo8DEcO5ZS/giphy.gif"
              alt="error"
              width="550px"
              height="400px"
            />
            <div>
              <Name href="https://github.com/AndreaBabyy/Dice-game">
                DICE GAME
              </Name>
            </div>
          </div>
          <div>
            <img
              src="https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif"
              alt="error"
              width="550px"
              height="400px"
            />
            <div>
              <Name href="https://github.com/AndreaBabyy/To-do-list-exercise">
                TO DO LIST
              </Name>
            </div>
          </div>

          <div>
            <img
              src="https://media.giphy.com/media/KxsmofvNnJWGLs3haf/giphy.gif"
              alt="error"
              width="550px"
              height="400px"
            />
            <p>DailyNews</p>
          </div>
        </Projects>
      </div>
    );
  }
}
