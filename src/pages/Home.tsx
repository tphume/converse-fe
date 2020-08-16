import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../rootReducer";
import { logout } from "../features/user/user";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "center",
    },
    header: {
      marginTop: "2em",
    },
    logout: {
      marginTop: "12px",
    },
  });
});

export default function Home() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { username, status } = useSelector((state: RootState) => state.user);

  return (
    <Container className={classes.container}>
      <Typography variant="h4" classes={{ root: classes.header }}>
        {username}
      </Typography>
      <Typography variant="h6" color="primary">
        {status}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => dispatch(logout())}
        classes={{ root: classes.logout }}
      >
        Logout
      </Button>
    </Container>
  );
}
