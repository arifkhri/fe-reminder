import React, { useState } from "react";
import { Spin, message } from "antd";

import axios from "../../../core/helpers/axios";
import useLocalData from "../../../core/hooks/useLocalData";
import utils from "../utils";
import Form from "./Form";

const New = (props) => {
  const { store } = useLocalData();
  const [loading, setLoading] = useState(null);
  axios.config(store);

  function handleSubmit(values) {
    const payload = utils.normalizePayload(values);
    setLoading(true);

    axios
      .post("/agenda", payload)
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
      <Form onSubmit={handleSubmit} onCancel={onCancel}/>
    </Spin>
  );
};

export default New;
