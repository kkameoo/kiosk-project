import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import styled from "styled-components";
import Menu from "./pages/Menu";

function App() {
  const Container = styled.div`
    margin: auto;
    width: 1140px;
    color: rgba(255, 255, 255, 0.589);
    background: linear-gradient(
      to right,
      black,
      grey,
      rgb(173, 173, 173),
      grey,
      black
    );
    ::after,
    ::before {
      box-sizing: border-box;
    }
  `;

  return (
    <Container className="container mt-5">
      <NavLink to="/">menuPage</NavLink>
      <br />
      <NavLink to="/home">HomePage</NavLink>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;
