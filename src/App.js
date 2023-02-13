import "./App.css";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";

function App() {
  return (
    <Container>
      <NavBar />
      <Intro />
      <Skills />
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  padding: 10px 10px;
  background: #010203;
  display: flex;
  flex-direction: column;
  gap: 120px;
`;

export default App;
