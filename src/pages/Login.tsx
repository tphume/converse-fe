import React from "react";
import { useDispatch } from "react-redux";

import { login } from "../features/user/user";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
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
      maxWidth: "400px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    formHeader: {
      marginBottom: "5px",
    },
    formInput: {
      marginTop: "12px",
    },
    formButtons: {
      width: "100%",
      margin: "15px 0 0 0",
      display: "flex",
      justifyContent: "space-between",
    },
    formLogin: {
      width: "45%",
      marginRight: "13%",
      flexGrow: 1,
    },
    formSignup: {
      flexGrow: 1,
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
            <form autoComplete="off">
              <TextField
                variant="outlined"
                label="Username"
                size="small"
                fullWidth
                classes={{ root: classes.formInput }}
              />
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                size="small"
                autoComplete="current-password"
                fullWidth
                classes={{ root: classes.formInput }}
              />
              <div className={classes.formButtons}>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className={classes.formLogin}
                  onClick={() =>
                    dispatch(
                      login({ username: "Phume", password: "somepassword" })
                    )
                  }
                >
                  Login
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.formSignup}
                >
                  Signup
                </Button>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </section>
  );
}
