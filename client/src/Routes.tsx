import { Switch, Route } from "react-router-dom";
import React from "react";
//Import your components here
import TestScreen from "./screens/TestScreen";
import Game from "./screens/Game";

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Game} />
      <Route exact path='/test-screen' component={TestScreen} />
      {/* <Route component={NotFound} />  */}
    </Switch>
  );
};

export default Routes;
