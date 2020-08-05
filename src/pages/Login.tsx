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
    box: {
      margin: "33% auto",
      maxWidth: "400px",
      display: "flex",
      flexDirection: "column",
    },
    hero: {
      backgroundColor: theme.palette.secondary.main,
    },
    heroHeader: {
      color: theme.palette.primary.main,
      fontWeight: 700,
    },
    heroDesc: {
      marginTop: "2px",
      color: theme.palette.primary.dark,
      fontWeight: 400,
      lineHeight: 1.4,
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
          <div className={classes.box}>
            <Typography
              variant="h3"
              component="h1"
              className={classes.heroHeader}
            >
              Converse
            </Typography>
            <Typography variant="subtitle1" className={classes.heroDesc}>
              What an amazing site. Made by an amazing person. This is some
              palceholder text, otherwise it's too empty. Insert some
              description here of something.
            </Typography>
          </div>
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
