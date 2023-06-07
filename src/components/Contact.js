import React from "react";
import styled from "styled-components";
import Form from "./Form";

function Contact() {
  return (
    <Holder id="Contact">
      <Title>Let's get in touch with just single click 💁‍♂️! </Title>
      <Container>
        <Illustration />
        <Form />
      </Container>
    </Holder>
  );
}

const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 40px;
  height: 800px;
  margin: 120px 30px;
  flex-direction: column;
  @media (max-width: 650px) {
    height: fit-content;
    width: 100%;
    margin: 50px 0px;
  }
`;

const Title = styled.div`
  color: white;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  font-size: 50px;
  cursor: pointer;
  font-family: "Rubik", sans-serif;
  @media (max-width: 650px) {
    height: fit-content;
    width: 100%;
    font-size: 28px;
    text-align: center;
  }
`;

const Container = styled.div`
  color: white;
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  height: 800px;
  @media (max-width: 650px) {
    height: fit-content;
    width: 100%;
    height: fit-content;
    margin-top: 40px;
    text-align: center;
  }
`;

const Illustration = styled.div`
  display: flex;
  background: #ada996; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
    #ada996
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
    #ada996
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 12px 0px 0px 12px;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  height: 600px;
  width: 40px;
  border: 1px solid white;

  @media (max-width: 650px) {
    display: none;
  }
`;

export default Contact;
