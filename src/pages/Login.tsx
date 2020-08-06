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
      height: "100%",
      paddingTop: "15%",
      backgroundColor: theme.palette.primary.main,
      boxShadow: "4px 0 6px 4px hsla(0, 0%, 0%, 0.2)",
    },
    heroBox: {
      height: "100%",
      margin: "auto",
      maxWidth: "400px",
      display: "flex",
      flexDirection: "column",
    },
    heroHeader: {
      color: "white",
      fontWeight: 700,
      marginBottom: "5px",
    },
    heroDesc: {
      color: "white",
      fontWeight: 400,
      lineHeight: 1.4,
    },
    form: {
      height: "100%",
      paddingTop: "15%",
    },
    formBox: {
      height: "100%",
      margin: "auto",
      maxWidth: "500px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    formHeader: {
      marginBottom: "5px",
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
          <div className={classes.heroBox}>
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
        <Grid item sm={7} classes={{ item: classes.form }}>
          <div className={classes.formBox}>
            <Typography
              variant="h4"
              component="h1"
              className={classes.formHeader}
            >
              Welcome Aboard
            </Typography>
            <Button
              onClick={() =>
                dispatch(login({ username: "Phume", password: "somepassword" }))
              }
            >
              Login
            </Button>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
