import React from "react";
import { graphql } from "gatsby"

import { NormalPage } from "./layout";
import SEO from "./seo";
import Markdown from "./markdown";
import DocsNav from "./docs-nav";

import style from "./doc-page.module.css";

export default ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <NormalPage className={ style.root } title={ frontmatter.title }>
      <SEO title={ frontmatter.title } />
      <DocsNav className={ style.nav } />
      <Markdown className={ style.body } html={ html } />
    </NormalPage>
  );
};

export const query = graphql`
  query($frontmatterPath: String!) {
    markdownRemark(frontmatter: { path: { eq: $frontmatterPath } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
