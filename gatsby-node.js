/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.forEach(edge => {
    const path = edge.node.frontmatter.path;

    if (path != null && path.startsWith("/docs")) {
      actions.createPage({
        path,
        component: require.resolve(`./src/components/doc-page.js`),
        context: { frontmatterPath: path },
      });
    }
  });
};