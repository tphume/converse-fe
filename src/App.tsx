import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Friends from "./pages/Friends";
import Messages from "./pages/Messages";
import Help from "./pages/Help";

export default function App() {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route exact path="/friends">
          <Friends />
        </Route>
        <Route exact path="/messages">
          <Messages />
        </Route>
        <Route exact path="/help">
          <Help />
        </Route>
      </Switch>
    </main>
  );
}
