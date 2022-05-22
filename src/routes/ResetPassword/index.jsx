import React, { useState } from "react";
import { Form, Input, Button, Card, Row, Col, Spin, message } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

import axios from '../../core/helpers/axios';
import validation from "../../core/helpers/validation";

import "./style.css";

function ResetPassword() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  let [searchParams, _] = useSearchParams();

  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);
    setLoading(true);
    const payload = {
      password: formValues.password,
      token: searchParams.get("token"),
      email: searchParams.get("email")
    }

    axios.post(`/reset-password`, payload, true).then((response) => {
      console.log("🚀 ~ file: index.jsx ~ line 28 ~ axios.post ~ response", response)
      message.success(response.data);
      navigate("/login");
      setLoading(true);

    }).catch(({ response }) => {
      console.log("🚀 ~ file: index.jsx ~ line 28 ~ axios.post ~ response", response)
      message.error(response.data);
      setLoading(false);
    });

  }

  return (
    <div className="reset-password-page">
      <Spin spinning={loading}>
        <Card bordered={false}>
          <Row>
            <Col span={24} className="container-form">

              <center>
                <h4>RESET PASSWORD</h4> <h2>{searchParams.get("email")}</h2>
              </center>

              <Form className="mt-4" form={form} onFinish={handleSubmit} layout="vertical" name="basic" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} autoComplete="off">
                <Form.Item
                  name={"password"}
                  label="Password"
                  rules={[validation.required(), validation.min(6)]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  name={"confirmPassword"}
                  label="Konfirmasi Password"
                  rules={[validation.required(), validation.matchWith({ fieldName: "password", message: "Password tidak sama" })]}
                >
                  <Input.Password />
                </Form.Item>

                <div className="d-flex justify-content-center">
                  <Button htmlType="button" onClick={() => navigate("/")}>
                    Login
                  </Button>

                  <Button type="primary" htmlType="submit">
                    Simpan
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Card>
      </Spin>
    </div>
  );
}

export default ResetPassword;
