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
// import AboutPage from "views/pages/AboutPage.js";
// import ScavengerPage from "views/pages/ScavengerPage.js";
import SchedulePage from "views/pages/SchedulePage.js";

import { Provider } from 'react-redux'
import store from "views/reduxFiles/store.js"
import RegisterPage from "views/pages/RegisterPage.js";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <HomePage {...props} />} />
        <Route path="/schedule" render={(props) => <SchedulePage {...props} />} />
        <Route path="/register" render={(props) => <RegisterPage {...props} />} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>,
  </Provider>,
  document.getElementById("root")
);
