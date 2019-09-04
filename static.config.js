import React from "react";
import { useSiteData } from "react-static";

export default {
  siteRoot: "https://rojo.space",
  getSiteData: () => ({
    siteTitle: "Rojo",
    metaDescription: "Enables professional-grade development tools for Roblox developers",
  }),
  getRoutes: async () => {
    return [
      {
        path: "/",
        template: "src/pages/index",
      },
      {
        path: "/blog",
        template: "src/pages/blog",
      },
      {
        path: "/404",
        template: "src/pages/404",
      },
    ];
  },
  plugins: [
    require.resolve("react-static-plugin-react-router"),
    require.resolve("react-static-plugin-sitemap"),
    require.resolve("react-static-plugin-css-modules"),
  ],
};
