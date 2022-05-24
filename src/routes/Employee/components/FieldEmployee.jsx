import React from "react";
import { Form, Input, Col, Upload, message } from "antd";
import {  FolderOpenOutlined } from "@ant-design/icons";

import validation from "../../../core/helpers/validation";

function FieldEmployee() {

    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    return (
    <>
    <Col span={24}>
        <Form.Item
          label="Photo"
          name={"picture_url"}
        //   rules={[validation.required()]}
          >
          <Upload {...props}>
            <Input suffix={<FolderOpenOutlined />}></Input>
          </Upload>
        </Form.Item>
    </Col>
    <Col span={12} >
        <Form.Item
        label="NIK"
        name={"nik"}
        rules={[validation.required()]}
        >
        <Input />
        </Form.Item>
        <Form.Item
        label="Department"
        name={"department"}
        rules={[validation.required()]}
        >
        <Input />
        </Form.Item>
        <Form.Item
        label="Email"
        name={"email"}
        rules={[validation.required("please input your email"), validation.email()]}
        >
        <Input />
        </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item
        label="Nama Lengkap"
        name={"full_name"}
        rules={[validation.required()]}
        >
        <Input />
        </Form.Item>
        <Form.Item
        label="Jabatan"
        name={"position"}
        rules={[validation.required()]}
        >
        <Input />
        </Form.Item>
        <Form.Item
        label="No. Telepon"
        name={"phone"}
        rules={[validation.required()]}
        >
        <Input />
        </Form.Item>
    </Col>
    </>
    );
}

export default FieldEmployee;