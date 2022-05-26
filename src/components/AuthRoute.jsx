import React from "react";
import { Navigate, useLocation } from "react-router-dom";


import axios from "../core/helpers/axios";
import cookie from "../core/helpers/cookie";

import useLocalData from "../core/hooks/useLocalData";

let isRequestingAuth = false;

export function AuthRoute({ children }) {
  const { store, dispatch } = useLocalData();

  async function checkingLoggedIn() {
    const userData = cookie.get('user');

    return new Promise(async (resolve) => {
      if (userData && !isRequestingAuth) {
        isRequestingAuth = true;
        await axios.post('/user-by-token', { token: JSON.parse(userData).access_token }, true).then((response) => {
          isRequestingAuth = false;
          cookie.set("user", JSON.stringify(response.data));
          dispatch({
            type: 'update',
            value: response.data,
            name: 'userData',
          });
          resolve(true);
        }).catch(() => {
          cookie.del('user');
          dispatch({
            type: 'update',
            value: null,
            name: 'userData',
          });
          isRequestingAuth = false;
          resolve(false);
        });

      }
    })
  }

  const isUserLoggedin = !store?.userData ? checkingLoggedIn() : store?.userData;

  let location = useLocation();
  if (!isUserLoggedin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
