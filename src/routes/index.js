import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "../component/home/home";
import Weather from "../component/weather/weather";

export default function AppRoute() {
  return (
    <React.Suspense fallback={'loading'}>
      <Switch>
        <Route path={"/weather/:location"} component={Weather}/>
        <Route path={"/"} component={Home}/>
        <Route component={Home}/>
      </Switch>
    </React.Suspense>
  );
}