import { Switch, Route } from "react-router-dom";
import React from "react";
//Import your components here
import TestScreen from "./screens/TestScreen";
import Board from "./screens/Checkboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Board} />
      <Route exact path='/test-screen' component={TestScreen} />
      {/* <Route component={NotFound} />  */}
    </Switch>
  );
};

export default Routes;
