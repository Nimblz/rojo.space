import React, { useState } from "react";
import { Link } from "gatsby";

import docPages from "../../docs/pages.json";

import style from "./docs-nav.module.css";

const md = /\.md$/;
const index = /\/index$/;

const Arrow = () => (
  <svg viewBox="0 0 926.23699 573.74994" version="1.1" x="0px" y="0px" width="10" height="10" class="css-19n436v">
    <g transform="translate(904.92214,-879.1482)">
      <path d="
            m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,
            -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,
            0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,
            -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,
            -174.68583 0.6895,0 26.281,25.03215 56.8701,
            55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864
            -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,
            -104.0616 -231.873,-231.248 z
          " fill="currentColor"></path>
    </g>
  </svg>
);

const NavItem = ({ pageEntry: [title, contentPath, children] }) => {
  const [collapsed, setCollapsed] = useState(contentPath == null);

  let path = null;
  if (contentPath != null) {
    path = "/docs/" + contentPath.replace(md, "").replace(index, "/");
  }

  let childNav = null;
  if (children != null) {
    childNav = (
      <div className={`${ style.NavChildren } ${ collapsed ? style.NavChildrenCollapsed : "" }`}>
        { children.map((pageEntry, index) => (
          <NavItem key={ index } pageEntry={ pageEntry } />
        )) }
      </div>
    );
  }

  if (contentPath == null) {
    return (
      <div className={ style.NavItem }>
        <span className={ style.NavSection } onClick={ () => setCollapsed(!collapsed) }>
          { title }
          <span className={`${ style.SectionArrow } ${ collapsed ? style.SectionArrowCollapsed : "" }`}>
            <Arrow />
          </span>
        </span>
        { childNav }
      </div>
    );
  } else {
    return (
      <div className={ style.NavItem }>
        <Link className={ style.NavLink } activeClassName={ style.NavLinkActive } to={ path }>
          { title }
        </Link>
        { childNav }
      </div>
    );
  }
};

export default () => {
  return (
    <nav className={ style.DocsNav }>
      { docPages.map((pageEntry, index) => (
        <NavItem key={ index } pageEntry={ pageEntry } />
      )) }
    </nav>
  );
};