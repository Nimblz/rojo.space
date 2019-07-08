const docPages = require("./docs/pages.json");

const md = /\.md$/;
const index = /\/index$/;

exports.createPages = async function({ actions, graphql }) {
  {
    function createDocPage(pageEntry) {
      const [title, contentPath, children] = pageEntry;

      console.log(title, contentPath, children);

      if (contentPath != null) {
        const path = "/docs/" + contentPath.replace(md, "").replace(index, "/");

        actions.createPage({
          path,
          component: require.resolve("./src/components/doc-page.js"),
          context: {
            contentPath,
            title,
          },
        });
      }

      if (children != null) {
        for (const childEntry of children) {
          createDocPage(childEntry);
        }
      }
    }

    for (const pageEntry of docPages) {
      createDocPage(pageEntry);
    }

    actions.createRedirect({
      fromPath: "/docs",
      toPath: "/docs/0.5.x",
      redirectInBrowser: true,
    });

    actions.createRedirect({
      fromPath: "/docs/latest",
      toPath: "/docs/0.5.x",
      redirectInBrowser: true,
    });
  }
};

exports.onCreateNode = async function({ node }) {
  if (node.internal.type === "SitePage") {
    console.log("creating page", node.path);
  }
};