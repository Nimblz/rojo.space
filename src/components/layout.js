import React from "react";

import Header from "./header";
import Footer from "./footer";

export const PageBlock = ({ className, children }) => (
  <div
    className={className}
    style={{
      margin: `0 auto`,
      maxWidth: `60rem`,
      padding: `0 1rem`,
    }}
  >
    {children}
  </div>
);
