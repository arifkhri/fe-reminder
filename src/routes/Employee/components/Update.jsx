import React, { useEffect, useState } from "react";
import { Form, Button, message, Spin, Row } from "antd";

import axios from "../../../core/helpers/axios";
import useLocalData from "../../../core/hooks/useLocalData";
import FieldEmployee from "./FieldEmployee";

function Update(props) {
  const { store } = useLocalData();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(null);
  axios.config(store);

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);

    axios.put(`/employee/${props.data.id}`, formValues).then((response) => {
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
      <Row gutter={[16, 16]}>
        <FieldEmployee />
      </Row>
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
