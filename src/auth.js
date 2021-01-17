
import React from "react";
import { Route, Redirect } from "react-router-dom";

export function PrivateRoute({ component: Component, ...rest }) {
  return (
      <Route
        {...rest}
        render={props =>
          isLoggedIn() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
  );
}

export function login(token) {
  localStorage.setItem("jwt", token);
}

export function logout() {
  localStorage.removeItem("jwt");
  window.location="/login";
}

export function getToken() {
  return localStorage.getItem("jwt");
}

export function isLoggedIn() {
  const loggedIn = getToken() !== null;
  return loggedIn;
}