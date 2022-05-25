import React, { useState } from "react";
import { Form, Input, Button, message, Row, Col, DatePicker } from "antd";
import dayjs from "dayjs";

import validation from "../../../core/helpers/validation";
import axios from "../../../core/helpers/axios";
import useLocalData from "../../../core/hooks/useLocalData";

const New = (props) => {
  const { store } = useLocalData();
  const [loading, setLoading] = useState(null);
  const [filter, setFilter] = useState({ keyword: "" });
  const [form] = Form.useForm();
  const formValues = form.getFieldsValue(true);
  let dateFormat = "";
  axios.config(store);
  const [tableData, setTableData] = useState({
    offset: 0,
    limit: 10,
    resource: [],
    current: 0,
    total: 0,
  });
  //   const onFinish = (values) => {
  //     console.log("Success:", values);
  //   };

  //   const onFinishFailed = (errorInfo) => {
  //     console.log("Failed:", errorInfo);
  //   };

  function getEmployee(changesFilter = {}) {
    const { limit = null, offset = null } = changesFilter;

    setLoading(true);
    axios
      .get("/employee", {
        params: {
          keyword: filter.keyword,
          limit: limit || tableData.limit,
          offset: offset || tableData.offset,
        },
      })
      .then((response) => {
        setLoading(false);
        setTableData({
          limit: response.data.limit,
          offset: response.data.offset,
          current: tableData.current,
          resource: response.data.data,
          total: response.data.total,
        });
      })
      .catch(() => {
        setLoading(false);
      });
  }

  function handleSubmit() {
    setLoading(true);

    axios
      .post("/agenda", formValues)
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
    props.afterSubmit();
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form.Item
            className="employee"
            label="Karyawan"
            name={"full_name"}
            rules={[validation.required()]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            className="reminder"
            label="Ingatkan pada"
            name={"reminder_at"}
            rules={[validation.required()]}
          >
            <DatePicker
              placeholder=""
              value={dayjs("D-MMMM-YYYY", dateFormat)}
              format={dateFormat}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            className="date"
            label="Tanggal"
            name={"date"}
            rules={[validation.required()]}
          >
            <DatePicker
              placeholder=""
              showTime={{ format: "HH:mm:ss" }}
              value={dayjs("D-MMMM-YYYY HH:mm:ss", dateFormat)}
              format={dateFormat}
            />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            className="description"
            label="Keperluan"
            name={"description"}
            rules={[validation.required()]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Col>
      </Row>

      <div className="d-flex justify-content-center">
        <Button type="" htmlType="button" onClick={onCancel}>
          Kembali
        </Button>

        <Button type="primary" htmlType="submit">
          Kirim
        </Button>
      </div>
    </Form>
  );
};

export default New;
