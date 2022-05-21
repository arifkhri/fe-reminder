import React, { useState } from "react";
import {
    Form,
    Input,
    Button,
    Checkbox,
    Card,
    Row,
    Col,
    Modal,
    message,
    Spin,
    Upload
  } from "antd";
import {UploadOutlined, FolderOpenOutlined} from "@ant-design/icons";

import validation from "../../../../core/helpers/validation";
import axios from "../../../../core/helpers/axios";
import useLocalData from "../../../../hooks/useLocalData";

import "./style.css";

function NewEmployee() {
  const { store } = useLocalData();
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [form] = Form.useForm();
  axios.config(store);

//   const onFinish = (values) => {
//     setLoading(true)
    
//   };

    function handleSubmit() {
        const formValues = form.getFieldsValue(true);
        setLoading(true);

        axios.post('/employee', formValues).then((response) => {
            setLoading(false);
            message.success(response.data);
            props.afterSubmit();
            
          }).catch(({ response }) => {
            message.error(response.data);
            setLoading(false);
          });
    }

    function onCancel() { 
        props.afterSubmit();
      }


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
    <div className="new-employee-component">
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Form.Item
            label="Photo"
            name={"picture_url"}
            rules={[validation.required()]}>
            <Upload {...props}>
            <Input  suffix={<FolderOpenOutlined />}></Input>
            </Upload>
         </Form.Item>
      </Col>
         

      <Col span={12} >
          <Form.Item
            label="NIK"
            name={"nik"}
            rules={[validation.required()]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Department"
            name={"department"}
            rules={[validation.required()]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name={"email"}
            rules={[validation.required("please input your email"), validation.email()]}>
            <Input />
          </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
            label="Nama Lengkap"
            name={"full_name"}
            rules={[validation.required()]}>
            <Input />
        </Form.Item>    

        <Form.Item
            label="Jabatan"
            name={"position"}
            rules={[validation.required()]}>
            <Input />
        </Form.Item>

        <Form.Item
            label="No. Telepon"
            name={"phone"}
            rules={[validation.required()]}>
            <Input />
        </Form.Item>
      </Col>

        <Form.Item >
            <Button  htmlType="button" onClick={onCancel}>
            Kembali
            </Button>

            <Button type="primary" htmlType="submit">
              Kirim
            </Button>
         </Form.Item>


    </Row>
    </Form>
    </div>
  );
};

export default NewEmployee;