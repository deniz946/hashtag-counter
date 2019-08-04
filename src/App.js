import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import * as styleConstants from "./style-constants";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  background-color: #eeecec;
  height: calc(100vh - ${styleConstants.headerHeight});
  font-family: ${styleConstants.defaultFontFamily};
`;

function App() {
  return (
    <div>
      <Header />
      <AppContainer>
        <div />
        <MainContainer />
        <div />
      </AppContainer>
    </div>
  );
}

export default App;
