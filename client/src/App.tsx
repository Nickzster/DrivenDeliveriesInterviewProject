import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Routes from "./Routes";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <h1>Driven Deliveries Interview Project</h1>
        <Switch>
          <Route component={Routes} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
