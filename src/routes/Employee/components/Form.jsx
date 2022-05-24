import React, { useEffect, useState } from "react";
import {
  Form as BaseForm,
  Input,
  Row,
  Col,
  message,
  Upload,
  Button
} from "antd";
import { FolderOpenOutlined } from "@ant-design/icons";

import validation from "../../../core/helpers/validation";

function Form({ onCancel = () => null, onSubmit = () => null, data = null }) {
  const [form] = BaseForm.useForm();
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

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);
    onSubmit(formValues);
  }

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data])

  return (
    <BaseForm form={form} layout="vertical" onFinish={handleSubmit}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <BaseForm.Item
            label="Photo"
            name={"picture_url"}
            rules={[validation.required()]}>
            <Upload {...props}>
              <Input suffix={<FolderOpenOutlined />}></Input>
            </Upload>
          </BaseForm.Item>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={12} >
              <BaseForm.Item
                label="NIK"
                name={"nik"}
                rules={[validation.required()]}>
                <Input />
              </BaseForm.Item>
            </Col>

            <Col span={12} >
              <BaseForm.Item
                label="Nama Lengkap"
                name={"full_name"}
                rules={[validation.required()]}>
                <Input />
              </BaseForm.Item>
            </Col>
          </Row>
        </Col>

        <Col span={24}>

          <Row gutter={[16, 16]}>
            <Col span={12} >
              <BaseForm.Item
                label="Email"
                name={"email"}
                rules={[validation.required()]}>
                <Input />
              </BaseForm.Item>
            </Col>

            <Col span={12} >
              <BaseForm.Item
                label="No Telepon"
                name={"phone"}
                rules={[validation.required()]}>
                <Input />
              </BaseForm.Item>
            </Col>
          </Row>
        </Col>

        <Col span={24}>

          <Row gutter={[16, 16]}>
            <Col span={12} >
              <BaseForm.Item
                label="Department"
                name={"department"}
                rules={[validation.required()]}>
                <Input />
              </BaseForm.Item>
            </Col>

            <Col span={12} >
              <BaseForm.Item
                label="Jabatan"
                name={"position"}
                rules={[validation.required()]}>
                <Input />
              </BaseForm.Item>
            </Col>
          </Row>
        </Col>
        
      </Row>

      <div className="d-flex justify-content-center">
        <Button htmlType="button" onClick={onCancel}>
          Kembali
        </Button>

        <Button type="primary" htmlType="submit">
          Kirim
        </Button>
      </div>
    </BaseForm>
  );
};

export default Form;