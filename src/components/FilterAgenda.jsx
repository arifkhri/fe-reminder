import React, { useEffect } from "react";
import { Form, Button, Row, Col, DatePicker } from "antd";
import moment from 'moment';

import useLocalData from "../core/hooks/useLocalData";
import axios from "../core/helpers/axios";
import SelectDepartment from "../components/SelectDepartment";
import SelectPosition from "../components/SelectPosition";

const FilterAgenda = ({ afterSubmit = () => null, onCancel = () => null, filterValues }) => {
  const [form] = Form.useForm();
  const { store } = useLocalData();
  axios.config(store);

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);


    const dateValue =  formValues.date?.length ? [moment(formValues.date[0]).format("YYYY-MM-DD"), moment(formValues.date[1]).format("YYYY-MM-DD")] : [];
    const remindAtValue =  formValues.remind_at?.length ? [moment(formValues.remind_at[0]).format("YYYY-MM-DD"), moment(formValues.remind_at[1]).format("YYYY-MM-DD")] : [];

    afterSubmit({
      date: dateValue?.length ? dateValue.toString() : null,
      remind_at: remindAtValue?.length ? remindAtValue.toString() : null,
      position: formValues.position.toString(),
      department: formValues.department.toString(),
    });
  }

  function onSelect(value, type) {
    form.setFieldsValue({
      [type]: value.map((data => data.name)),
      [`${type}_id`]: value.map((data => data.id))
    })
  }

  useEffect(() => {
    const dateValue =  filterValues.date ? (filterValues.date || '').split(',') : [];
    const remindAtValue =  filterValues.remind_at ? (filterValues.remind_at || '').split(',') : [];

    form.setFieldsValue({
      date: dateValue.length ? [moment(dateValue[0]), moment(dateValue[1])] : [],
      remind_at: remindAtValue.length ? [moment(remindAtValue[0]), moment(remindAtValue[1])] : [],
      position: filterValues.position ? (filterValues.position || '').split(',') : [],
      department: filterValues.department ? (filterValues.department || '').split(',') : [],
    });

    form.getFieldsValue(true)
  }, [filterValues])

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Col span={24}>

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item shouldUpdate={(prevValues, curValues) => prevValues.department !== curValues.department}>
              {({ getFieldValue }) => {
                return (
                  <Form.Item label="Departemen" name="department" >
                    <SelectDepartment valueSelect={getFieldValue("department")} onSelect={(value) => onSelect(value, 'department')} />
                  </Form.Item>
                );
              }}
            </Form.Item>

          </Col>
          <Col span={12}>
            <Form.Item shouldUpdate={(prevValues, curValues) => prevValues.department !== curValues.department}>
              {({ getFieldValue }) => {
                return (
                  <Form.Item label="Jabatan" name="position">
                    <SelectPosition valueSelect={getFieldValue("position")} onSelect={(value) => onSelect(value, 'position')} />
                  </Form.Item>
                );
              }}
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item label="Tanggal Agenda" name="date" >
              <DatePicker.RangePicker placeholder="" format="DD-MM-YYYY" showNow={false} showToday={false} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Reminder" name="remind_at">
              <DatePicker.RangePicker placeholder="" format="DD-MM-YYYY" showNow={false} showToday={false} />
            </Form.Item>
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
    </Form>
  );
};

export default FilterAgenda;
