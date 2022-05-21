import React, { useEffect, useState } from "react";

// import './style.css';
import {
  Layout,
  Table,
  Switch,
  Button,
  Col,
  Input,
  Row,
  Pagination,
  Spin,
  Modal,
} from "antd";
import {
  EditOutlined,
  PlusOutlined,
  DeleteOutlined,
  SearchOutlined,
  ReloadOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import axios from "../../core/helpers/axios";
import useLocalData from "../../hooks/useLocalData";
import CreateAgenda from "./components/Agenda Baru";

const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

function Agenda() {
  const { store } = useLocalData();
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({ keyword: "" });
  const [isModalVisible, setIsModalVisible] = useState(false);
  axios.config(store);
  const [tableData, setTableData] = useState({
    offset: 0,
    limit: 10,
    resource: [],
    current: 0,
    total: 0,
  });

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
      title: "NAMA",
      dataIndex: "employee",
      key: "employee",
      // render: (dataIndex) => ({ dataIndex: "employee_id", record }),
    },
    {
      title: "JABATAN",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "TANGGAL",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "KEPERLUAN",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "PENGINGAT",
      dataIndex: "remind_at",
      key: "remind_at",
    },
    {
      title: "STATUS",
      key: "action",
      dataIndex: "is_active",
      render: (text, record) => <Switch size="medium"></Switch>,
    },
    {
      title: "",
      key: "action",
      dataIndex: "edit",
      render: (text, record) => (
        <Button type="primary" className="btn-faint-primary">
          <EditOutlined />
        </Button>
      ),
    },
    {
      title: "",
      key: "action",
      dataIndex: "edit",
      render: (text, record) => (
        <Button type="primary" className="btn-faint-danger">
          <DeleteOutlined />
        </Button>
      ),
    },
  ];

  function getListData() {
    setLoading(true);
    axios
      .get("/agenda", {
        params: {
          keyword: filter.keyword,
          limit: tableData.limit,
          offset: tableData.offset,
        },
      })
      .then((response) => {
        setLoading(false);
        setTableData({
          limit: response.data.limit,
          offset: response.data.offset,
          current: tableData.current,
          resource: response.data.data,
          total: response.data.total,
        });
      })
      .catch(() => {
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
            onChange={(val) => {
              setFilter({ keyword: val.target.value });
            }}
            onPressEnter={() => getListData()}
            // suffix={<CloseCircleFilled />}
          ></Input>
        </Col>

        <Col span={1} offset={8}>
          <Button className="btn-import">
            <UploadOutlined />
            Import
          </Button>
        </Col>

        <Col span={2} offset={2}>
          <Button className="btn-export">
            <UploadOutlined />
            Export
          </Button>
        </Col>

        <Col span={2} offset={1}>
          <Button
            className="btn-snow btn-sm"
            type="primary"
            onClick={() => getListData()}
          >
            <ReloadOutlined />
          </Button>
        </Col>

        <Col span={1}>
          <Button className="btn-user" type="primary" onClick={showModal}>
            Agenda Baru <PlusOutlined />
          </Button>
        </Col>
      </Row>
      <div className="list">
        <Spin spinning={loading}>
          <Table
            columns={columns}
            dataSource={tableData.resource}
            size="small"
            pagination={false}
          />
          <Pagination total={tableData.total} pageSize={tableData.limit} />
        </Spin>
      </div>

      <Modal
        title="Agenda Baru"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <CreateAgenda />
      </Modal>
    </div>
  );
}

export default Agenda;
