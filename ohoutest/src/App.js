import ManagerInfo from "./components/ManagerPage";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Container";
import SingUp from "./components/index";
import axios from "axios";
axios.defaults.withCredentials = true;

function App() {
  return (
    <AppBox>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/signUp" element={<SingUp></SingUp>}></Route>
        <Route path="/managerInfo" element={<ManagerInfo></ManagerInfo>} />
      </Routes>
      <Footer />
      <div style={{ backgroundColor: "#1a1c20" }}></div>
    </AppBox>
  );
}

export default App;

const AppBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f4f4f4;
  height: 3000px;
`;
