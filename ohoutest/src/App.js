import ManagerInfo from "./components/ManagerPage";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Container";
import SingUp from "./components/index";
import AnswerQnaContainer from "./components/ManagerPage/ManagerInfo/answerQna/AnswerQnaContainer";

import PopupBarContainer from "./components/PopupBar/Container";
import axios from "axios";
import RegistContainer from "./components/UserLogin/Regist/Container";
import Login2Container from "./components/UserLogin/Login2/Container";
import SearchContainer from "./components/Search/Container";
import CartContainer from "./components/Cart/Container";
import CommunityContainer from "./components/Comunity/Container";
import ReadMore from "./components/ReadMore";
import UserPage from "./components/userPage";
import ParticleTest from "./components/UserLogin/Particle/Components";

import MyQnaModalContainer from "./components/userPage/userMainPage/userHeaderComp/MyQnaModal/MyQnaModalContainer";
import UserMainPageContainer from "./components/userPage/userMainPage/UserMainPageContainer";
import MyQnaContainer from "./components/userPage/userMainPage/userHeaderComp/MyQnaList/MyQnaListContainer";
import UserMainPageComponent from "./components/userPage/userMainPage/UserMainPageComponent";
import UserPageUpperHeaderSec from "./components/userPage/userMainPage/userHeaderComp/UserPageUpperHeader";
import ChatContainer from "./components/Chat/Container";
import { useEffect, useRef, useState } from "react";
import { socket, SOCKET_EVENT } from "./service/socket.js";
axios.defaults.withCredentials = true;

function App() {
  return (
    <AppBox>
      {/* <SingUp></SingUp> */}
      <PopupBarContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/signUp" element={<SingUp></SingUp>}></Route>
        <Route path="/managerInfo" element={<ManagerInfo></ManagerInfo>} />
        <Route path="/regist1" element={<RegistContainer />} />
        <Route path="/login1" element={<Login2Container />} />
        {/* 회원가입 예외처리 하려고  27,28번줄 추가 */}
        <Route path="/search/:sword" element={<SearchContainer />} />
        {/* 회원가입 예외처리 하려고  26번 줄 추가 */}
        <Route
          path="/managerInfo/qnaAnswer/:id"
          element={
            <>
              <ManagerInfo />
              <AnswerQnaContainer />
            </>
          }
        />
        <Route path="/cart" element={<CartContainer />}></Route>
        <Route path="/community" element={<CommunityContainer />} />
        <Route
          path="/:userId/userPage/myShopping"
          element={<UserMainPageComponent />}
        />
        <Route path="/readmore/:productId" element={<ReadMore />} />
        <Route path="/userPage" element={<UserPage />} />
      </Routes>
      <ChatContainer />
      <Footer />
      <div style={{ backgroundColor: "#1a1c20" }}></div>{" "}
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
`;
