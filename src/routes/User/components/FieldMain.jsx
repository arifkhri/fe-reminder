import React from "react";
import { Form, Input } from "antd";

import validation from "../../../core/helpers/validation";

function FieldMain() {
  return (
    <>
      <Form.Item
        name={"name"}
        label="Nama Lengkap"
        rules={[validation.required()]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={"email"}
        label="Email"
        rules={[validation.required(), validation.email()]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={"phone"}
        label="No. Telp"
        rules={[validation.required()]}
      >
        <Input />
      </Form.Item>
    </>
  );
}

export default FieldMain;
