import React from "react";
import { Outlet } from "react-router-dom";

import Header from './Header';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Sidebar />
    </div>
  );
}

export default Layout;