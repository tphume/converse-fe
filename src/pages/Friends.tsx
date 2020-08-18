import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFriends } from "../features/friends/friends";

import Typography from "@material-ui/core/Typography";

export default function Friends(): JSX.Element {
  return (
    <section>
      <Typography variant="h2">You are at Friends page</Typography>
    </section>
  );
}
