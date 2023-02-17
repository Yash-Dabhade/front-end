import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import styled from "styled-components";
import bg from "../res/loginbg.jpg";

function Form() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Container>
      <FormControl>
        <Grid
          h="480px"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(2, 1fr)"
          gap={4}
        >
          <GridItem rowSpan={1}>
            <FormLabel marginTop={12} marginLeft={4}>
              First Name
            </FormLabel>
            <Input
              type="text"
              value={fname}
              border="1px solid transparent"
              borderRadius={10}
              style={{ fontWeight: "bold", fontSize: "14px" }}
              marginTop={12}
              width={280}
              height={30}
              required
              onChange={(e) => {
                setFName(e.target.value);
              }}
            />
          </GridItem>
          <GridItem rowSpan={1}>
            <FormLabel marginTop={12} marginLeft={4}>
              Last Name
            </FormLabel>
            <Input
              type="text"
              value={lname}
              border="1px solid transparent"
              borderRadius={10}
              marginTop={12}
              style={{ fontWeight: "bold", fontSize: "14px" }}
              width={280}
              height={30}
              required
              onChange={(e) => {
                setLName(e.target.value);
              }}
            />
          </GridItem>
          <GridItem rowSpan={2}>
            <FormLabel marginTop={12} marginLeft={4}>
              Email
            </FormLabel>
            <Input
              type="email"
              value={email}
              style={{ fontWeight: "bold", fontSize: "14px" }}
              border="1px solid transparent"
              borderRadius={10}
              height={30}
              marginTop={12}
              width={280}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </GridItem>
          <GridItem rowSpan={2}>
            <FormLabel marginTop={12} marginLeft={4}>
              Organization
            </FormLabel>
            <Input
              type="text"
              value={organization}
              style={{ fontWeight: "bold", fontSize: "14px" }}
              border="1px solid transparent"
              borderRadius={10}
              marginTop={12}
              height={30}
              width={280}
              required
              onChange={(e) => {
                setOrganization(e.target.value);
              }}
            />
          </GridItem>
          <GridItem rowSpan={2} colSpan={1}>
            <FormLabel marginTop={12} marginLeft={4}>
              Message
            </FormLabel>
            <Textarea
              type="text"
              border="1px solid transparent"
              borderRadius={10}
              marginTop={12}
              width={480}
              style={{ fontWeight: "bold", fontSize: "14px" }}
              required
              height={120}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=dabhadeyash1111@gmail.com&tf=cm">
              <Button>Send Now ⚡️</Button>
            </a>
          </GridItem>
        </Grid>
      </FormControl>
    </Container>
  );
}

const Container = styled.div`
  font-weight: bold;
  width: 800px;
  border: 1px solid white;
  padding: 80px;
  border-radius: 20px;
  font-family: "Ubuntu", sans-serif;
  background: url(${bg}) center center/cover no-repeat;
`;

const InsideHolder = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;

  border-radius: 50px;

  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(
    to right,
    #667eea,
    #764ba2,
    #6b8dd6,
    #8e37d7
  );
  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);

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

export default Form;
