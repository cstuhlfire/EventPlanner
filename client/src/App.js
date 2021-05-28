import React from "react";
import CreateAccount from "./pages/CreateAccount"
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar.js";
import CreateEvent from "./pages/CreateEvent";
import ViewEvent from "./pages/ViewEvent";
import "./App.css"

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/CreateAccount"component={CreateAccount}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/CreateEvent" component={CreateEvent}/>
            <Route path="/event/:id" component={ViewEvent}/>
            <Route path="/*" component={Home}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
