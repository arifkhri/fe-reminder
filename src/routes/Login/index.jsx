import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Card,
  Row,
  Col,
  Modal,
  message,
  Spin
} from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

import cookie from '../../core/helpers/cookie';
import axios from '../../core/helpers/axios';
import useLocalData from '../../hooks/useLocalData';
import validation from "../../core/helpers/validation";
import ForgotPassword from "./components/ForgotPassword";

import "./style.css";

function Login() {
  const [form] = Form.useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const { dispatch } = useLocalData();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const from = location.state?.from?.pathname || "/";

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);
    setLoading(true);

    axios.post(`/login`, formValues, true).then((response) => {
      cookie.set("user", JSON.stringify(response.data));
      dispatch({
        type: 'update',
        value: response.data,        
        name: 'userData',
      })
      navigate(from, { replace: true });
      setLoading(true);

    }).catch(({response}) => {
      setLoading(false);
      message.error(response.data);
    });

  }

  return (
    <div className="login-page">
      <Spin spinning={loading}>
        <Card bordered={false}>
          <Row>
            <Col xs={0} md={12} className="align-items-end col-illustration d-flex justify-content-center">
              <span className="copyright mb-4">2021 © Clodeo Reminder</span>
            </Col>

            <Col xs={24} md={12} className="container-form">
              <center>
                <img width={80} src="images/clodeo.png" alt="clodeo-logo" />
              </center>

              <center>
                <h3>Selamat Datang</h3>
              </center>

              <Form form={form} onFinish={handleSubmit} layout="vertical" name="basic" labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} initialValues={{ remember: true }} autoComplete="off">
                <Form.Item className="hide-required-sign" wrapperCol={24} label="Email" name="email" rules={[validation.required(), validation.email()]}>
                  <Input className="txtemail" placeholder="only-hr@clodeo.com" />
                </Form.Item>

                <Form.Item className="hide-required-sign" labelCol={5} wrapperCol={24} label="Password" name="password" rules={[validation.required()]}>
                  <Input.Password placeholder="*********" />
                </Form.Item>

                <Row gutter={2}>
                  <Col span={12}>
                    <Form.Item name="remember">
                      <Checkbox>Ingat saya </Checkbox>
                    </Form.Item>
                  </Col>

                  <Col span={12} className="p-1 d-flex justify-content-end">
                    <a className="link-action" type="link" htmlType="button" onClick={() => setIsModalVisible(true)}>Lupa Password?</a>
                  </Col>
                </Row>

                <center>
                  <Button
                    className="btn-login"
                    type="primary"
                    htmlType="submit"
                  >
                    Login <ArrowRightOutlined />
                  </Button>
                </center>
              </Form>
            </Col>
          </Row>
        </Card>
      </Spin>

      <Modal
        footer={null}
        title="Lupa Password"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(true)}
        onCancel={() => setIsModalVisible(false)}
      >
        <ForgotPassword afterSubmit={() => setIsModalVisible(false)}/>
      </Modal>
    </div>
  );
}

export default Login;
