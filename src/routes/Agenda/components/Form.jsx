import React, { useEffect } from "react";
import { Form as BaseForm, Input, Button, Row, Col, DatePicker } from "antd";

import SelectEmployee from "../../../components/SelectEmployee";
import validation from "../../../core/helpers/validation";
import moment from "moment";

const Form = ({ onCancel = () => null, onSubmit = () => null, data = null }) => {

  const [form] = BaseForm.useForm();

  function remindAtValidation(current) {
    return current && current < moment(form.getFieldValue("date")).add(1, 'days');
  }

  function dateValidation(current) {
    return current && current < moment().endOf('day');;
  }

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);
    onSubmit(formValues);
  }

  function onSelectEmployee(value) {
    form.setFieldsValue({
      employee: value.full_name,
      employee_id: value.id
    });
  }

  function onClearEmployee() {
    form.setFieldsValue({
      employee: null,
      employee_id: null
    });
  }

  useEffect(() => {
    if (data) {
      const newData = {
        ...data,
        date: moment(data.date),
        remind_at: moment(data.remind_at)
      }
      form.setFieldsValue(newData);
    }
  }, [data])

  return (
    <BaseForm form={form} layout="vertical" onFinish={handleSubmit}>
      <Col span={24}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <BaseForm.Item shouldUpdate={(prevValues, curValues) => prevValues.employee_id !== curValues.employee_id}>
              {({ getFieldValue }) => {
                return (
                  <BaseForm.Item
                    label="Karyawan"
                    name="employee_id"
                    rules={[validation.required()]}
                  >
                    <SelectEmployee valueSelect={getFieldValue("employee")} onSelect={(value) => onSelectEmployee(value)} component={{
                      allowClear: true,
                      showSearch: true,
                      mode: false,
                      onClear: () => onClearEmployee()
                    }}
                    />
                  </BaseForm.Item>

                );
              }}
            </BaseForm.Item>

          </Col>
          <Col span={12}>
            <BaseForm.Item
              label="Tanggal"
              name="date"
              rules={[validation.required()]}
            >
              <DatePicker placeholder="" disabledDate={dateValidation} showTime={{ format: "HH:mm" }} format="DD-MM-YYYY HH:mm" showNow={false} showToday={false} />
            </BaseForm.Item>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <BaseForm.Item shouldUpdate={(prevValues, curValues) => prevValues.date !== curValues.date}>
              {({ getFieldValue }) => {
                return (
                  <BaseForm.Item
                    label="Ingatkan pada"
                    name="remind_at"
                    rules={[validation.required()]}
                  >
                    <DatePicker disabled={!getFieldValue("date")} disabledDate={remindAtValidation} placeholder="" showTime={{ format: "HH:mm" }} format="DD-MM-YYYY HH:mm" showNow={false} showToday={false} />
                  </BaseForm.Item>
                );
              }}
            </BaseForm.Item>
          </Col>

          <Col span={24}>
            <BaseForm.Item
              className="description"
              label="Keperluan"
              name="description"
              rules={[validation.required()]}
            >
              <Input.TextArea rows={4} />
            </BaseForm.Item>
          </Col>
        </Row>
      </Col>

      <div className="d-flex justify-content-center">
        <Button type="" htmlType="button" onClick={onCancel}>
          Kembali
        </Button>

        <Button type="primary" htmlType="submit">
          Kirim
        </Button>
      </div>
    </BaseForm>
  );
};

export default Form;
