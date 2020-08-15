import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./rootReducer";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Login from "./pages/Login";
import NavBar from "./components/NavBar/NavBar";
import BottomNav from "./components/BottomNav/BottomNav";
import Friends from "./pages/Friends";
import Messages from "./pages/Messages";
import Help from "./pages/Help";
import Home from "./pages/Home";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      display: "flex",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
      },
    },
  });
});

export default function App() {
  const classes = useStyles();
  const { username } = useSelector((state: RootState) => state.user);

  if (username === "") {
    return (
      <main>
        <Login />
      </main>
    );
  }

  return (
    <>
      <main className={classes.container}>
        <Hidden xsDown>
          <NavBar />
        </Hidden>
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
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Hidden smUp>
          <BottomNav />
        </Hidden>
      </main>
    </>
  );
}
