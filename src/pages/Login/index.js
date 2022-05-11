import React, {useState} from "react";
import 'antd/dist/antd.css';
import './style.css';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { Image } from 'antd';
import { Row, Col, Divider } from 'antd';
import {ArrowRightOutlined} from '@ant-design/icons'
import { Modal } from 'antd';
import ForgotPassword from '../../components/ForgotPassword';



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
    <div className="login-page">
      <Card className="login-form" bordered={false} >
        <Row>
          <Col span={12} className="logo" > <img src="/images/Group.png" alt=""/>
          <center><p className="footer">2021 © Clodeo Reminder</p></center>
          </Col>
          <Col span={12} className="login" > 
            <div className="App"  >
              <center>
                <Image width={80} src="https://cdn.techinasia.com/data/images/gvfeK0yDvQn0ud43b2KkfVIlcsaFTcEaTpByzR6B.png" />
              </center>
              <center><h3>Selamat Datang</h3></center>
              <header className="App-header">
                <Form layout="vertical" name="basic" labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item  label="Email" name="email" rules={[
                    {
                      required: true,
                      message: 'Please input your email',
                    },
                    { type: "email", message: "Please enter the correct email" },
                  ]}
                  >
                    <Input className="txtemail" placeholder="only-hr@clodeo.com" />
                  </Form.Item>

                  <Form.Item label="Password" name="password" rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                  >
                    <Input.Password placeholder="***" />
                  </Form.Item>

                  <Form.Item name="remember" valuePropName="checked" wrapperCol={{
                    offset: 0,
                    span: 0,
                  }}
                  >
                    <Checkbox>Ingat saya <Button type="link" htmlType="button" onClick={showModal}>
                      &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp;Lupa Password?</Button>
                      <Modal footer={null} title="Lupa Password" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                      <ForgotPassword />
                    </Modal>
                    </Checkbox>
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 10, span: 16, }}>
                    <Button className="btn-login" type="primary" htmlType="submit" >
                      Login <ArrowRightOutlined />
                    </Button>
                  </Form.Item>
                </Form>
              </header>
            </div>
          </Col>
        </Row>
      </Card>
      </div>
  );
}

export default Login;
