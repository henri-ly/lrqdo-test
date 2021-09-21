import React from "react";
import { NavLink } from "react-router-dom";

const StyledLink: React.FC<{ to: string; exact?: boolean }> = ({
  to,
  children,
  exact,
}) => {
  return (
    <NavLink exact={exact} activeStyle={{ fontWeight: "bold" }} to={to}>
      {children}
    </NavLink>
  );
};

export default StyledLink;
