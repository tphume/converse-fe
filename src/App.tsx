import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./rootReducer";

import Typography from "@material-ui/core/Typography";
import Login from "./pages/Login";
import NavBar from "./components/NavBar/NavBar";
import Friends from "./pages/Friends";
import Messages from "./pages/Messages";
import Help from "./pages/Help";

export default function App() {
  const { name } = useSelector((state: RootState) => state.user);

  if (name === "") {
    return (
      <main>
        <Login />
      </main>
    );
  }

  return (
    <main>
      <NavBar />
      <Typography variant="h1">{`You are logged in as ${name}`}</Typography>
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
