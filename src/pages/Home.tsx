import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../rootReducer";
import { logout } from "../features/user/user";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
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
      [theme.breakpoints.down("xs")]: {
        justifyContent: "center",
      },
    },
    card: {
      borderColor: theme.palette.primary.main,
      marginTop: "5em",
      [theme.breakpoints.down("xs")]: {
        margin: "auto",
      },
    },
  });
});

export default function Home() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { username, status } = useSelector((state: RootState) => state.user);

  return (
    <Container className={classes.container}>
      <Card variant="outlined" classes={{ root: classes.card }}>
        <CardContent>
          <Typography variant="h4" component="h1" color="primary">
            {username}
          </Typography>
          <Typography color="textSecondary">{status}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            onClick={() => dispatch(logout())}
          >
            Logout
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
