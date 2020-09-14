import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from "../../context/auth";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <AuthConsumer>
      {(value) => (
        <Route
          {...rest}
          render={(props) =>
            value.authTokens ? (
              <Component {...props} />
            ) : (
              <Redirect
                to={{ pathname: "/login", state: { referer: props.location } }}
              />
            )
          }
        />
      )}
    </AuthConsumer>
  );
}

export default PrivateRoute;
