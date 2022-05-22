import React, { useEffect, useState } from "react";
import { Form, Button, message, Spin } from "antd";

import axios from "../../../core/helpers/axios";
import useLocalData from "../../../core/hooks/useLocalData";
import FieldMain from "./FieldMain";

function Update(props) {
  const { store } = useLocalData();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(null);
  axios.config(store);

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);

    axios.put(`/user/${props.data.id}`, formValues).then((response) => {
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

  useEffect(() => {
    form.setFieldsValue(props.data);
  }, [props.data])

  return (
    <Spin spinning={loading}>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <FieldMain />

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

export default Update;
