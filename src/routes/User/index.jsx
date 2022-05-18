import React, { useEffect, useState } from "react";
import { Modal, Switch, Col, Row, Pagination, Input, Button, Table, Spin, message } from "antd";
import {
  ReloadOutlined,
  MenuOutlined,
  PlusOutlined,
  EditOutlined,
  LockOutlined,
  CloseCircleFilled,
  SearchOutlined,
} from "@ant-design/icons";

import axios from "../../core/helpers/axios";
import useLocalData from "../../hooks/useLocalData";
import NewUser from "./components/New";
import UpdateUser from "./components/Update";
import UpdateUserPassword from "./components/UpdatePassword";
import "./style.css";

function Pengguna() {
  const { store } = useLocalData();
  const [tableData, setTableData] = useState({ offset: 0, limit: 10, resource: [], current: 0, total: 0 });
  const [filter, setFilter] = useState({ keyword: '' });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [loading, setLoading] = useState(false);
  axios.config(store);

  const columns = [
    {
      title: "NAMA",
      dataIndex: "full_name",
      key: "name",
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "NO. TELP",
      dataIndex: "phone",
      key: "notelp",
    },
    {
      title: "STATUS",
      key: "action",
      dataIndex: "is_active",
      render: (value, record) => <Switch checked={value} size="small" onClick={() => handleChangeStatus(record)}></Switch>,
    },
    {
      title: "UPDATE",
      key: "action",
      render: (_, record) => (
        <Button
          className="btn-sm btn-faint-primary"
          type=""
          onClick={() => showModal("updateUser", record)}
        >
          <EditOutlined />
        </Button>
      ),
    },
    {
      title: "PASSWORD",
      key: "action",
      render: (_, record) => (
        <Button
          className="btn-sm btn-faint-warning"
          type=""
          onClick={() => showModal("updatePassword", record)}
        >
          <LockOutlined />
        </Button>
      ),
    },
  ];

  const showModal = (type, record) => {
    let tempModalData = {
      content: <NewUser afterSubmit={() => afterSubmitUser()} />,
      title: "Tambah Pengguna",
      visible: true,
      onCancel: () => {
        setModalData({ visible: false });
      }
    };

    if (type === "updateUser") {
      tempModalData.content = <UpdateUser data={record} afterSubmit={() => afterSubmitUser()} />;
      tempModalData.title = "Ubah Pengguna";
    }

    if (type === "updatePassword") {
      tempModalData.content = <UpdateUserPassword data={record} afterSubmit={() => afterSubmitUser()} />;
      tempModalData.title = "Ubah Password";
    }

    setModalData(tempModalData);
  };

  function afterSubmitUser() {
    getListData();
    setModalData({ visible: false });
  }

  function handleChangeStatus(data) {
    const config = {
      title: "Konfirmasi",
      content: `Apakah anda yakin ${data.is_active ? 'menonaktifkan' : 'mengaktifkan'} user ${data.full_name}?`,
      onOk: () => {
        updateStatus(data);
      }
    };

    Modal.confirm(config);
  }

  function updateStatus(data) {
    setLoading(true);

    axios.put(`/user/${data.id}/active`, { is_active: !data.is_active }).then((response) => {
      getListData();
      message.success(response.data)

    }).catch(({ response }) => {
      message.error(response.data)
      setLoading(false);
    });
  }

  function getListData() {
    setLoading(true);
    axios.get('/user', { params: { keyword: filter.keyword, limit: tableData.limit, offset: tableData.offset } }).then((response) => {
      setLoading(false);
      setTableData({
        limit: response.data.limit,
        offset: response.data.offset,
        current: tableData.current,
        resource: response.data.data,
        total: response.data.total
      });
    }).catch(() => {
      setLoading(false);
    });
  }


  useEffect(() => {
    getListData();
  }, []);

  return (
    <div>
      <Row className="mb-4 mt-5 pt-2">
        <Col className="search" span={4}>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search"
            onChange={(val) => { setFilter({ keyword: val.target.value }) }}
            onPressEnter={() => getListData()}
          // suffix={<CloseCircleFilled />}
          ></Input>
        </Col>

        <Col span={2} offset={14}>
          <Button className="btn-user" type="primary" onClick={showModal}>
            Tambah User <PlusOutlined />
          </Button>
        </Col>

        <Col span={1} offset={1}>
          <Button className="btn-snow btn-sm" type="primary" onClick={() => getListData()}>
            <ReloadOutlined />
          </Button>
        </Col>

        <Col span={1}>
          <Button className="btn-snow btn-sm" type="primary">
            <MenuOutlined />
          </Button>
        </Col>
      </Row>

      <div className="list">
        <Spin spinning={loading}>
          <Table columns={columns} dataSource={tableData.resource} size="small" pagination={false} />
          <Pagination total={tableData.total} pageSize={tableData.limit} />
        </Spin>
      </div>


      <Modal
        footer={null}
        title={modalData?.title}
        visible={modalData?.visible}
        onCancel={modalData?.onCancel}
      >
        {modalData?.content}
      </Modal>

    </div>
  );
}

export default Pengguna;
