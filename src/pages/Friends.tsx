import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../rootReducer";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function Friends(): JSX.Element {
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
    <section>
      {friends.map((friend) => {
        return (
          <Card key={friend.id}>
            <CardContent>
              <Typography color="primary">{friend.username}:</Typography>
              <Typography>"{friend.status}"</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">message</Button>
            </CardActions>
          </Card>
        );
      })}
    </section>
  );
}
