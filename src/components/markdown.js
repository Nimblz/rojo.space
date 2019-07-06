import React from "react";

import styles from "./markdown.module.css";

export default ({ className, html }) => (
  <div className={`${ className || "" } ${ styles.root }`} dangerouslySetInnerHTML={{ __html: html }} />
);