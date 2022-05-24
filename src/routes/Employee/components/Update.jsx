import React, { useState } from "react";
import { Spin, message } from "antd";

import Form from './Form';
import axios from "../../../core/helpers/axios";
import useLocalData from "../../../core/hooks/useLocalData";

function New(props) {
  const { store } = useLocalData();
  const [loading, setLoading] = useState(false);
  axios.config(store);

  function handleSubmit(values) {
    console.log("🚀 ~ file: New.jsx ~ line 14 ~ handleSubmit ~ values", values)
    const formData = new FormData();
    formData.set("full_name", values.full_name)
    formData.set("email", values.email)
    formData.set("phone", values.phone)
    formData.set("nik", values.nik)
    formData.set("file", values.file || '')
    formData.set("position_id", values.position_id)
    formData.set("department_id", values.department_id)

    setLoading(true);

    axios.put(`/employee/${props.data.id}`, formData).then((response) => {
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
        <Form data={props.data} onSubmit={handleSubmit} onCancel={onCancel}/>
    </Spin>
  );
};

export default New;