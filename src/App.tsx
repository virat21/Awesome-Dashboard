import React, { useState } from 'react';
import {LoginWithAuth} from './components/Login/Login';
import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from "styled-components";
import { themeName, getTheme } from 'utils/ThemeConfig';
import GlobalStyles from 'components/GlobalStyles/GlobalStyles';
import { OnBoard } from 'components/OnBoard/OnBoard';
import Header from 'components/Header/Header';

import Dashboard from 'components/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import AllPaletteModel from 'models/AllPaletteModel';
import { loadDummyData } from 'helper/dummyData';

//adding dummy data
loadDummyData();

//loading model
AllPaletteModel.getInstance().loadAll();


function App() {
  const [theme, setTheme] = useState<themeName>(themeName.LIGHT);

  const toggleTheme = ()=>{
    setTheme(
      theme === themeName.LIGHT
        ? themeName.DARK
        : themeName.LIGHT
    );
  }
  return (
    <Router>
      <ThemeProvider theme={getTheme(theme)}>
        <GlobalStyles />
        <Auth0Provider
          domain="dev-qazpgdcw.us.auth0.com"
          clientId="eZur7qp5V7zf7I61BXtbHGh3x6uzjM6m"
          redirectUri={window.location.origin+"/dashboard"}
          audience={
            "https://dev-qazpgdcw.us.auth0.com/api/v2/"
          }
          scope={
            "openid user_id profile fullname picture user_metadata"
          }
        >
          <div className="App">
            <Header
              toggleTheme={() => toggleTheme()}
            />
            <Switch>
              <Route path="/" exact>
                <OnBoard />
              </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="*" >
              <div>Not Found</div>
            </Route>
            </Switch>
          </div>
        </Auth0Provider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
