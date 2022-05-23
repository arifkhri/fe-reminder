import React, { useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  DatePicker,
  Select,
  Tag as BaseTag,
} from "antd";
import dayjs from "dayjs";

import validation from "../../../core/helpers/validation";
import useLocalData from "../../../core/hooks/useLocalData";
import axios from "../../../core/helpers/axios";
import { debounce } from "../../../core/utils";

function Tag(props) {
  const { label } = props;

  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <BaseTag color="blue" onMouseDown={onPreventMouseDown}>
      {label}
    </BaseTag>
  );
}

const Filter = (props) => {
  const { label } = props;
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const dateFormat = "D MMMM YYYY";
  const { store } = useLocalData();
  const [loadingSelect, setLoadingSelect] = useState(false);
  const [tableData, setTableData] = useState({
    offset: 0,
    limit: 10,
    resource: [],
    current: 0,
    total: 0,
  });
  const [values, setValues] = useState([]);
  const [agendaData, setAgendaData] = useState([]);
  const [jabatanData, setJabatanData] = useState([]);
  const [options, setOptions] = useState([]);
  axios.config(store);

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);
  }

  function searchAgenda(keyword) {
    const { limit = null } = searchAgenda;
    setLoadingSelect(true);
    debounce(() => {
      axios
        .get("/agenda", {
          params: {
            keyword,
            limit: limit || tableData.limit,
            offset: tableData.offset,
          },
        })
        .then((response) => {
          setTableData({
            limit: response.data.limit,
            offset: response.data.offset,
            current: tableData.current,
            resource: response.data.data,
            total: response.data.total,
          });
          const newResponse = [];
          (response.data?.data || []).forEach((data) => {
            newResponse.push({
              label: data.department,
              value: data.department,
            });
          });
          setOptions(newResponse);
          setAgendaData(response.data?.data || []);
          setLoadingSelect(false);
        })
        .catch(() => {
          setLoadingSelect(false);
          setOptions([]);
        });
    }, 1000);
  }

  function onFocusAgendaSelect() {
    if (!options.length) {
      searchAgenda();
    }
  }

  function onChangeAgendaSelect(value, from) {
    let agenda = values;
    if (from === "select") {
      agendaData.forEach((data) => {
        if (data.department === value) {
          agenda.push(data);
        }
      });
      setValues(agenda);
    } else {
      agenda = agenda.filter((data) => data.department !== value);
      setValues(agenda);
    }
  }

  function searchJabatan(keyword) {
    const { limit = null } = searchJabatan;
    setLoadingSelect(true);
    debounce(() => {
      axios
        .get("/agenda", {
          params: {
            keyword,
            limit: limit || tableData.limit,
            offset: tableData.offset,
          },
        })
        .then((response) => {
          setTableData({
            limit: response.data.limit,
            offset: response.data.offset,
            current: tableData.current,
            resource: response.data.data,
            total: response.data.total,
          });
          const newResponse = [];
          (response.data?.data || []).forEach((data) => {
            newResponse.push({
              label: data.position,
              value: data.position,
            });
          });
          setOptions(newResponse);
          setJabatanData(response.data?.data || []);
          setLoadingSelect(false);
        })
        .catch(() => {
          setLoadingSelect(false);
          setOptions([]);
        });
    }, 1000);
  }

  function onFocusJabatanSelect() {
    if (!options.length) {
      searchJabatan();
    }
  }

  function onChangeJabatanSelect(value, from) {
    let jabatan = values;
    if (from === "select") {
      jabatanData.forEach((data) => {
        if (data.position === value) {
          jabatan.push(data);
        }
      });
      setValues(jabatan);
    } else {
      jabatan = jabatan.filter((data) => data.position !== value);
      setValues(jabatan);
    }
  }

  return (
    <div className="filter-agenda-component">
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              className="departemen"
              label="Departemen"
              name={"department"}
              rules={[validation.required()]}
            >
              <Select
                onSelect={(value) => onChangeAgendaSelect(value, "select")}
                onDeselect={(value) => onChangeAgendaSelect(value, "deselect")}
                onFocus={onFocusAgendaSelect}
                onSearch={searchAgenda}
                mode="multiple"
                showArrow
                tagRender={Tag}
                options={options}
              />
            </Form.Item>
            <Form.Item
              className="tanggal-agenda"
              label="Tanggal Agenda"
              name={"reminder_at"}
              rules={[validation.required()]}
            >
              <DatePicker
                placeholder=""
                value={dayjs("D MMMM YYYY", dateFormat)}
                format={dateFormat}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              className="jabatan"
              label="Jabatan"
              name={"position"}
              rules={[validation.required()]}
            >
              <Select
                onSelect={(value) => onChangeJabatanSelect(value, "select")}
                onDeselect={(value) => onChangeJabatanSelect(value, "deselect")}
                onFocus={onFocusJabatanSelect}
                onSearch={searchJabatan}
                mode="multiple"
                showArrow
                tagRender={Tag}
                options={options}
              />
            </Form.Item>
            <Form.Item
              className="reminder"
              label="Reminder"
              name={"reminder"}
              rules={[validation.required()]}
            >
              <DatePicker
                placeholder=""
                value={dayjs("D MMMM YYYY HH:mm", dateFormat)}
                format={dateFormat}
              />
            </Form.Item>
          </Col>
        </Row>

        <div className="d-flex justify-content-center">
          <Button type="" htmlType="button">
            Kembali
          </Button>

          <Button type="primary" htmlType="submit">
            Kirim
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Filter;
