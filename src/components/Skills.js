import React from "react";
import styled from "styled-components";

import ItemCard from "./ItemCard";

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

      <GridContainer>
        {/* <SimpleGrid width={"100%"} minChildWidth="120px" spacing="18px"> */}
        {data.map((ele) => {
          return <ItemCard key={i} title={ele} path={`./icons/${i++}.png`} />;
        })}
        {/* </SimpleGrid> */}
      </GridContainer>
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
  @media (max-width: 650px) {
    height: fit-content;
    padding: 80px 4px;
  }
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
  @media (max-width: 650px) {
    height: fit-content;
    width: 100%;
    font-size: 25px;
    text-align: center;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default Skills;
