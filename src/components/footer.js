import React from "react";

import { Link } from "components/Router";
import styles from "./footer.module.css";

const FooterNav = () => (
  <nav className={styles.FooterNav}>
    <a className={styles.NavItem} href="/docs">
      Docs
    </a>
    <Link className={styles.NavItem} to="/blog">
      Blog
    </Link>
  </nav>
);

const FooterAbout = () => (
  <div className={styles.FooterAbout}>
    <div>© {new Date().getFullYear()} Rojo</div>
  </div>
);

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.FooterMain}>
      <FooterAbout />
      <FooterNav />
    </div>
  </footer>
);

export default Footer;
