import React from "react";
import styled from "styled-components";
import img from "../res/pattern2.jpg";

function ItemCard(props) {
  return (
    <Card>
      <Img src={props.path}></Img>
      <Title>{props.title}</Title>
    </Card>
  );
}

const Card = styled.div`
  width: 220px;
  padding: 5px;
  margin: 20px;
  height: 80px;
  border: 1px solid white;
  display: flex;
  flex-direction: rows;
  align-items: center;
  justify-content: start;
  border-radius: 20px;
  background: url(${img}) center center/cover no-repeat;
`;

const Img = styled.img`
  width: 64px;
  height: 64px;
  margin: 5px;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 5px;
  font-family: "Lobster", cursive;
  cursor: pointer;
  font-family: "Signika Negative", sans-serif;
  color: white;
`;

export default ItemCard;
