import React from "react";
import { Form, Input } from "antd";

import validation from "../../../core/helpers/validation";

function FieldPassword() {
  return (
    <>
      <Form.Item
        name={"password"}
        label="Password"
        rules={[validation.required(), validation.min(6, "")]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name={"confirmPassword"}
        label="Konfirmasi Password"
        rules={[validation.required(), validation.matchWith({fieldName: "password", message: "Password tidak sama"})]}
      >
        <Input.Password />
      </Form.Item>
    </>
  );
}

export default FieldPassword;
