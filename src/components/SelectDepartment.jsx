import React, { useState } from "react";
import { Spin, Select } from "antd";

import axios from "../core/helpers/axios";
import useLocalData from "../core/hooks/useLocalData";
import { debounce } from '../core/utils';
import Tag from "./TagBlue";

function SelectDepartment(props) {
  const { store } = useLocalData();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState([]);
  const [departmentData, setDepartmentData] = useState([]);
  const [options, setOptions] = useState([]);
  axios.config(store);

  function searchDepartment(keyword) {
    setLoading(true);
    debounce(() => {
      axios.get('/masterdata/department', { params: { keyword } }).then((response) => {
        const newResponse = [];
        (response.data?.data || []).forEach((data) => {
          newResponse.push({
            label: data.name,
            value: data.name,
          });
        });
        setOptions(newResponse);
        setDepartmentData(response.data?.data || []);
        setLoading(false);

      }).catch(() => {
        setLoading(false);
        setOptions([]);
      });
    }, 1000)
  }

  function onFocusDepartmentSelect() {
    if (!options.length) {
      searchDepartment();
    }
  }

  function onChangeDepartmentSelect(value, from) {
    let department = values;
    if (props.component?.mode === false && from !== 'deselect') {
      departmentData.forEach((data) => {
        if (data.name === value) {
          department = data;
        }
      });
      props.onSelect(department);

    } else {
      if (from === 'select') {
        departmentData.forEach((data) => {
          if (data.name === value) {
            department.push(data);
          }
        });
        setValues(department);
        props.onSelect(department);
        
      } else {
        
        department = department.filter((data) => data.name !== value);
        props.onSelect(department);
        setValues(department);
      }
    }

  }

  return (
    <Spin spinning={loading}>
      <Select
        onSelect={(value) => onChangeDepartmentSelect(value, 'select')}
        onDeselect={(value) => onChangeDepartmentSelect(value, 'deselect')}
        onFocus={onFocusDepartmentSelect}
        onSearch={searchDepartment}
        mode="multiple"
        showArrow
        tagRender={Tag}
        options={options}
        value={props.valueSelect}
        {...props.component}
      />
    </Spin>
  );
};

export default SelectDepartment;
