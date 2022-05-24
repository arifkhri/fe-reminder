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

  function searchPosition(keyword) {
    setLoading(true);
    debounce(() => {
      axios.get('/Position', { params: { keyword } }).then((response) => {
        const newResponse = [];
        (response.data?.data || []).forEach((data) => {
          newResponse.push({
            label: data.position,
            value: data.position,
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

  function onFocusPositionSelect() {
    if (!options.length) {
      searchPosition();
    }
  }

  function onChangePositionSelect(value, from) {

    let employee = values;
    if (from === 'select') {
      employeeData.forEach((data) => {
        if (data.position === value) {
          employee.push(data);
        }
      });
      setValues(employee);

    } else {

      employee = employee.filter((data) => data.position !== value);
      setValues(employee);
    }
  }

  return (
    <Spin spinning={loading}>
      <Select
        onSelect={(value) => onChangePositionSelect(value, 'select')}
        onDeselect={(value) => onChangePositionSelect(value, 'deselect')}
        onFocus={onFocusPositionSelect}
        onSearch={searchPosition}
        mode="multiple"
        showArrow
        tagRender={Tag}
        options={options}
      />
    </Spin>
  );
};

export default SelectEmployee;
