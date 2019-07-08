import { Link } from "gatsby";
import React from "react";

import logo from "../images/logo-512.png";
import style from "./header.module.css";

const NavItem = ({ name, url }) => (
  <Link to={ url } className={ style.NavItem } activeClassName={ style.ActiveNavItem } partiallyActive={ true }>
    { name }
  </Link>
);

const Nav = () => (
  <nav className={ style.Nav }>
    <NavItem name="Docs" url="/docs">Docs</NavItem>
    <NavItem name="Blog" url="/blog" />
  </nav>
);

const Logo = () => {
  return (
    <Link className={ style.Logo } to="/">
      <img src={ logo } alt="Rojo" />
    </Link>
  );
};

const Header = () => (
  <header className={ style.Header }>
    <div className={ style.HeaderMain }>
      <Logo />
      <Nav />
    </div>
  </header>
);

export default Header;
