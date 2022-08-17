/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import HomePage from "views/pages/HomePage.js";
import AboutPage from "views/pages/AboutPage.js";
import CorporatePage from "views/pages/CorporatePage.js";
import ExtraPage from "views/pages/ExtraPage.js";
import ScavengerPage from "views/pages/ScavengerPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={(props) => <HomePage {...props} />} />
      <Route path="/about" render={(props) => <AboutPage {...props} />} />
      <Route path="/sponsor" render={(props) => <CorporatePage {...props} />} />
      <Route path="/extra" render={(props) => <ExtraPage {...props} />} />
      <Route path="/scavenger" render={(props) => <ScavengerPage {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
