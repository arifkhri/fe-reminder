import React from "react";
import { Form, Input } from "antd";

import validation from "../../../core/helpers/validation";

function FieldMain() {
  return (
    <>
      <Form.Item
        name={"password"}
        label="Password"
        rules={[validation.required()]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={"confirmPassword"}
        label="Konfirmasi Password"
        rules={[validation.required()]}
      >
        <Input />
      </Form.Item>
    </>
  );
}

export default FieldMain;
