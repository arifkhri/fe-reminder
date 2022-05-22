import React, { useEffect, useState } from "react";
import { Modal, Switch, Col, Row, Pagination, Input, Button, Table, Spin, message, Select } from "antd";
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
import useLocalData from "../../core/hooks/useLocalData";
import NewUser from "./components/New";
import UpdateUser from "./components/Update";
import UpdateUserPassword from "./components/UpdatePassword";

function User() {
  const { store, dispatch } = useLocalData();
  const [tableData, setTableData] = useState({ offset: 0, limit: 10, resource: [], current: 0, total: 0 });
  const [filter, setFilter] = useState({ keyword: '' });
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
      align: "center",
      dataIndex: "is_active",
      render: (value, record) => (
        store?.userData?.email != record.email ?
          <Switch checked={value} size="small" onClick={() => handleChangeStatus(record)}></Switch>
          : <></>
      )
    },
    {
      title: "UPDATE",
      align: "center",
      key: "action",
      render: (_, record) => (
        store?.userData?.email != record.email ?
          <Button
            className="btn-sm btn-faint-primary"
            type=""
            onClick={() => showModal("updateUser", record)}
          >
            <EditOutlined />
          </Button> : <></>
      ),
    },
    {
      title: "PASSWORD",
      align: "center",
      key: "action",
      render: (_, record) => (
        store?.userData?.email != record.email ?
          <Button
            className="btn-sm btn-faint-warning"
            type=""
            onClick={() => showModal("updatePassword", record)}
          >
            <LockOutlined />
          </Button> : <></>
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

  function getListData(changesFilter = {}) {
    const { limit = null } = changesFilter;

    setLoading(true);
    axios.get('/user', { params: { keyword: filter.keyword, limit: limit || tableData.limit, offset: tableData.offset } }).then((response) => {
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

  function handleChangeLimit(val) {
    getListData({ limit: val });
  }

  useEffect(() => {
    dispatch({
      type: 'update',
      name: 'headerTitle',
      value: 'Pengguna'
    });

    getListData();
  }, []);

  return (
    <>
      <Row className="mb-4 mt-5 pt-2">
        <Col className="search" xs={24} md={12}>
          <Col span={12}>
            <Input
              value={filter.keyword}
              prefix={<SearchOutlined />}
              placeholder="Cari"
              onChange={(val) => { setFilter({ keyword: val.target.value }) }}
              onPressEnter={() => getListData()}
              suffix={<CloseCircleFilled onClick={() => setFilter({ keyword: '' })} />}
            />
          </Col>
        </Col>

        <Col xs={24} md={12} className="mt-md-0  mt-2">
          <Row justify="end">
            <Col>
              <Button className="btn-user" type="primary" onClick={showModal}>
                Tambah User <PlusOutlined />
              </Button>
            </Col>

            <Col className="px-2">
              <Button className="btn-snow btn-sm" type="primary" onClick={() => getListData()}>
                <ReloadOutlined />
              </Button>
            </Col>

            {/* <Col>
              <Button className="btn-snow btn-sm" type="primary">
                <MenuOutlined />
              </Button>
            </Col> */}
          </Row>
        </Col>
      </Row>

      <div className="list">
        <Spin spinning={loading}>
          <Table scroll={true} columns={columns} dataSource={tableData.resource} size="small" pagination={false} />

          <Row className="mt-2">
            <Col xs={24} md={12}>
              <div className="d-flex align-items-center">
                <span className="d-flex align-items-center">
                  <span className="mr-2">Menampilkan</span>
                  <Select value={tableData.limit} onChange={handleChangeLimit}>
                    <Select.Option value={10}>10</Select.Option>
                    <Select.Option value={20}>20</Select.Option>
                    <Select.Option value={30}>30</Select.Option>
                  </Select>
                </span>
                <span className="px-2">|</span>
                <span>Total {tableData.total} </span>
              </div>
            </Col>

            <Col xs={24} md={12} className="mt-md-0 mt-2 d-flex justify-content-end">
              <Pagination total={tableData.total} pageSize={tableData.limit} />
            </Col>
          </Row>
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

    </>
  );
}

export default User;
