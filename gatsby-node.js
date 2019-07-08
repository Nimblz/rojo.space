const { readFile } = require("fs");
const yaml = require("js-yaml");

function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (error, data) => {
      if (error) {
        return reject(error);
      }

      resolve(data);
    });
  });
}

exports.createPages = async function({ actions, graphql }) {
  // const { data } = await graphql(`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             path
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // data.allMarkdownRemark.edges.forEach(edge => {
  //   const path = edge.node.frontmatter.path;

  //   if (path != null && path.startsWith("/docs")) {
  //     actions.createPage({
  //       path,
  //       component: require.resolve(`./src/components/doc-page.js`),
  //       context: { frontmatterPath: path },
  //     });
  //   }
  // });

  {
    const md = /\.md$/;
    const index = /\/index$/;
    const latestVersion = /^0\.5\.x\//;

    function traverse(pageMap, route) {
      for (const [title, sourcePath] of Object.entries(pageMap)) {
        console.log("visit", title, sourcePath);

        if (typeof sourcePath === "string") {
          const docsRelative = sourcePath.replace(md, "").replace(index, "/");
          const relativeUrl = "/docs/" + docsRelative;
          const breadcrumbTitle = [...route, title].join(" / ");

          actions.createPage({
            path: relativeUrl,
            component: require.resolve("./src/components/doc-page.js"),
            context: {
              sourcePath,
              title,
              breadcrumbTitle,
            },
          });

          if (latestVersion.test(sourcePath)) {
            const latestUrl = "/docs/latest/" + docsRelative.replace(latestVersion, "");

            actions.createRedirect({
              fromPath: latestUrl,
              toPath: relativeUrl,
              redirectInBrowser: true,
            });
          }

          console.log("");
        } else {
          for (const pages of sourcePath) {
            traverse(pages, [...route, title]);
          }
        }
      }
    }

    const docsContent = await readFilePromise("docs/pages.yml");
    const docs = yaml.safeLoad(docsContent);

    for (const pages of docs.pages) {
      traverse(pages, ["Docs"]);
    }

    actions.createRedirect({
      fromPath: "/docs",
      toPath: "/docs/0.5.x",
      redirectInBrowser: true,
    });
  }
};

exports.onCreateNode = async function({ node }) {
  if (node.internal.type === "SitePage") {
    console.log("creating page", node.path);
  } else {
    console.log(node.internal.type);
  }
};