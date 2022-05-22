import React, { useState } from "react";
import { Form, Button, message, Modal, Spin, Select, Tag as BaseTag } from "antd";

import axios from "../../../core/helpers/axios";
import useLocalData from "../../../core/hooks/useLocalData";
import { debounce } from '../../../core/utils';
import validation from "../../../core/helpers/validation";

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

function ShareReminder(props) {
  const { store } = useLocalData();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [loadingSelect, setLoadingSelect] = useState(false);
  const [values, setValues] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
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
        setEmployeeData(response.data?.data || []);
        setLoadingSelect(false);

      }).catch(() => {
        setLoadingSelect(false);
        setOptions([]);
      });
    }, 1000)
  }

  function handleSubmit() {
    const config = {
      title: "Konfirmasi",
      content: `Apakah anda yakin membagikan pengingat ini?`,
      onOk: () => {
        reqShareReminder();
      }
    };

    Modal.confirm(config);
  }

  function reqShareReminder() {
    const payload = {
      emails: values.map((data) => data.email),
      agenda_ids: props.agendaIds
    };
    
    setLoading(true);
    axios.post('/agenda/share', payload).then((response) => {
      setLoading(false);
      message.success(response.data);
      props.afterActionModal();
      
    }).catch(({ response }) => {
      message.error(response.data);
      setLoading(false);
    });
  }

  function onCancel() {
    props.afterActionModal();
  }

  function onFocusEmployeeSelect() {
    if (!options.length) {
      searchEmployee();
    }
  }

  function onChangeEmployeeSelect(value, from) {

    let employee = values;
    if(from === 'select') {
      employeeData.forEach((data) => {
        if(data.full_name === value) {
          employee.push(data);
        }
      });
      setValues(employee);

    } else {

      employee = employee.filter((data) => data.full_name !== value); 
      setValues(employee);
    }
  }

  return (
    <Spin spinning={loading}>
      <Form onFinish={handleSubmit} form={form} layout="vertical">
        <p> Reminder ini akan dibagikan melalui email, silahkan pilih karyawan yang akan menerimanya.</p>
        <Spin spinning={loadingSelect}>
          <Form.Item name="employee" label="Karyawan" rules={[validation.required()]}>
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
