import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { Image } from 'antd';
import { Row, Col, Divider } from 'antd';
import {ArrowRightOutlined} from '@ant-design/icons'

const Demo = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="login-page">
      <Card className="login-form" bordered={false}>
        <Row>
          <Col span={12} > </Col>
          <Col span={12} > 
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
                  <Form.Item label="Email" name="email" rules={[
                    {
                      required: true,
                      message: 'Please input your email',
                    },
                    { type: "email", message: "Please enter the correct email" },
                  ]}
                  >
                    <Input placeholder="only-hr@clodeo.com" />
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
                    <Checkbox>Ingat saya <Button type="link" htmlType="button" onClick>
                      &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; Lupa Password?</Button>
                    </Checkbox>
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 10, span: 16, }}>
                    <Button type="primary" htmlType="submit" >
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
};

export default Demo;
