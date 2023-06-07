import React from "react";
import styled from "styled-components";

import ItemCard from "./ItemCard";

import { Grid, GridItem } from "@chakra-ui/react";

function Skills() {
  let i = 1;
  let data = [
    "C",
    "C++",
    "JAVA",
    "JAVASCRIPT",
    "PYTHON",
    "HTML",
    "CSS",
    "FIGMA",
    "REACT JS",
    "EXPRESS JS",
    "NODE JS",
    "ANDROID",
    "FIREBASE",
    "GIT",
    "GITHUB",
    "MYSQL",
    "MONGO DB",
    "POSTMAN",
    "PHP",
    "ADOBE XD",
  ];
  return (
    <Holder id="Skills">
      <Title>Hands on Experience on Following Technologies💡</Title>
      <Grid templateColumns="repeat(4, 1fr)" gap={8}>
        {data.map((ele) => {
          return (
            <GridItem key={i}>
              <ItemCard title={ele} path={`./icons/${i++}.png`} />
            </GridItem>
          );
        })}
      </Grid>
    </Holder>
  );
}

const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 800px;
  flex-direction: column;
  padding: 120px 10px;
`;

const Title = styled.div`
  color: white;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  font-size: 45px;
  margin: 20px;
  cursor: pointer;
  font-family: "Rubik", sans-serif;
`;

export default Skills;
