import React from "react";
import { Provider } from "react-redux";

import NavBar from "./layouts/nav/index";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import store from "./store";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar title={"Contact Keeper"} />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Login title="Account Login" />}
            />
            <Route
              exact
              path="/register"
              render={(props) => <Register title="Account Register" />}
            />
            <Route exact path="/dashboard" render={(props) => <Dashboard />} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
