import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/Home";
import Features from "../pages/Features";
import GettingStarted from "../pages/GetStarted";
import Resources from "../pages/Resources";

const Views = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/features" render={() => <Features />} />
        <Route
          exact
          path="/getting_started"
          render={() => <GettingStarted />}
        />
        <Route exact path="/demo" render={() => <Resources />} />
        <Route exact path="/" render={() => <HomePage />} />
      </Switch>
    </div>
  );
};

export default Views;
