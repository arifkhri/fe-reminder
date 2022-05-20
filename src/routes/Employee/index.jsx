import React, { useState } from 'react';
import { Table, Tag, Space, Button, Row, Col, Input, Modal } from 'antd';
import {
EditOutlined,
SearchOutlined,
PlusOutlined,
ReloadOutlined,
UploadOutlined
} from "@ant-design/icons";

import ImportKaryawan from "./components/ImportKaryawan";

function Employee() {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      // render: text => <a>{text}</a>,
    },
    {
      title: "JABATAN ",
      dataIndex: "departmen",
      key: "departmen",
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

  const data = [];
    for (let i = 0; i < 50; i++) {
      data.push({
        key: i,
        full_name: `James Alibaba`,
        departmen: `Business Analyst`,
        email: 'JamesAlibaba@gmail.com',
        phone: `0890283620${i}`,
        picture_url: '',
      });
    }

  return (
    <div>
      <Row className="mb-4 mt-5 pt-2">
        <Col className="search" span={4}>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search"
            // onChange={(val) => { setFilter({ keyword: val.target.value }) }}
            // onPressEnter={() => getListData()}
          // suffix={<CloseCircleFilled />}
          ></Input>
        </Col>
            
        <Col span={1} offset={8}>
          <Button className="btn-import" onClick={showModal} >
          <UploadOutlined />Import 
          </Button>
        </Col>

        <Col span={1} offset={2}>
          <Button className="btn-export" >
          <UploadOutlined />Export
          </Button>
        </Col>

        <Col span={1} offset={1}>
          <Button className="btn-snow btn-sm" type="primary" >
            <ReloadOutlined />
          </Button>
        </Col>

        <Col span={1} offset={1}>
          <Button className="btn-user" type="primary">
            Karyawan Baru <PlusOutlined />
          </Button>
        </Col>
        
      </Row>

      <div>
        <Table columns={columns} dataSource={data} />;
      </div>

      <Modal  
            footer={null} 
            title="Import Karyawan" 
            visible={isModalVisible} 
            onOk={handleOk} 
            onCancel={handleCancel}>
            <ImportKaryawan />
          </Modal>
    </div>
  );
}

export default Employee;