import React from "react";
import { useDispatch } from "react-redux";

import { login } from "../features/user/user";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Login() {
  const dispatch = useDispatch();

  return (
    <section>
      <Typography variant="h3">Welcome Aboard</Typography>
      <Button onClick={() => dispatch(login("Phume"))}>Login</Button>
    </section>
  );
}
