import React from "react";

import Footer from "./footer";
import Header from "./header";

import "./layout.css";
import style from "./layout.module.css";

export const PageBlock = ({ className, children }) => (
  <div
    className={ className }
    style={{
      margin: `0 auto`,
      maxWidth: `60rem`,
      padding: `0 1rem`,
    }}
  >
    { children }
  </div>
);

export const NormalPage = ({ className, title, children }) => (
  <FullWidthPage>
    <h1 className={ style.NormalPageTitle }>{ title }</h1>
    <PageBlock className={ className }>
      { children }
    </PageBlock>
  </FullWidthPage>
);

export const FullWidthPage = ({ children }) => (
  <>
    <Header />
    <main style={{ flex: `1 0 auto` }}>
      { children }
    </main>
    <Footer />
  </>
);
