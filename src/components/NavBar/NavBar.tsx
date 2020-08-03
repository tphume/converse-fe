import React from "react";
import { NavLink, LinkProps } from "react-router-dom";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";

// ListItem Sub-Component
const useListStyles = makeStyles((them: Theme) => {
  return createStyles({
    container: {
      width: "80%",
      margin: "0.5em 10% 0.5em",
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

  const classes = useListStyles();

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<LinkProps, "to">>((itemProps, ref) => (
        <NavLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink} className={classes.container}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

// Main component starts here
const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
      width: "10em",
      borderRadius: "3px",
    },
  });
});

export default function NavBar() {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <List>
        <ListItemLink to="/friends" primary="Friends" />
        <Divider />
        <ListItemLink to="/messages" primary="Messages" />
        <Divider />
        <ListItemLink to="/" primary="Help" />
      </List>
    </nav>
  );
}
