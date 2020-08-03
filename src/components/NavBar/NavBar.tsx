import React from "react";
import { NavLink, LinkProps } from "react-router-dom";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import People from "@material-ui/icons/People";
import Message from "@material-ui/icons/Message";
import Help from "@material-ui/icons/Help";

// List Sub-Component
const useListStyles = makeStyles((theme: Theme) => {
  return createStyles({
    container: {
      alignItems: "flex-end",
      padding: "4px 8px 4px 8px",
      borderRadius: "3px",
    },
    icon: {
      minWidth: "30px",
    },
    text: {
      fontSize: "0.95em",
      fontWeight: 600,
      color: theme.palette.primary.dark,
    },
    textBox: {
      margin: 0,
    },
  });
});

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<LinkProps, "to">>((itemProps, ref) => (
        <NavLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  const classes = useListStyles();

  return (
    <li>
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
          classes={{ primary: classes.text, root: classes.textBox }}
        />
      </ListItem>
    </li>
  );
}

// Main component starts here
const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
      maxWidth: "15em",
      borderRadius: "5px",
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

  return (
    <nav className={classes.root}>
      <List className={classes.container}>
        <ListItemLink
          to="/friends"
          primary="Friends"
          icon={<People classes={{ root: classes.svg }} />}
        />
        <Divider className={classes.break} />
        <ListItemLink
          to="/messages"
          primary="Messages"
          icon={<Message classes={{ root: classes.svg }} />}
        />
        <Divider className={classes.break} />
        <ListItemLink
          to="/help"
          primary="Help"
          icon={<Help classes={{ root: classes.svg }} />}
        />
      </List>
    </nav>
  );
}
