import React from "react";
import { Form, Button } from "antd";

import FieldMain from "./FieldMain";

function Update() {
  const [form] = Form.useForm();

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);
    console.log(formValues);
  }

  function onCancel() {}

  return (
    <Form onFinish={handleSubmit} form={form} layout="vertical">
      <FieldMain />
      <Button onClick={onCancel}>Kembali</Button>
      <Button type="primary" htmlType="submit">
        Simpan
      </Button>
    </Form>
  );
}

export default Update;
