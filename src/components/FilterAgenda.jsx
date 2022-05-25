import React, { useState } from "react";
import { Form, Button, Row, Col, DatePicker } from "antd";
import dayjs from "dayjs";

import useLocalData from "../core/hooks/useLocalData";
import axios from "../core/helpers/axios";
import SelectDepartment from "../components/SelectDepartment";
import SelectPosition from "../components/SelectPosition";

const FilterAgenda = (props) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const dateFormat = "D MMMM YYYY";
  const { store } = useLocalData();
  axios.config(store);

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);
    console.log(
      "🚀 ~ file: FilterAgenda.jsx ~ line 26 ~ handleSubmit ~ formValues",
      formValues
    );
  }

  function onCancel() {
    props.afterSubmit();
  }

  return (
    <div className="filter-agenda-component">
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              className="departemen"
              label="Departemen"
              name={"department"}
            >
              <SelectDepartment />
            </Form.Item>
            <Form.Item
              className="tanggal-agenda"
              label="Tanggal Agenda"
              name={"reminder_at"}
            >
              <DatePicker
                placeholder=""
                value={dayjs("D MMMM YYYY", dateFormat)}
                format={dateFormat}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item className="jabatan" label="Jabatan" name={"position"}>
              <SelectPosition />
            </Form.Item>
            <Form.Item className="reminder" label="Reminder" name={"reminder"}>
              <DatePicker
                placeholder=""
                value={dayjs("D MMMM YYYY HH:mm", dateFormat)}
                format={dateFormat}
              />
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
    </div>
  );
};

export default FilterAgenda;
