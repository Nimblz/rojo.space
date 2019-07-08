import React from "react";
import { graphql } from "gatsby"

import { NormalPage } from "./layout";
import SEO from "./seo";
import Markdown from "./markdown";
import DocsNav from "./docs-nav";

import style from "./doc-page.module.css";

export default ({ data, pageContext }) => {
  const { title } = pageContext;
  const { html } = data.file.children[0];

  return (
    <NormalPage className={ style.root } title={ title }>
      <SEO title={ title } />
      <div className={ style.navContainer }>
        <DocsNav />
      </div>
      <Markdown className={ style.body } html={ html } />
    </NormalPage>
  );
};

export const query = graphql`
  query($contentPath: String!) {
    file(relativePath: {eq: $contentPath}, sourceInstanceName: {eq: "docs"}) {
      children {
        ... on MarkdownRemark {
          html
        }
      }
    }
  }
`;
