import React, { useState } from "react";
import { Form, Button, message, Spin, Select, Tag as BaseTag } from "antd";

import axios from "../../../core/helpers/axios";
import useLocalData from "../../../core/hooks/useLocalData";
import { debounce } from '../../../core/utils';

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
      closable={true}
    >
      {label}
    </BaseTag>
  );
}

function ShareReminder(props) {
  const { store } = useLocalData();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [loadingSelect, setLoadingSelect] = useState(false);
  const [options, setOptions] = useState([]);
  axios.config(store);

  function searchEmployee(keyword) {
    setLoadingSelect(true);
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

        setLoadingSelect(false);

      }).catch(() => {
        setLoadingSelect(false);
        setOptions([]);
      });
    }, 1000)
  }

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);
    const { employee } = formValues;
    
    console.log("🚀 ~ file: ShareReminder.jsx ~ line 59 ~ handleSubmit ~ formValues", formValues)
    // setLoading(true);

    // axios.post('/agenda/share', formValues).then((response) => {
    //   setLoading(false);
    //   message.success(response.data);
    //   props.afterActionModal();

    // }).catch(({ response }) => {
    //   message.error(response.data);
    //   setLoading(false);
    // });
  }

  function onCancel() {
    props.afterActionModal();
  }

  function onFocusEmployeeSelect() {
    if (!options.length) {
      searchEmployee();
    }
  }

  return (
    <Spin spinning={loading}>
      <Form onFinish={handleSubmit} form={form} layout="vertical">
        <p> Reminder ini akan dibagikan melalui email, silahkan pilih karyawan yang akan menerimanya.</p>
        <Spin spinning={loadingSelect}>
          <Form.Item name="employee" label="Karyawan">
            <Select
              onFocus={onFocusEmployeeSelect}
              onSearch={searchEmployee}
              mode="multiple"
              showArrow
              tagRender={Tag}
              options={options}
            />
          </Form.Item>
        </Spin>

        <div className="d-flex justify-content-center  mt-4">
          <Button onClick={onCancel}>Kembali</Button>
          <Button type="primary" htmlType="submit">
            Bagikan
          </Button>
        </div>
      </Form>
    </Spin>
  );
}

export default ShareReminder;
