import React from "react";
// import './style.css';
import { Layout, Table, Switch, Button, Col, Input, Row } from "antd";
import {
  EditOutlined,
  PlusOutlined,
  DeleteOutlined,
  SearchOutlined,
  ReloadOutlined,
  UploadOutlined,
} from "@ant-design/icons";

// import axios from "axios";
// import useLocalData from "../../hooks/useLocalData";

const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

function Agenda() {
  // const { store } = useLocalData();
  // axios.config(store);

  const columns = [
    {
      title: "NAMA",
      dataIndex: "employee_id",
      key: "name",
      // render: () => ({
      //   dataIndex: "id",
      // }),
    },
    {
      title: "JABATAN",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "TANGGAL",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "KEPERLUAN",
      dataIndex: "position",
      key: "position",
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
        <Button type="primary">
          <EditOutlined />
        </Button>
      ),
    },
    {
      title: "",
      key: "action",
      dataIndex: "edit",
      render: (text, record) => (
        <Button type="primary">
          <DeleteOutlined />
        </Button>
      ),
    },
  ];

  const data = [];
  // for (let i = 1; i < 30; i++) {
  //   data.push({
  //     key: i,
  //     employee_id: `James Alibaba`,
  //     id: `12345`,
  //     department: `Business Analyst`,
  //     date: `${i} Juli 2021`,
  //     position: `Review Kinerja Karyawan`,
  //     remind_at: `1 Juni 2021`,
  //   });
  // }
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
          <Button className="btn-snow btn-sm" type="primary">
            <ReloadOutlined />
          </Button>
        </Col>

        <Col span={1}>
          <Button className="btn-user" type="primary" oncl>
            Agenda Baru <PlusOutlined />
          </Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={data} />;
    </div>
  );
}

export default Agenda;
