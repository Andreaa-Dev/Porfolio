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
  margin-top: 10px;
`;

const Name = styled.a`
  font-family: "Noto Sans JP", sans-serif;
  color: #949cdf;
  font-size: 30px;
  text-align: center;
`;

const Box = styled.div`
  margin: 1em;
  colour: black;
  border: 3px solid black;
  border-radius: 7px;
  padding: 0.25em 1em;
`;

const Text = styled.p`
  font-size: 30px;
  font-family: "Inconsolata", monospace;
  text-align: center;
`;

export default class MyWork extends Component {
  render() {
    return (
      <div className="MyWork">
        <Title>Projects</Title>

        <Projects>
          <Box>
            <img
              src="https://media.giphy.com/media/l4hLAf6Eo8DEcO5ZS/giphy.gif"
              alt="error"
              width="550px"
              height="400px"
            />
            <div>
              <Name
                href="https://github.com/AndreaBabyy/Dice-game"
                target="_blank"
              >
                DICE GAME
              </Name>
            </div>
            <Text>
              Dice game project is the first project that I used JavaScript
              along with HTML and basic CSS. Dice game is a simple way to decide
              who is winner base on the random numbers.
            </Text>
          </Box>
          <Box>
            <img
              src="https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif"
              alt="error"
              width="550px"
              height="400px"
            />
            <div>
              <Name
                href="https://github.com/AndreaBabyy/To-do-list-exercise"
                target="_blank"
              >
                TO DO LIST
              </Name>
              <Text>
                "To Do List" is an website that is built with React framework
                that using props, state, Styled Components and class component.
              </Text>
            </div>
          </Box>

          <Box>
            <img
              src="https://media.giphy.com/media/l0HlPwMAzh13pcZ20/giphy.gif"
              alt="error"
              width="550px"
              height="400px"
            />
            <div>
              <Name
                href="git@github.com:AndreaBabyy/Weather-Live.git"
                target="_blank"
              >
                {" "}
                Weather Life
              </Name>
              <Text>
                Unlike the " To do list " project, "Weather Life" used Function
                Component along with "React_router" package and
                "Styled-Component" to style the website. In addition, fetch data
              </Text>
            </div>
          </Box>
        </Projects>
      </div>
    );
  }
}
