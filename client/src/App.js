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
        <Navbar />
          <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/CreateAccount">
            <CreateAccount />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/CreateEvent">
           <CreateEvent />
          </Route>
          <Route path="/event/:id" component={ViewEvent}>
           <ViewEvent />
          </Route>
          <Route path="/*" component={Home}>
          </Route>
          </Switch>
        </Router>
      </>
  );
}

export default App;
