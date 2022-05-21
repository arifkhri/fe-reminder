import React from "react";
import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import menu from './menu';

import './style.css';

const { Sider } = Layout;

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  function onClickNavItem(to) {
    navigate(to);
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
    >
      <div className="aside-content">
        <center>
          <img width={80} src="images/clodeo.png" alt="clodeo-logo" className="py-4" />
        </center>
        <Menu
          mode="inline"
          defaultSelectedKeys={['4']}
        >
          {
            menu.map((data) => {
              return (
                <Menu.Item className={`no-action ${data.to === location.pathname && 'active'}`} onClick={() => onClickNavItem(data.to)}>
                  <div className="menu-item d-flex px-3">
                    <img src={`/images/${data.to === location.pathname ? data.iconActive : data.icon}.svg`} className="mr-2" alt={`img-${data.icon}`} />
                    <span className="ml-2">{data.title}</span>
                  </div>
                </Menu.Item>
              )
            })
          }
        </Menu>
      </div>
    </Sider>
  );
}

export default Sidebar;

