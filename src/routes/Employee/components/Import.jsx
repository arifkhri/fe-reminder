import React, { useState } from "react";
import { Form, Input, Button, message, Spin } from "antd";

import validation from "../../../core/helpers/validation";
// import axios from "../../../../core/helpers/axios";

// import "./style.css";

const Import = (props) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setLoading(true)
  };

  return (
    <div className="import-karyawan-component">
      <p>
        Untuk menggunakan fitur import karyawan anda dapat <br />
        menggunakan <a href="URL">template ini.</a>
      </p>
      <Spin spinning={loading}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            className="hide-required-sign"
            label="Lampiran"
            name="lampiran"
            rules={[validation.required("please input your lampiran")]}>
            <Input  />
          </Form.Item>

          <div className="d-flex justify-content-center">
            <Button type="link" htmlType="button" onClick>
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
