import React, { useEffect, useState } from 'react';
import { Table, Tag, Space, Button, Row, Col, Input, Modal, Pagination, Spin } from 'antd';
import {
EditOutlined,
SearchOutlined,
PlusOutlined,
ReloadOutlined,
UploadOutlined,
MailOutlined
} from "@ant-design/icons";

import axios from "../../core/helpers/axios";
import useLocalData from "../../hooks/useLocalData";
import ImportKaryawan from "./components/ImportKaryawan";
import EmployeeBaru from "./components/EmployeeBaru";

function Employee() {
  const { store } = useLocalData();
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
      render:  () => <img src={"images/Rectangle.png"} />
    },
    {
      title: "NAMA",
      dataIndex: "full_name",
      key: "name",
      // render: (text, record) => (
      //   <span>{record.first_name} {record.last_name} </span>
      // )
    },
    {
      title: "JABATAN ",
      dataIndex: "position",
      key: "position",
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

    function getListData() {
      setLoading(true);
      axios.get('/employee', { params: { keyword: filter.keyword, limit: tableData.limit, offset: tableData.offset} }).then((response) => {
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
            
        <Col span={1} offset={8}>
          <Button className="btn-import" >
          <UploadOutlined />Import 
          </Button>
        </Col>

        <Col span={1} offset={2}>
          <Button className="btn-export" >
          <UploadOutlined />Export
          </Button>
        </Col>

        <Col span={1} offset={1}>
          <Button className="btn-snow btn-sm" type="primary" onClick={() => getListData()}>
            <ReloadOutlined />
          </Button>
        </Col>

        <Col span={1} offset={1}>
          <Button className="btn-user" type="primary" onClick={showModal}>
            Karyawan Baru <PlusOutlined />
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
            title="Karyawan" 
            visible={isModalVisible} 
            onOk={handleOk} 
            onCancel={handleCancel}>
            <EmployeeBaru />
          </Modal>
    </div>
  );
}

export default Employee;