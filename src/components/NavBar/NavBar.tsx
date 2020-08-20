import React from "react";
import { NavLink, LinkProps, useLocation } from "react-router-dom";

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Home from "@material-ui/icons/Home";
import People from "@material-ui/icons/People";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Help from "@material-ui/icons/Help";

// List Sub-Component
const useListStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      alignItems: "flex-end",
      padding: "6px 8px 6px 8px",
      borderRadius: "3px",
    },
    list: {
      backgroundColor: theme.palette.secondary.main,
    },
    icon: {
      minWidth: "30px",
    },
    text: {
      fontSize: "1.1em",
      fontWeight: 600,
    },
    textColor: {
      color: theme.palette.primary.main,
      fontSize: "1.1em",
      fontWeight: 600,
    },
    textBox: {
      margin: 0,
    },
    empty: {},
  });
});

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

interface ListProps extends ListItemLinkProps {
  current: string;
}

function ListItemLink(props: ListProps) {
  const { icon, primary, to, current } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<LinkProps, "to">>((itemProps, ref) => (
        <NavLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  const classes = useListStyles();
  const color = isCurrent(to, current);

  return (
    <li className={color ? classes.list : classes.empty}>
      <ListItem button component={renderLink} className={classes.container}>
        {icon ? (
          <ListItemIcon
            classes={{ root: classes.icon, alignItemsFlexStart: classes.icon }}
          >
            {icon}
          </ListItemIcon>
        ) : null}
        <ListItemText
          primary={primary}
          classes={{
            primary: color ? classes.textColor : classes.text,
            root: classes.textBox,
          }}
        />
      </ListItem>
    </li>
  );
}

// Main component starts here
const drawerWidth = "240px";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        height: "100%",
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    container: {
      padding: "12px 8px 12px 8px",
    },
    break: {
      margin: "4px 0 4px 0",
      backgroundColor: "#e8eef3",
      height: "2px",
    },
    svg: {
      fontSize: "1.3rem",
    },
  });
});

export default function NavBar() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <nav className={classes.drawer}>
      <Drawer
        variant="permanent"
        anchor="left"
        open
        classes={{ paper: classes.drawerPaper }}
      >
        <List className={classes.container}>
          <ListItemLink
            to="/"
            current={location.pathname}
            primary="Home"
            icon={
              <Home
                classes={{ root: classes.svg }}
                color={setIconColor("/", location.pathname)}
              />
            }
          />
          <ListItemLink
            to="/friends"
            current={location.pathname}
            primary="Friends"
            icon={
              <People
                classes={{ root: classes.svg }}
                color={setIconColor("/friends", location.pathname)}
              />
            }
          />
          <ListItemLink
            to="/messages"
            current={location.pathname}
            primary="Messages"
            icon={
              <ChatBubble
                classes={{ root: classes.svg }}
                color={setIconColor("/messages", location.pathname)}
              />
            }
          />
          <ListItemLink
            to="/help"
            current={location.pathname}
            primary="Help"
            icon={
              <Help
                classes={{ root: classes.svg }}
                color={setIconColor("/help", location.pathname)}
              />
            }
          />
        </List>
      </Drawer>
    </nav>
  );
}

// Helper function to set colors
function isCurrent(route: string, current: string): boolean {
  if (route !== "/") {
    return current.includes(route) ? true : false;
  }

  return current === route ? true : false;
}

function setIconColor(
  route: string,
  current: string
): "inherit" | "primary" | "secondary" | "action" | "disabled" | "error" {
  if (route !== "/") {
    return current.includes(route) ? "primary" : "inherit";
  }

  return current === route ? "primary" : "inherit";
}
