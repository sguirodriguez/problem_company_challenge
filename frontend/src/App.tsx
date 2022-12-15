import React from "react";
import { GoogleWrapper } from "./context/google";
import RoutesComponent from "./routes/index";
import { GlobalStyle } from "./styles/globalStyles";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { TranslateWrapper } from "./context/translate";

function App() {
  const options = {
    timeout: 6000,
    position: positions.TOP_CENTER,
  };

  return (
    <>
      <TranslateWrapper>
        <Provider template={AlertTemplate} {...options}>
          <GoogleWrapper>
            <GlobalStyle />
            <RoutesComponent />
          </GoogleWrapper>
        </Provider>
      </TranslateWrapper>
    </>
  );
}

export default App;
