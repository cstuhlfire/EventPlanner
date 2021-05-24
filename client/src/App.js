import React from "react";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount"
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
          </Switch>
        </Router>
      </>
  );
}

export default App;
