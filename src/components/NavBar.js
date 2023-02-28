import React from "react";
import styled from "styled-components";
import img from "../res/logo.png";

function NavBar() {
  return (
    <Holder>
      <Img src={img}></Img>
      <Outer>
        <a href="#Skills">
          <Title>Skills</Title>
        </a>
        <a href="#Projects">
          <Title>Projects</Title>
        </a>
        <a href="#Contact">
          <Title>Get in Touch !</Title>
        </a>
        <a
          href={
            "https://drive.google.com/file/d/1ON1e4Wq0r9p1cxDe2pRdW1YQx02FYlyu/view?usp=share_link"
          }
        >
          <CustomButton>Download CV</CustomButton>
        </a>
      </Outer>
    </Holder>
  );
}
const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 10%;
  width: 100%;
`;

const Img = styled.img`
  height: 110px;
  width: 355px;
`;

const Outer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 10%;
  width: 95%;
  margin: 12px;
  border-radius: 15px;
  background: #010203;
  gap: 20px;
`;

const Title = styled.h2`
  color: white;
  font-size: 20px;
  margin: 12px;
  font-family: "Lobster", cursive;
  position: relative;
  cursor: pointer;
  font-family: "Signika Negative", sans-serif;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 4px;
    background-color: purple;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

const CustomButton = styled.button`
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;

  border-radius: 50px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(
    to right,
    #6253e1,
    #852d91,
    #a3a1ff,
    #f24645
  );
  box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);

  &:focus {
    outline: none;
  }

  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    background-image: linear-gradient(
      to right,
      #6253e1,
      #852d91,
      #a3a1ff,
      #f24645
    );
    box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
  }
`;

export default NavBar;
