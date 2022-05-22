import React from "react";
import { Outlet } from "react-router-dom";
import { Layout as BaseLayout } from "antd";

import useLocalData from '../../core/hooks/useLocalData';
import Header from '../Header';
import Sidebar from '../Sidebar';

import './style.css';

function Layout() {

  const { store } = useLocalData();

  if (!store?.userData) {
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