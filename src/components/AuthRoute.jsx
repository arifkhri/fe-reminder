import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import cookie from "../core/helpers/cookie";
import axios from "../core/helpers/axios";
import useLocalData from "../hooks/useLocalData";

export function AuthRoute({ children }) {
  const { store } = useLocalData();
  
  let location = useLocation();

  if (!store?.userData) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
