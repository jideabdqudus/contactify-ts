import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Spinner from "../assets/spinner.gif";

interface Props {
  component: any;
  auth: any;
  path?: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<Props> = ({
  component: Component,
  auth,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (auth.loading) {
        return <img src={Spinner} alt="Spinner" />;
      } else if (!auth.isAuthenticated) {
        return <Redirect to="/" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
