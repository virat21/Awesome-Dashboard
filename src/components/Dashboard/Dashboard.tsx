import React, { useEffect } from 'react';
import "./Dashboard.css";
import SideBar from 'components/SideBar/SideBar';
import Footer from 'components/Footer/Footer';
import ColorListing from 'components/ColorListing/ColorListing';
import { Switch, Route, useHistory } from 'react-router-dom';
import CreatePalette from 'components/CreatePalette/CreatePalette';
import { useAuth0 } from '@auth0/auth0-react';

export default function Dashboard() {
  let {isAuthenticated,isLoading,user} = useAuth0();
  console.log(isAuthenticated,isLoading,user);
  let history = useHistory();
  useEffect(()=>{
    if(!isLoading){
      if(!isAuthenticated){
        history.replace("/");
      }
    }
  },[isLoading]);

  if(isLoading || !isAuthenticated){
    return <div>Authenticating...</div>
  }

  
    return (
      <div className="dashboard">
        <SideBar />
        <div className="dashboardContainer">
          <div className="contains">
            <Switch>
              <Route path="/dashboard" exact>
                <ColorListing />
              </Route>
              <Route
                path="/dashboard/create"
                exact
              >
                <CreatePalette/>
              </Route>
              <Route
                path="/dashboard/*"
              >
                <div>Not Found</div>
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    );
}
