import { Link } from "gatsby";
import React from "react";

import logo from "../images/logo-512.png";
import styles from "./header.module.css";

const NavItem = ({ name, url }) => (
  <Link to={ url } className={ styles.NavItem }>
    { name }
  </Link>
);

const Nav = () => (
  <nav className={ styles.Nav }>
    <NavItem name="Docs" url="/docs">Docs</NavItem>
    <NavItem name="Blog" url="/blog" />
  </nav>
);

const Logo = () => {
  return (
    <Link className={ styles.Logo } to="/">
      <img src={ logo } alt="Rojo" />
    </Link>
  );
};

const Header = () => (
  <header className={ styles.Header }>
    <div className={ styles.HeaderMain }>
      <Logo />
      <Nav />
    </div>
  </header>
);

export default Header;
