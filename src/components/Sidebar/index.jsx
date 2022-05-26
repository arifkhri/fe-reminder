import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu, Button, Modal } from 'antd';
import { PlusOutlined } from "@ant-design/icons";

import menu from './menu';
import CreateAgenda from "../../routes/Agenda/components/New";
import useLocalData from "../../core/hooks/useLocalData";

import './style.css';

const { Sider } = Layout;
let isRefresh = 0;
function Sidebar() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const location = useLocation();
  const { dispatch } = useLocalData();
  const navigate = useNavigate();

  function onClickNavItem(to) {
    navigate(to);
  }

  function afterSubmitAgenda() {
    dispatch({
      type: 'update',
      name: 'refreshList',
      value: ++isRefresh
    })
    setIsModalVisible(false);
  }

  return (
    <>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="aside-content">
          <center>
            <img width={80} src="images/clodeo.png" alt="clodeo-logo" className="py-4" />
          </center>
          <center>
            <Button className="btn-primary-gradient mb-1" type="primary" onClick={() => setIsModalVisible(true)}>
              Agenda Baru <PlusOutlined />
            </Button>
          </center>
          <Menu
            className="mt-4"
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

      <Modal
        title="Agenda Baru"
        visible={isModalVisible}
        onCancel={() => afterSubmitAgenda()}
        footer={null}
      >
        <CreateAgenda afterSubmit={afterSubmitAgenda} onCancel={() => setIsModalVisible(false)}/>
      </Modal>
    </>
  );
}

export default Sidebar;

