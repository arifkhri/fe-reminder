import React, { useState } from "react";
import { Form, Input, Button, message, Spin } from "antd";

import validation from "../../../../core/helpers/validation";
import axios from "../../../../core/helpers/axios";

import "./style.css";

const ForgotPassword = (props) => {
  const [loading, setLoading] = useState(false);
  const form = Form.userForm();
  
  const onFinish = (values) => {
    setLoading(true);
    axios.post('/forgot-password', values).then((response) => {
      setLoading(false);
      message.success(response.data);
      props.afterSubmit();

    }).catch(({ response }) => {
      setLoading(false);
      message.error(response.data);
    });
  };

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
            rules={[validation.required("please input your email"), validation.email()]}>
            <Input placeholder="only-hr@clodeo.com" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6 }}>
            <Button type="link" htmlType="button" onClick>
              Kembali
            </Button>

            <Button type="primary" htmlType="submit">
              Kirim
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};

export default ForgotPassword;
