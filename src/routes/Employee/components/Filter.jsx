import React, { useState } from "react";
import { Form, Input, Button, Spin, Select } from "antd";

import axios from "../../../core/helpers/axios";
import Tag from "../../../components/TagBlue";
import SelectDepartment from "../../../components/SelectDepartment";
import SelectPosition from "../../../components/SelectPosition";
import useLocalData from "../../../core/hooks/useLocalData";
import { debounce } from '../../../core/utils';


function Filter(props) {
  const { store } = useLocalData();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  axios.config(store);

  const onFinish = () => {
    const formValues = form.getFieldsValue(true);
    props.afterSubmit(formValues);

    setLoading(true)
  };


  function onCancel() {
    props.afterSubmit();
  }

  return (
    <div className="filter-karyawan-component">
      <Spin spinning={loading}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item label="Departemen" name="department">
              <SelectDepartment />
            </Form.Item>

            <Form.Item label="Jabatan" name="position">
              <SelectPosition />
            </Form.Item>

          <div className="d-flex justify-content-center">
            <Button htmlType="button" onClick={onCancel}>
              Kembali
            </Button>

            <Button type="primary" htmlType="submit">
              Simpan
            </Button>
          </div>
        </Form>
      </Spin>
    </div>
  );
};

export default Filter;
