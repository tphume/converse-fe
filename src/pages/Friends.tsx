import React from "react";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../rootReducer";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      width: "100%",
    },
    cardOnline: {
      margin: "8px 6px 8px 6px",
      borderColor: theme.palette.primary.main,
    },
    cardOffline: {
      margin: "8px 6px 8px 6px",
      borderColor: "#ef5350",
    },
    header: {
      fontSize: "1.4em",
    },
    text: {
      fontSize: "1em",
    },
  });
});

export default function Friends(): JSX.Element {
  const classes = useStyles();
  const { friends, loading } = useSelector((state: RootState) => state.friends);

  if (loading) {
    return (
      <section>
        <Typography variant="h2">Loading friends...</Typography>
      </section>
    );
  }

  if (friends.length === 0) {
    return (
      <section>
        <Typography variant="h2">You are at Friends page</Typography>
        <Typography variant="h4">But you have no friends</Typography>
      </section>
    );
  }

  return (
    <section className={classes.container}>
      <Grid container>
        {friends.map((friend) => {
          return (
            <Grid item xs={12} sm={4} md={3}>
              <Card
                key={friend.id}
                variant="outlined"
                classes={
                  friend.online
                    ? { root: classes.cardOnline }
                    : { root: classes.cardOffline }
                }
              >
                <CardContent>
                  <Typography color="primary" className={classes.header}>
                    {friend.username}
                  </Typography>
                  <Typography className={classes.text} color="textSecondary">
                    {friend.status}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    endIcon={<SendIcon />}
                  >
                    message
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
}
