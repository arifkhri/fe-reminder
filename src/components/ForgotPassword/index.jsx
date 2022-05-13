import React from "react";
import { Form, Input, Button } from "antd";

import "./style.css";

const ForgotPassword = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="forgot-password-component">
      <p>
        Kata sandi baru akan dikirim ke email anda, pastikan <br />
        email anda aktif atau hubungi admin.
      </p>
      <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
            { type: "email", message: "Please enter the correct email" },
          ]}
        >
          <Input placeholder="only-hr@clodeo.com" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
          }}
        >
          <Button type="link" htmlType="button" onClick>
            <b>Kembali</b>{" "}
          </Button>
          <Button type="primary" htmlType="submit">
            Kirim
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPassword;
