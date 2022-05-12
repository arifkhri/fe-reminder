import React from "react";
// import './style.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

function Agenda() {
  return (
    <div>
      <h2>Agenda</h2>
    </div>
  );
}

export default Agenda;
