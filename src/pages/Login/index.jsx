import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Card, Row, Col, Modal, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons'

import validation from "../../core/helpers/validation";
import ForgotPassword from '../../components/ForgotPassword';
import './style.css';

function Login() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Space direction="horizontal" style={{ width: '100%', justifyContent: 'center' }}>
      <div className="login-page">
        <Card bordered={false} >
          <Row>
            <Col span={12} className="logo">
              <span className="footer-logo">2021 © Clodeo Reminder</span>
            </Col>

            <Col span={12} className="container-form">
              <center>
                <img width={80} src="images/clodeo.png" alt="clodeo-logo" />
              </center>

              <center><h3>Selamat Datang</h3></center>

              <Form layout="vertical" name="basic" labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item wrapperCol={24} label="Email" name="email" rules={[validation.required(), validation.email()]}>
                  <Input className="txtemail" placeholder="only-hr@clodeo.com" />
                </Form.Item>

                <Form.Item labelCol={5} wrapperCol={24} label="Password" name="password" rules={[validation.required()]}>
                  <Input.Password placeholder="***" />
                </Form.Item>

                <Row>
                  <Col span={12}>
                    <Form.Item name="remember">
                      <Checkbox>Ingat saya </Checkbox>
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Button type="link" htmlType="button" onClick={showModal}>Lupa Password?</Button>
                  </Col>
                </Row>

                <center>
                  <Button className="btn-login" type="primary" htmlType="submit" >
                    Login <ArrowRightOutlined />
                  </Button>
                </center>
              </Form>
            </Col>
          </Row>
        </Card>

        <Modal footer={null} title="Lupa Password" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <ForgotPassword />
        </Modal>
      </div>
    </Space>
  );
}

export default Login;
