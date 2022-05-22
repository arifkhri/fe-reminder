import React, { useState } from "react";
import { Form, Input, Button, message, Spin } from "antd";

import validation from "../../../../core/helpers/validation";
import axios from "../../../../core/helpers/axios";


const ForgotPassword = (props) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  function onFinish(values) {
    setLoading(true);
    axios.post('/forgot-password', values, true).then((response) => {
      setLoading(false);
      message.success(response.data);
      props.afterSubmit();

    }).catch(({ response }) => {
      setLoading(false);
      message.error(response.data);
    });
  };

  function onCancel() {
    props.afterSubmit();
  }

  return (
    <div className="forgot-password-component">
      <p>
        Kata sandi baru akan dikirim ke email anda, pastikan <br />
        email anda aktif atau hubungi admin.
      </p>
      <Spin spinning={loading}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[validation.required(), validation.email()]}>
            <Input placeholder="only-hr@clodeo.com" />
          </Form.Item>

          <div className="d-flex justify-content-center">
            <Button type="link" htmlType="button" onClick={onCancel}>
              Kembali
            </Button>

            <Button className="btn-primary-gradient" type="primary" htmlType="submit">
              Kirim
            </Button>
          </div>
        </Form>
      </Spin>
    </div>
  );
};

export default ForgotPassword;
