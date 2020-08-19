import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../rootReducer";

import Typography from "@material-ui/core/Typography";

export default function Friends(): JSX.Element {
  const { friends } = useSelector((state: RootState) => state.friends);

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
      <Typography variant="h2">You are at Friends page</Typography>
      <ul>
        {friends.map((friend) => {
          return (
            <li key={friend.id}>
              <Typography>{friend.username}</Typography>
              <Typography>{friend.status}</Typography>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
