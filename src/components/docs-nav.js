import React from "react";
import { graphql, useStaticQuery } from "gatsby"

export default ({ className }) => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           headings {
  //             value
  //             depth
  //           }
  //           frontmatter {
  //             title
  //             path
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // const children = data.allMarkdownRemark.edges
  //   .filter(edge => !!edge.node.frontmatter.path && edge.node.frontmatter.path.startsWith("/docs"))
  //   .map((edge, key) => (
  //     <div key={ key }>
  //       { edge.node.frontmatter.title }
  //     </div>
  //   ));

  return (
    <nav className={ className }>foo</nav>
  );
};