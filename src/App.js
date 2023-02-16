import "./App.css";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
      <NavBar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
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
