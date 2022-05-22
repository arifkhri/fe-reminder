import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Row, Col, Space, Avatar, Dropdown, Menu } from 'antd';
import { BellOutlined, DownOutlined } from '@ant-design/icons';

// import Notifications from '../Notifications';
import useLocalData from '../../core/hooks/useLocalData';
import cookie from '../../core/helpers/cookie';

import './style.css';

export default function Header() {
  const { store, dispatch } = useLocalData();
  const { headerTitle, userData } = store || {};
  const sidebar = store?.layout?.sidebar || {};
  const navigate = useNavigate();

  // function handleSetLang(lang) {
  //   cookie.set('lang', lang);
  //   window.location.reload();
  // }

  function handleLogout() {
    cookie.del('user');
    dispatch({
      type: 'update',
      value: null,
      name: 'userData',
    });
    navigate("/login");
  }

  return (
    <Layout.Header className={`${sidebar.compact ? 'compact' : ''}`}>
      <Row align="middle" justify="space-between">
        <Col>
          <Space className="title-wrapper" size={20} direction="horizontal">
            <div className="d-flex">
              <h1 className="title mt-3">
                {headerTitle || ''}
              </h1>
            </div>
          </Space>
        </Col>
        <Col>
          <Space className="header-toolbar" size={16}>
            {/* <Dropdown
              className="px-2"
              overlay={<DropdownOverlay items={[
                {
                  title: <Space>
                    <span>Indonesia</span>
                  </Space>,
                  onClick: () => handleSetLang('id')
                },
                {
                  title: <Space>
                    <span>English</span>
                  </Space>,
                  onClick: () => handleSetLang('en')
                }
              ]} />}
              placement="bottomRight"
              trigger={['click']}
            >
              <GlobalOutlined />
            </Dropdown> */}
            {/* <Dropdown
              className="px-2"
              overlay={<Notifications />}
              placement="bottomRight"
              trigger={['click']}
            >
              <BellOutlined />
            </Dropdown> */}
            <Dropdown
              overlay={<Menu
                items={[
                  {
                    label: (
                      <a onClick={handleLogout}>
                        Logout
                      </a>
                    ),
                  }]} />}
              placement="bottomRight"
              trigger={['click']}
            >
              <div className="avatar-group">
                <Avatar size="md" type="square" />
                <span className="label">
                  <span className="pr-4 pl-2">{userData?.full_name}</span>
                  <DownOutlined />
                </span>
              </div>
            </Dropdown>
          </Space>
        </Col>
      </Row>
    </Layout.Header >
  );
}
