import React from "react";
import logo from "./logo.svg";
import './styles/style.scss';
import styled, { keyframes } from "styled-components";
import UseScss from './components/UseScss';
import UseMemoObj from "./components/05_UseMemoObj";

function App() {
  // styled-components import
  const rotate = keyframes`
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
    `;

  const AppLogo = styled.img`
    animation: ${rotate} 20s infinite linear;
    height: 40vmin;
    pointer-events: none;
  `;

  const RootDiv = styled.div`
    text-align: center;
  `;

  const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `;

  const MyA = styled.a`
    color: #61dafb;
  `;
  return (
    <>
    {/* <UseScss></UseScss> */}
    <UseMemoObj></UseMemoObj>
    </>
  );
}
   
export default App;
