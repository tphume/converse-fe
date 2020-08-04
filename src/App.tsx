import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./rootReducer";

import Typography from "@material-ui/core/Typography";
import NavBar from "./components/NavBar/NavBar";
import Friends from "./pages/Friends";
import Messages from "./pages/Messages";
import Help from "./pages/Help";

export default function App() {
  const { name } = useSelector((state: RootState) => state.user);

  if (name === "") {
    return (
      <main>
        <Typography variant="h1">You are not logged in</Typography>
      </main>
    );
  }

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
