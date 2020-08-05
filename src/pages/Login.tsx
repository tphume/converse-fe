import React from "react";
import { useDispatch } from "react-redux";

import { login } from "../features/user/user";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      height: "100%",
    },
    hero: {
      backgroundColor: theme.palette.primary.main,
    },
    heroHeader: {
      color: "white",
      fontWeight: 500,
    },
  });
});

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <section>
      <Grid container classes={{ container: classes.container }}>
        <Grid item sm={5} classes={{ item: classes.hero }}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heroHeader}
          >
            Converse
          </Typography>
        </Grid>
        <Grid item sm={7}>
          <Typography variant="h4" component="h1">
            Welcome Aboard
          </Typography>
          <Button onClick={() => dispatch(login("Phume"))}>Login</Button>
        </Grid>
      </Grid>
    </section>
  );
}
