
import React from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "./components/authContext";

export function PrivateRoute({ component: Component, ...rest }) {
  let user = getUser();
  return (
    <UserContext.Provider value={user}>
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
    </UserContext.Provider>
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

export function getUser() {
  if (isLoggedIn() === false) return {};
  try {
    const jwt = getToken()
    return parseJwt(jwt);
  } catch (e) {
    return false;
  }
}

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
}
