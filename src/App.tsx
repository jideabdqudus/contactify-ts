import React from "react";
import NavBar from "./layouts/nav/index";
import Register from "./pages/Register"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <NavBar title={"Contact Keeper"} />
        <Switch>
          <Route exact path ="/register" component={Register}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
