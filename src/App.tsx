import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./layouts/nav/index";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import store from "./store";
import PrivateRoute from "./routes/privateRoutes";
import { loadUser } from "./actions/authAction";

const App: React.FC = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavBar title={"Contact Keeper"} />
          <ToastContainer />
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
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
