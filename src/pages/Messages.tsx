import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import MessageBox from "../components/MessageBox/MessageBox";
import Typography from "@material-ui/core/Typography";

export default function Messages(): JSX.Element {
  let { path } = useRouteMatch();

  return (
    <>
      <section>
        <Typography variant="h2">You are at Messages page</Typography>
      </section>
      <Switch>
        <Route path={`${path}/:name`}>
          <MessageBox />
        </Route>
      </Switch>
    </>
  );
}
