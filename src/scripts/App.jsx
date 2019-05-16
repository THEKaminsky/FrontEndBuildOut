import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import _ from "lodash";

import GeneralInformation from "./GeneralInformation";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";
import NonGeneralTable from "./NonGeneralTable";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Montserrat;
    margin: 0;
  }
`;

const Columns = styled.div`
  background: #f3f3f3;
  display: flex;
  min-height: 100vh;
`;

const SidebarColumn = styled.div`
  flex: 1;
  min-height: 100%
  background-color: lightGrey;
  padding-top: 2rem;
  padding-bottom: 0;
  box-shadow: 0 4px 3px 4px grey;
`;

const MainColumn = styled.div`
  flex: 2;
  min-height: 100%;
  margin: 2rem 2rem 0 2rem;
`;

const App = () => {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Header />
        <Columns>
          <SidebarColumn>
            <Sidebar />
          </SidebarColumn>
          <MainColumn>
            <div>
              <Route exact path="/" component={Content} />
              <Route path="/general" component={GeneralInformation} />
              <Route path="/:name/:id" component={NonGeneralTable} />
            </div>
          </MainColumn>
        </Columns>
      </div>
    </Router>
  );
};

export default App;
