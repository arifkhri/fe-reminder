import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout, Row, Col, Divider, Space, Button, Avatar, Dropdown, Menu } from 'antd';
import { BellOutlined, GlobalOutlined, DownOutlined } from '@ant-design/icons';

import Notifications from '../Notifications';
import DropdownOverlay from '../DropdownOverlay';
import useLocalData from '../../hooks/useLocalData';
import cookie from '../../core/helpers/cookie';
// import { isEmptyObject } from '../../core/utils';

import './style.css';

export default function Header() {
  const { store, dispatch } = useLocalData();
  const { headerAction, account } = store || {};
  const sidebar = store?.layout?.sidebar || {};
  const navigate = useNavigate();
  const userData = {};
  // parseJwt(account?.data?.access_token);

  function handleSetLang(lang) {
    cookie.set('lang', lang);
    window.location.reload();
  }

  function handleLogout() {
    window.location.reload();
  }

  return (
    <Layout.Header className={`${sidebar.compact ? 'compact' : ''}`}>
      <Row align="middle" justify="space-between">
        <Col>
          <Space className="title-wrapper" size={20} direction="horizontal">
            <div className="d-flex">
              {headerAction?.prevPage && (
                <Link to={headerAction?.prevPage}>
                  <Button type="tertiary" iconName="CaretLeft" className="back-icon mr-3" />
                </Link>
              )}
              <label className="title">
                {headerAction?.title || ''}
              </label>
            </div>
            {(headerAction?.buttons || []).map((props, i) => {
              const { dropdown, ...restProps } = props;

              return (
                <Fragment key={`header-btn-${i}`}>
                  <Divider type="vertical" className="title-divider" />
                  {
                    <Button {...restProps} />
                  }
                </Fragment>
              )
            })
            }
          </Space>
        </Col>
        <Col>
          <Space className="header-toolbar" size={16}>
            <Dropdown
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
            </Dropdown>
            <Dropdown
              className="px-2"
              overlay={<Notifications />}
              placement="bottomRight"
              trigger={['click']}
            >
              <BellOutlined />
            </Dropdown>
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
                  <span className="pr-4 pl-2">Admin</span>
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
