import React, { useState } from "react";
import { Modal, Switch, Col, Row, Card, Input, Button, Table } from "antd";
import {
  ReloadOutlined,
  MenuOutlined,
  PlusOutlined,
  EditOutlined,
  LockOutlined,
  CloseCircleFilled,
  SearchOutlined,
} from "@ant-design/icons";

import NewUser from "./components/New";
import UpdateUser from "./components/Update";
import UpdateUserPassword from "./components/UpdatePassword";
import "./style.css";

function Pengguna() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  const columns = [
    {
      title: "NAMA",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "NO. TELP",
      dataIndex: "notelp",
      key: "notelp",
    },
    {
      title: "STATUS",
      key: "action",
      render: () => <Switch size="small" onClick={onClick}></Switch>,
    },
    {
      title: "UPDATE",
      key: "action",
      render: () => (
        <Button
          className="btn-sm btn-faint-primary"
          type=""
          onClick={() => showModal("updateUser")}
        >
          <EditOutlined />
        </Button>
      ),
    },
    {
      title: "PASSWORD",
      key: "action",
      render: () => (
        <Button
          className="btn-sm btn-faint-warning"
          type=""
          onClick={() => showModal("updatePassword")}
        >
          <LockOutlined />
        </Button>
      ),
    },
  ];

  const showModal = (type) => {
    let tempModalData = {
      content: <NewUser />,
      title: "Tambah Pengguna",
      visible: true,
      onCancel: () => {
        setModalData({ visible: false });
      },
      // [<Button onCancel={handleCancelModal} onSubmit={handleOk}></Button>]}
    };

    if (type == "updateUser") {
      tempModalData.content = <UpdateUser />;
      tempModalData.title = "Ubah Pengguna";
    }

    if (type == "updatePassword") {
      tempModalData.content = <UpdateUserPassword />;
      tempModalData.title = "Ubah Password";
    }

    setModalData(tempModalData);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancelModal = () => {
    setModalData({ visible: false });
  };

  const pengguna = [];
  for (let i = 0; i < 46; i++) {
    pengguna.push({
      key: i,
      name: `Edward King ${i}`,
      email: "edwardking@gmail",
      notelp: "01234567",
    });
  }

  function onClick(checked) {
    Modal.confirm(config);
  }

  const config = {
    title: "Konfirmasi",
    content: (
      <p>
        apakah anda yakin mengaktifkan user ini? ,
        <Button label="hide" onClick={() => Modal.destroyAll()}>
          hide
        </Button>
      </p>
    ),

    onCancel: () => { },
  };

  return (
    <div>
      <Row className="mb-4 mt-5 pt-2">
        <Col className="search" span={4}>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search"
            // suffix={<CloseCircleFilled />}
          ></Input>
        </Col>
        <Col span={2} offset={14}>
          <Button className="btn-user" type="primary" onClick={showModal}>
            Tambah User <PlusOutlined />
          </Button>
        </Col>
        <Col span={1} offset={1}>
          <Button className="btn-snow btn-sm" type="primary">
            <ReloadOutlined />
          </Button>
        </Col>
        <Col span={1}>
          <Button className="btn-snow btn-sm" type="primary">
            <MenuOutlined />
          </Button>
        </Col>
      </Row>

      <Modal
        footer={null}
        title={modalData?.title}
        visible={modalData?.visible}
        onCancel={modalData?.onCancel}
      >
        {modalData?.content}
      </Modal>

      <Table columns={columns} dataSource={pengguna} size="small" />
    </div>
  );
}

export default Pengguna;