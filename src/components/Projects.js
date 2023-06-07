import React from "react";
import styled from "styled-components";

import ProjectSlider from "./ProjectSlider";

function Projects() {
  const title = "Some of my amazing projects 🚀";
  return (
    <Holder id="Projects">
      <Title>{title}</Title>
      <ProjectSlider />
    </Holder>
  );
}

const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  flex-direction: column;
  @media (max-width: 650px) {
    height: fit-content;
    width: 100%;
    font-size: 25px;
    text-align: center;
  }
`;

const Title = styled.div`
  color: white;
  display: flex;

  align-items: center;
  justify-content: space-around;
  height: 100px;
  font-size: 50px;
  margin: 20px;
  cursor: pointer;
  font-family: "Rubik", sans-serif;

  @media (max-width: 650px) {
    height: fit-content;
    width: 100%;
    font-size: 28px;
    text-align: center;
  }
`;

export default Projects;
