import React from "react";

let AuthContext = React.createContext(null);

export function useAuth() {
  return React.useContext(AuthContext);
}
