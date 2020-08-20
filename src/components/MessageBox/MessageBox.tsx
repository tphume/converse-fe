import React from "react";
import { useParams } from "react-router";

import Typography from "@material-ui/core/Typography";

export default function MessageBox() {
  const { name } = useParams();

  return (
    <>
      <Typography variant="h2">You are now talking to {name}</Typography>
    </>
  );
}
