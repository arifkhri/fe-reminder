import React, { useState } from "react";
import { Form, Input, Button, message, Spin } from "antd";

import validation from "../../../core/helpers/validation";

const Import = (props) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setLoading(true);
  };

  function onCancel() {
    props.afterSubmit();
  }

  return (
    <div className="import-agenda-component">
      <p>
        Untuk menggunakan fitur import reminder anda dapat <br />
        menggunakan <a href="URL">template ini.</a>
      </p>
      <Spin spinning={loading}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Lampiran"
            name="lampiran"
            rules={[validation.required("please input your lampiran")]}
          >
            <Input />
          </Form.Item>

          <div className="d-flex justify-content-center">
            <Button type="link" htmlType="button" onClick={onCancel}>
              Kembali
            </Button>

            <Button type="primary" htmlType="submit">
              Import
            </Button>
          </div>
        </Form>
      </Spin>
    </div>
  );
};

export default Import;
