import React, { useState } from "react";
import { Form, Input, Button, message, Spin, Select, Tag as BaseTag } from "antd";

import validation from "../../../core/helpers/validation";
import axios from "../../../core/helpers/axios";
import useLocalData from "../../../core/hooks/useLocalData";
import { debounce } from '../../../core/utils';

// import "./style.css";

function Tag(props) {
  const { label } = props;

  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <BaseTag
      color="blue"
      onMouseDown={onPreventMouseDown}
    >
      {label}
    </BaseTag>
  );
}

function Filter(props) {
  const { store } = useLocalData();
  const [loading, setLoading] = useState(false);
  const [loadingSelect, setLoadingSelect] = useState(false);
  const [values, setValues] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const [options, setOptions] = useState([]);
  const [form] = Form.useForm();
  axios.config(store);

 function searchEmployee(keyword) {
    setLoadingSelect(true);
    debounce(() => {
      axios.get('/employee', { params: { keyword } }).then((response) => {
        const newResponse = [];
        (response.data?.data || []).forEach((data) => {
          newResponse.push({
            label: data.department,
            value: data.department,
          });
        });
        setOptions(newResponse);
        setEmployeeData(response.data?.data || []);
        setLoadingSelect(false);

      }).catch(() => {
        setLoadingSelect(false);
        setOptions([]);
      });
    }, 1000)
  }

  const onFinish = (values) => {
    setLoading(true)
  };

  function onFocusEmployeeSelect() {
    if (!options.length) {
      searchEmployee();
    }
  }

  function onChangeEmployeeSelect(value, from) {

    let employee = values;
    if(from === 'select') {
      employeeData.forEach((data) => {
        if(data.department === value) {
          employee.push(data);
        }
      });
      setValues(employee);

    } else {

      employee = employee.filter((data) => data.department !== value); 
      setValues(employee);
    }
  }
  
  function onCancel() {
    props.afterSubmit();
  }

  return (
    <div className="filter-karyawan-component">
      <Spin spinning={loading}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
        <Spin spinning={loadingSelect}>
          <Form.Item label="Departemen" name="department" rules={[validation.required()]}>
            <Select
              onSelect={(value) => onChangeEmployeeSelect(value, 'select')}
              onDeselect={(value) => onChangeEmployeeSelect(value, 'deselect')}
              onFocus={onFocusEmployeeSelect}
              onSearch={searchEmployee}
              mode="multiple"
              showArrow
              tagRender={Tag}
              options={options}
            />
          </Form.Item>
           </Spin>

          <Spin spinning={loadingSelect}>
          <Form.Item label="Jabatan" name="position" rules={[validation.required()]}>
            {/* <Select
              onSelect={(value) => onChangeEmployeeSelect(value, 'select')}
              onDeselect={(value) => onChangeEmployeeSelect(value, 'deselect')}
              onFocus={onFocusEmployeeSelect}
              onSearch={searchEmployee}
              mode="multiple"
              showArrow
              tagRender={Tag}
              options={options}
            /> */}
            <Input />
          </Form.Item>
           </Spin>

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
