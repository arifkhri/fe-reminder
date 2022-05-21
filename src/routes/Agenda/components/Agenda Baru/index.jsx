import React, { useState } from "react";
import { Form, Input, Button, message, Row, Col, DatePicker } from "antd";
import moment from "moment";

import validation from "../../../../core/helpers/validation";
import axios from "../../../../core/helpers/axios";
import useLocalData from "../../../../hooks/useLocalData";

const CreateAgenda = (props) => {
  const { store } = useLocalData();
  const [loading, setLoading] = useState(null);
  axios.config(store);
  const dateFormat = "D MMMM YYYY";
  const [form] = Form.useForm();
  //   const onFinish = (values) => {
  //     console.log("Success:", values);
  //   };

  //   const onFinishFailed = (errorInfo) => {
  //     console.log("Failed:", errorInfo);
  //   };

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);
    setLoading(true);

    axios
      .post("/agenda", formValues)
      .then((response) => {
        setLoading(false);
        message.success(response.data);
        props.afterSubmit();
      })
      .catch(({ response }) => {
        message.error(response.data);
        setLoading(false);
      });
  }

  function onCancel() {
    props.afterSubmit();
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            className="employee"
            label="Karyawan"
            name={"employee_id"}
            rules={[validation.required()]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="reminder"
            label="Ingatkan pada"
            name={"reminder_at"}
            rules={[validation.required()]}
          >
            <DatePicker
              value={moment("D MMMM YYYY", dateFormat)}
              format={dateFormat}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className="date"
            label="Tanggal"
            name={"date"}
            rules={[validation.required()]}
          >
            <DatePicker
              value={moment("D MMMM YYYY", dateFormat)}
              format={dateFormat}
            />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            className="description"
            label="Keperluan"
            name={"description"}
            rules={[validation.required()]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Button type="" htmlType="button" onClick={onCancel}>
        Kembali
      </Button>

      <Button type="primary" htmlType="submit">
        Kirim
      </Button>
    </Form>
  );
};

export default CreateAgenda;
