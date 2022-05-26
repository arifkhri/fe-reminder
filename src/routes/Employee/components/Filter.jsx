import React, { useState, useEffect } from "react";
import { Form, Col, Button, Spin, Row } from "antd";

import axios from "../../../core/helpers/axios";
import SelectDepartment from "../../../components/SelectDepartment";
import SelectPosition from "../../../components/SelectPosition";
import useLocalData from "../../../core/hooks/useLocalData";

const FilterEmployee = ({ afterSubmit = () => null, onCancel = () => null, filterValues }) => {
  const { store } = useLocalData();
  const [form] = Form.useForm();
  axios.config(store);

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);

    afterSubmit({
      ...formValues,
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
    form.setFieldsValue({
      position: filterValues.position ? (filterValues.position || '').split(',') : [],
      department: filterValues.department ? (filterValues.department || '').split(',') : [],
    });
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
      </Col>

      <div className="d-flex justify-content-center">
        <Button htmlType="button" onClick={onCancel}>
          Kembali
        </Button>

        <Button type="primary" htmlType="submit">
          Simpan
        </Button>
      </div>
    </Form>
  );
};

export default FilterEmployee;
