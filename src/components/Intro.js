import React from "react";
import styled from "styled-components";
import profile_holder from "../res/profile_holder.jpg";
import profile from "../res/developer.jpg";

function Intro() {
  return (
    <Holder>
      <ImgHolder></ImgHolder>
    </Holder>
  );
}

const Holder = styled.div`
  display: flex
  align-items: center;
  justify-content: space-between;
  height: 10%;
  width: 100%;
`;

const Profile = styled.img`
  width: 500px;
  height: 400px;
`;

const ImgHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
  width: 800px;
  border-radius: 80% 30% 8% 80%;
  background: url(${profile_holder}) center center/cover no-repeat;
`;

export default Intro;
