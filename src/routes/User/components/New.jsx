import React, { useState } from "react";
import { Form, Button, message, Spin } from "antd";

import axios from "../../../core/helpers/axios";
import useLocalData from "../../../hooks/useLocalData";
import FieldMain from "./FieldMain";
import FieldPassword from "./FieldPassword";

function New(props) {
  const { store } = useLocalData();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(null);
  axios.config(store);

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);
    setLoading(true);

    axios.post('/user', formValues).then((response) => {
      setLoading(false);
      message.success(response.data);
      props.afterSubmit();

    }).catch(({ response }) => {
      message.error(response.data);
      setLoading(false);
    });
  }

  function onCancel() {
    props.afterSubmit();
  }

  return (
    <Spin spinning={loading}>
      <Form onFinish={handleSubmit} form={form} layout="vertical">
        <FieldMain />
        <FieldPassword />
        
        <div className="d-flex justify-content-center">
          <Button onClick={onCancel}>Kembali</Button>
          <Button type="primary" htmlType="submit">
            Simpan
          </Button>
        </div>
      </Form>
    </Spin>
  );
}

export default New;
