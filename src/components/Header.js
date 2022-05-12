import React from "react";
import 'antd/dist/antd.css';
import './Header.css';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

function App (){
    return (
    <Layout className="layout">
    <div className="container-fluid">
    <div className="Header">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark "
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(6).fill(null).map((_, index) => {
        const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
    </div>
    </div>
  </Layout>
    );
}

export default App;