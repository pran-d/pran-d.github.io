import React from "react";
import { ServerReceive } from "./utils/ServerReceive.js";
import { ServerSend } from "./utils/ServerSend.js";
import { Route, HashRouter, Switch, Redirect } from "react-router-dom";
import { Navbar } from "./views/components/Navbar/Navbar.js";

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/data" />
        </Route>
        <Route path="/data">
          <ServerReceive />
        </Route>
        <Route exact path="/send">
          <ServerSend />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
