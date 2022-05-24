import React, { useState } from "react";
import { Spin, Select } from "antd";

import axios from "../core/helpers/axios";
import useLocalData from "../core/hooks/useLocalData";
import { debounce } from '../core/utils';
import Tag from "./TagBlue";

function SelectPosition(props) {
  const { store } = useLocalData();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState([]);
  const [positionData, setPositionData] = useState([]);
  const [options, setOptions] = useState([]);
  axios.config(store);

  function searchPosition(keyword) {
    setLoading(true);
    debounce(() => {
      axios.get('/masterdata/position', { params: { keyword } }).then((response) => {
        const newResponse = [];
        (response.data?.data || []).forEach((data) => {
          newResponse.push({
            label: data.name,
            value: data.name,
          });
        });
        setOptions(newResponse);
        setPositionData(response.data?.data || []);
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

    let position = values;
    if (from === 'select') {
      positionData.forEach((data) => {
        if (data.name === value) {
          position.push(data);
        }
      });
      setValues(position);

    } else {

      position = position.filter((data) => data.name !== value);
      setValues(position);
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

export default SelectPosition;
