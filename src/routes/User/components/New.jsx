import React from "react";
import { Form, Button } from "antd";
import axios from "axios";

import FieldMain from "./FieldMain";
import FieldPassword from "./FieldPassword";

const baseURL = "http://167.99.73.124:4005/api/v1/user";

function New() {
  const [form] = Form.useForm();
  const [post, setPost] = React.useState(null);

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);
    axios.post(baseURL, formValues).then((response) => {
      setPost(response.getFieldsValue);
    });
    console.log(formValues);
  }

  function onCancel() {}

  return (
    <Form onFinish={handleSubmit} form={form} layout="vertical">
      <FieldMain />
      <FieldPassword />
      <Button onClick={onCancel}>Kembali</Button>
      <Button type="primary" htmlType="submit">
        Simpan
      </Button>
    </Form>
  );
}

export default New;
