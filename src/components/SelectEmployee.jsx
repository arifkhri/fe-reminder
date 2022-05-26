import React, { useState } from "react";
import { Spin, Select } from "antd";

import axios from "../core/helpers/axios";
import useLocalData from "../core/hooks/useLocalData";
import { debounce } from '../core/utils';
import Tag from "./TagBlue";

function SelectEmployee(props) {
  const { store } = useLocalData();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const [options, setOptions] = useState([]);
  axios.config(store);

  function searchEmployee(keyword) {
    setLoading(true);
    debounce(() => {
      axios.get('/employee', { params: { keyword } }).then((response) => {
        const newResponse = [];
        (response.data?.data || []).forEach((data) => {
          newResponse.push({
            label: data.full_name,
            value: data.full_name,
          });
        });
        setOptions(newResponse);
        setEmployeeData(response.data?.data || []);
        setLoading(false);

      }).catch(() => {
        setLoading(false);
        setOptions([]);
      });
    }, 1000)
  }

  function onFocusEmployeeSelect() {
    if (!options.length) {
      searchEmployee();
    }
  }

  function onChangeEmployeeSelect(value, from) {

    let employee = values;
    if (!props.component?.mode) {
      employeeData.forEach((data) => {
        if (data.full_name === value) {
          employee = data;
        }
      });
      props.onSelect(employee);

    } else {
      if (from === 'select') {
        employeeData.forEach((data) => {
          if (data.full_name === value) {
            employee.push(data);
          }
        });
        setValues(employee);


      } else {
        employee = employee.filter((data) => data.full_name !== value);
        setValues(employee);
      }
    }

  }

  return (
    <Spin spinning={loading}>
      <Select
        onSelect={(value) => onChangeEmployeeSelect(value, 'select')}
        onDeselect={(value) => onChangeEmployeeSelect(value, 'deselect')}
        onFocus={onFocusEmployeeSelect}
        onSearch={searchEmployee}
        mode="multiple"
        showArrow
        tagRender={Tag}
        options={options}
        {...props.component}
        value={props.valueSelect}
      />
    </Spin>
  );
};

export default SelectEmployee;
