import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(): JSX.Element {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/friends">
            Friends
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/messages">
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/help">
            Help
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
