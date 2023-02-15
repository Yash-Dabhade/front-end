import React from "react";
import styled from "styled-components";
import {
  GridItem,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  Image,
  Button,
  Heading,
  Stack,
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

import ProjectSlider from "./ProjectSlider";

function Projects() {
  const title = "</> Some of my amazing projects </>";
  return (
    <Holder>
      <Title>{title}</Title>
      <ProjectSlider />
    </Holder>
  );
}

const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
  flex-direction: column;
`;

const Title = styled.div`
  color: white;
  display: flex;
  ${"" /* width: 100%; */}
  align-items: center;

  justify-content: space-around;
  height: 100px;
  font-size: 50px;
  margin: 20px;
  cursor: pointer;
  font-family: "Rubik", sans-serif;
`;

export default Projects;
