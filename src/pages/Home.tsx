import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../rootReducer";
import { logout } from "../features/user/user";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Home() {
  const dispatch = useDispatch();
  const { username } = useSelector((state: RootState) => state.user);

  return (
    <section>
      <Typography variant="h4">You are logged in as {username}</Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </section>
  );
}
