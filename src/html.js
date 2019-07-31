import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Index from "./pages/index";

export default () => (
  <html>
    <head>
    </head>
    <body>
      <div id="content">
        <Header />

        <Route exact path="/" component={ Index } />

        <Footer />
      </div>
    </body>
  </html>
);