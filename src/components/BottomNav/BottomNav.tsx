import React from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Home from "@material-ui/icons/Home";
import People from "@material-ui/icons/People";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Help from "@material-ui/icons/Help";

export default function BottomNav() {
  return (
    <BottomNavigation>
      <BottomNavigationAction label="Home" value="/home" icon={<Home />} />
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
