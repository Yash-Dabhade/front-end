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
  --border-size: 3px;
  --border-angle: 0turn;
  background-image: conic-gradient(
      from var(--border-angle),
      #213,
      #112 50%,
      #213
    ),
    conic-gradient(from var(--border-angle), transparent 20%, #08f, #f03);
  background-size: calc(100% - (var(--border-size) * 2))
      calc(100% - (var(--border-size) * 2)),
    cover;
  background-position: center center;
  background-repeat: no-repeat;
  animation: bg-spin 3s linear infinite;
  
  @keyframes bg-spin {
    to {
      --border-angle: 1turn;
    }
  }
  

  
  &:hover {
    animation-play-state: paused;
  }
}

@property --border-angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0turn;
}

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
