import "./App.css";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";

function App() {
  return (
    <Container>
      <NavBar />
      <Intro />
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  padding: 10px 10px;
  background: #010203;

  gap: 20px;
`;

export default App;
