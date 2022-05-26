import React, { useState } from "react";
import { Form, Button, message, Spin, DatePicker, Input, Switch } from "antd";
import moment from "moment";

import axios from "../../../../core/helpers/axios";
import useLocalData from "../../../../core/hooks/useLocalData";
import validation from "../../../../core/helpers/validation";

import "./style.css";

function AgendaComplete(props) {
  const { store } = useLocalData();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(null);
  axios.config(store);

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);
    const payload = {
      ids: props.agendaData.map((data) => data.id),
      employee_ids: props.agendaData.map((data) => data.employee_id),
      is_renew: false,
      date: '',
      remind_day: 0,
      description: '',
      ...formValues
    }

    setLoading(true);

    axios.post(`/agenda/complete`, payload).then((response) => {
      setLoading(false);
      message.success(response.data);
      props.afterActionModal();

    }).catch(({ response }) => {
      message.error(response.data);
      setLoading(false);
    });
  }

  function onCancel() {
    props.afterActionModal();
  }

  return (
    <Spin spinning={loading}>
      <Form onFinish={handleSubmit} form={form} layout="vertical">

        <div className="wrapper-label-switch">
          <Form.Item className="mb-3" name="is_renew" valuePropName="checked">
            <Switch />
          </Form.Item>
          <span className="ml-3">Agendakan kembali</span>
        </div>

        <Form.Item shouldUpdate={(prevValues, curValues) => prevValues.is_renew !== curValues.is_renew}>
          {({getFieldValue}) => {
            return (
              getFieldValue("is_renew") && 
              <div className="bg-blue p-4 ">
                <Form.Item label="Tanggal" name="date" rules={[validation.required()]}>
                  <DatePicker placeholder={null} value={moment('D MMMM YYYY')} format="D MMMM YYYY" />
                </Form.Item>

                <Form.Item label="Ingatkan pada" name="remind_day" rules={[validation.required()]}>
                  <Input type="number" suffix="Hari sebelum" />
                </Form.Item>

                <Form.Item className="mb-0" label="Keperluan" name="description" rules={[validation.required()]}>
                  <Input.TextArea rows={4} />
                </Form.Item>
              </div>
            );
          }}
        </Form.Item>


        <div className="d-flex justify-content-center mt-4">
          <Button onClick={() => onCancel()}>Kembali</Button>
          <Button type="primary" htmlType="submit">
            Selesai
          </Button>
        </div>
      </Form>
    </Spin>
  );
}

export default AgendaComplete;
