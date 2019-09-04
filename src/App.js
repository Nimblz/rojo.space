import React from "react";
import { Root, Routes } from "react-static";

import Header from "components/header";
import Footer from "components/footer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import "./App.css";

const App = () => (
  <Root>
    <Router>
      <Header />
      <main style={{ flex: "1 0 auto" }}>
        <React.Suspense fallback={ <div> ahhh </div> }>
          <Switch>
            <Route render={() => <Routes />} />
          </Switch>
        </React.Suspense>
       </main>
      <Footer />
    </Router>
  </Root>
);

export default App;
