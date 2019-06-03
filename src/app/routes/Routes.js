import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from  '../components/pages/LoginPage';
import RegisterPage from  '../components/pages/RegisterPage';
import DashboardPage from  '../components/pages/DashboardPage';
import ExplorePage from  '../components/pages/ExplorePage';
import RatePage from  '../components/pages/RatePage';

const Routing = () =>{
   return (
    <Router> 
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/explore" component={ExplorePage} />
        <Route exact path="/explore/:id" component={RatePage} />
      </Switch>
    </Router>
   );
}



export default Routing;
