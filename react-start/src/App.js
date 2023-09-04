import React from "react";
import logo from "./logo.svg";
import styled, { keyframes } from "styled-components";

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
    <RootDiv>
      <AppHeader>
        <AppLogo src={logo} alt="app" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyA
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </MyA>
      </AppHeader>
    </RootDiv>
  );
}

export default App;
