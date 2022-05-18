import React from "react";
import { Outlet } from "react-router-dom";
import { Layout as BaseLayout } from "antd";

import { useAuth } from '../core/AuthProvider';
import Header from './Header';
import Sidebar from './Sidebar';

function Layout() {

  const { user } = useAuth();

  if (!user) {
    return (
      <Outlet />
    )
  }

  return (
    <BaseLayout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <BaseLayout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <BaseLayout.Content style={{ margin: '0 16px' }}>
          <Outlet />
        </BaseLayout.Content>
      </BaseLayout>
    </BaseLayout>
  );
}

export default Layout;