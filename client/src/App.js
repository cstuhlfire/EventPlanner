import React from "react";
import CreateAccount from "./pages/CreateAccount"
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./App.css"

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <>
        <Router>
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
          </Switch>
        </Router>
      </>
  );
}

export default App;
