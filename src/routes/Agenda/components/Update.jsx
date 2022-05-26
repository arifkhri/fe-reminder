import React, { useState } from "react";
import { Spin, message } from "antd";

import axios from "../../../core/helpers/axios";
import useLocalData from "../../../core/hooks/useLocalData";
import utils from "../utils";
import Form from "./Form";

const Update = (props) => {
  const { store } = useLocalData();
  const [loading, setLoading] = useState(null);
  axios.config(store);
  
  function handleSubmit(values) {
    setLoading(true);
    const payload = utils.normalizePayload(values);

    axios
      .put(`/agenda/${props.data.id}`, payload)
      .then((response) => {
        setLoading(false);
        message.success(response.data);
        props.afterSubmit();
      })
      .catch(({ response }) => {
        message.error(response.data);
        setLoading(false);
      });
  }

  function onCancel() {
    props.onCancel();
  }

  return (
    <Spin spinning={loading}>
      <Form data={props.data} onSubmit={handleSubmit} onCancel={onCancel}/>
    </Spin>
  );
};

export default Update;
