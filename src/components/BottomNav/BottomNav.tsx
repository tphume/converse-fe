import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Home from "@material-ui/icons/Home";
import People from "@material-ui/icons/People";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Help from "@material-ui/icons/Help";

export default function BottomNav() {
  const location = useLocation();
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<{}>, value: string) => {
    history.push(value);
  };

  return (
    <BottomNavigation value={location.pathname} onChange={handleChange}>
      <BottomNavigationAction label="Home" value="/" icon={<Home />} />
      <BottomNavigationAction
        label="Friends"
        value="/friends"
        icon={<People />}
      />
      <BottomNavigationAction
        label="Messages"
        value="/messages"
        icon={<ChatBubble />}
      />
      <BottomNavigationAction label="Help" value="/help" icon={<Help />} />
    </BottomNavigation>
  );
}
