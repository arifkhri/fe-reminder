import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./context/useAuth";

export function AuthRoute({ children }) {
  let auth = useAuth();
  let location = useLocation();
  let Navigate = useNavigate();

  if (!auth?.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    // return <Navigate to="/login" state={{ from: location }} replace />;
    Navigate("/login");
  }

  return children;
}
