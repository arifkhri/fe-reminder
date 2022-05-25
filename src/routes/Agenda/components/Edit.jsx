import React from "react";
import { Form, Input, Col } from "antd";
import dayjs from "dayjs";

import validation from "../../../core/helpers/validation";
import New from "./New";
import FormItem from "antd/lib/form/FormItem";

const Edit = (props) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="vertical">
      <Col span={12}>
        <Form.Item
          className="employee"
          label="Jabatan"
          name={"position"}
          rules={[validation.required()]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col>
        <New />
      </Col>
    </Form>
  );
};

export default Edit;
