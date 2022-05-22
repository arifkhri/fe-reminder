import React, { useEffect, useState } from 'react';
import { Table, Select, Button, Row, Col, Input, Modal, Pagination, Spin } from 'antd';
import {
  EditOutlined,
  SearchOutlined,
  PlusOutlined,
  ReloadOutlined,
  UploadOutlined,
  MailOutlined,
  ControlOutlined,
  CloseCircleFilled
} from "@ant-design/icons";

import axios from "../../core/helpers/axios";
import useLocalData from "../../core/hooks/useLocalData";
import ImportEmployee from "./components/Import";
import NewEmployee from "./components/New";

function Employee() {
  const { store, dispatch } = useLocalData();
  const [tableData, setTableData] = useState({ offset: 0, limit: 10, resource: [], current: 0, total: 0 });
  const [filter, setFilter] = useState({ keyword: '' });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  axios.config(store);


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "",
      dataIndex: "picture_url",
      key: "picture",
      render: (value) => <img src={value || "images/employee-default.png"} alt="employee" />
    },
    {
      title: "NAMA",
      dataIndex: "full_name",
      align: "center",
      key: "name",
      render: (value, record) => {
        return (
          <div className="d-flex d-flex align-items-center flex-column">
            <span className="value">{value}</span>
            <span className="desc-value">{record.nik || '-'}</span>
          </div>
        )
      }
    },
    {
      title: "JABATAN ",
      dataIndex: "position",
      align: "center",
      key: "position",
      render: (value, record) => {
        return (
          <div className="d-flex d-flex align-items-center flex-column">
            <span className="value">{value}</span>
            <span className="desc-value">{record.department || '-'}</span>
          </div>
        )
      }
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "NO.TELP",
      key: "tags",
      dataIndex: "phone",
    },
    {
      title: "",
      key: "action",
      dataIndex: "edit",
      render: (_, record) => (
        <Button
          className="btn-sm btn-faint-primary"
          type=""
        >
          <EditOutlined />
        </Button>
      ),
    },
  ];


  function handleChangeLimit(val) {
    getListData({ limit: val });
  }

  function getListData(changesFilter = {}) {
    const { limit = null } = changesFilter;

    setLoading(true);
    axios.get('/employee', { params: { keyword: filter.keyword, limit: limit || tableData.limit, offset: tableData.offset } }).then((response) => {
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

    dispatch({
      type: 'update',
      name: 'headerTitle',
      value: 'Karyawan'
    });

    getListData();
  }, []);

  return (
    <div>
      <Row className="mb-4 mt-5 pt-2">
        <Col className="search" xs={24} md={12}>
          <Row justify="start">

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

            <Col>
              <Button className="btn-snow btn-sm ml-3" type="primary">
                <ControlOutlined />
              </Button>
            </Col>
          </Row>
        </Col>

        <Col xs={24} md={12} className="mt-md-0  mt-2">
          <Row justify="end">
            <Col className="px-2">
              <Button className="btn-snow-success" >
                <UploadOutlined />Import
              </Button>
            </Col>

            <Col>
              <Button className="btn-snow-danger" type="primary" onClick={showModal}>
                <UploadOutlined />Export
              </Button>
            </Col>

            <Col className="pl-2 pr-4 mr-4 border-right">
              <Button className="btn-snow btn-sm" type="primary" onClick={() => getListData()}>
                <ReloadOutlined />
              </Button>
            </Col>

            <Col>
              <Button className="btn-user" type="primary" onClick={showModal}>
                Karyawan Baru <PlusOutlined />
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
          <Table columns={columns} dataSource={tableData.resource} size="small" pagination={false} />
          
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
        title="Karyawan"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}>
        <NewEmployee />
      </Modal>
    </div>
  );
}

export default Employee;