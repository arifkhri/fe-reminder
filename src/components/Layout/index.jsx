import React from "react";
import { Outlet } from "react-router-dom";
import { Layout as BaseLayout } from "antd";

import { useAuth } from '../../core/AuthProvider';
import Header from '../Header';
import Sidebar from '../Sidebar';

import './style.css';

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
        <BaseLayout.Content className="site-content-layout">
          <Outlet />
        </BaseLayout.Content>
      </BaseLayout>
    </BaseLayout>
  );
}

export default Layout;