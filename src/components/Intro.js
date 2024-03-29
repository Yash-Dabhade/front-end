import React from "react";
import styled from "styled-components";
import profile_holder from "../res/profile_holder.jpg";
import Typer from "./Typer";

function Intro() {
  return (
    <Holder>
      <ImgHolder>
        <Terminal>
          <TaskBar>
            <Button1></Button1>
            <Button2></Button2>
            <Button3></Button3>
          </TaskBar>
          <Content>
            <Typer />
          </Content>
        </Terminal>
      </ImgHolder>
    </Holder>
  );
}

const Holder = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
  width: 100%;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

const Terminal = styled.div`
  border: 1px solid white;
  width: 1000px;

  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media (max-width: 650px) {
    width: 99%;
    align-self: center;
  }
`;

const Content = styled.div`
  border: 1px solid white;
  padding: 20px;
  width: auto;
  height: 400px;
  background: #0e101a;
  border-radius: 0px 0px 5px 5px;
  font-family: "VT323", monospace;
  color: white;
  font-size: 20px;
  @media (max-width: 650px) {
    height: 250px;
    font-size: 10px;
  }
`;

const TaskBar = styled.div`
  display: flex;
  border-radius: 5px 5px 0px 0px;
  align-items: center;
  padding: 3px;
  justify-content: start;
  gap: 5px;
  ${"" /* background: #494b4b; */}

  background:#F5F7FA;
  border: 1px solid white;
  height: 50px;

  @media (max-width: 650px) {
    height: 40px;
  }
`;

const Button1 = styled.div`
  background: red;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  @media (max-width: 650px) {
    height: 25px;
    width: 25px;
  }
`;

const Button2 = styled.div`
  background: yellow;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  @media (max-width: 650px) {
    height: 25px;
    width: 25px;
  }
`;

const Button3 = styled.div`
  background: green;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  @media (max-width: 650px) {
    height: 25px;
    width: 25px;
  }
`;

const ImgHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
  width: 1200px;
  border-radius: 80%;
  background: url(${profile_holder}) center center/cover no-repeat;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    width: 100%;
  }
`;

export default Intro;
