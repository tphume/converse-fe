import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../rootReducer";

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
  // Other external stuff
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);

  // Define our local state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // On unmount reset local state
  useEffect(() => {
    setUsername("");
    setPassword("");
  }, []);

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
                onChange={(event) => setUsername(event.target.value)}
                value={username}
                fullWidth
                classes={{ root: classes.formInput }}
                disabled={loading}
              />
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                size="small"
                autoComplete="current-password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                fullWidth
                classes={{ root: classes.formInput }}
                disabled={loading}
              />
              <div className={classes.formButtons}>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className={classes.formLogin}
                  disabled={loading}
                  onClick={() =>
                    dispatch(
                      login({
                        username,
                        password,
                      })
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
                  disabled={loading}
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
