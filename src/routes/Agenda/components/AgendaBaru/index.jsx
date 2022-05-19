import React, { useState } from "react";
import { Form, Input } from "antd";

import validation from "../../../../core/helpers/validation";

const AgendaBaru = () => {
  return (
    <>
      <Form.Item
        name={"full_name"}
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
};

export default AgendaBaru;
