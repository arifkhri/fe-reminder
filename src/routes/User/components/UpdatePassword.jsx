import React from "react";
import { Form, Button } from "antd";

import FieldPassword from "./FieldPassword";

function UpdatePassword() {
  const [form] = Form.useForm();

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);
    console.log(formValues);
  }

  function onCancel() {}
  
  return (
    <Form onFinish={handleSubmit} form={form} layout="vertical">
      <FieldPassword />
      <Button onClick={onCancel}>Kembali</Button>
      <Button type="primary" htmlType="submit">
        Simpan
      </Button>
    </Form>
  );
}

export default UpdatePassword;
