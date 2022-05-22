import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import useLocalData from "../core/hooks/useLocalData";

export function AuthRoute({ children }) {
  const { store } = useLocalData();
  
  let location = useLocation();

  if (!store?.userData) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
