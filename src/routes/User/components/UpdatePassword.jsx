import React, { useEffect, useState } from "react";
import { Form, Button, message, Spin } from "antd";

import axios from "../../../core/helpers/axios";
import useLocalData from "../../../hooks/useLocalData";
import FieldPassword from "./FieldPassword";

function UpdatePassword(props) {
  const { store } = useLocalData();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(null);
  axios.config(store);

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);
    axios.put(`/user/${props.data.id}/password`, {new_password: formValues.confirmPassword}).then((response) => {
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
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <FieldPassword />
        <Button onClick={onCancel}>Kembali</Button>
        <Button type="primary" htmlType="submit">
          Simpan
        </Button>
      </Form>
    </Spin>
  );
}

export default UpdatePassword;
