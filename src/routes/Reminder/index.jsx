import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

import { Table, Button, Col, Input, Row, Pagination, Spin, Modal, Select, message, Dropdown, Menu } from "antd";
import { CloseCircleFilled, ControlOutlined, FieldTimeOutlined, ShareAltOutlined, CheckOutlined, SearchOutlined, ReloadOutlined, UploadOutlined, CheckSquareOutlined, InfoCircleFilled } from "@ant-design/icons";

import FilterAgenda from "../../components/FilterAgenda";
import AgendaComplete from "./components/AgendaComplete"
import ShareReminder from "./components/ShareReminder"
import axios from "../../core/helpers/axios";
import useLocalData from "../../core/hooks/useLocalData";

function Reminder() {
  const { store, dispatch } = useLocalData();
  const [tableData, setTableData] = useState({ offset: 0, limit: 10, resource: [], current: 0, total: 0 });
  const [filter, setFilter] = useState({ keyword: '' });
  const [modalData, setModalData] = useState(null);
  const [loading, setLoading] = useState(false);
  axios.config(store);

  const columns = [
    {
      title: "",
      dataIndex: "employee_picture_url",
      key: "picture",
      render: (value) => <img src={value || "images/employee-default.png"} alt="employee" />
    },
    {
      title: "",
      dataIndex: "employee",
      key: "employee",
      render: (_, record) => {
        return (
          <div className="d-flex d-flex align-items-center flex-column">
            <span className="value">{record.employee}</span>
            <span className="desc-value">{record.nik || '-'}</span>
          </div>
        )
      }
    },
    {
      title: "",
      dataIndex: "position",
      key: "position",
      render: (_, record) => {
        return (
          <div className="d-flex d-flex align-items-center flex-column">
            <span className="value">{record.position}</span>
            <span className="desc-value">{record.department}</span>
          </div>
        )
      }
    },
    {
      title: "",
      dataIndex: "date",
      key: "date",
      render: (_, record) => {
        return (
          <div className="d-flex d-flex align-items-center flex-column">
            <span className="desc-value">Tanggal</span>
            <span className="value">{dayjs(record.date).format("D MMMM YYYY HH:mm")}</span>
          </div>
        )
      }
    },
    {
      title: "",
      dataIndex: "description",
      key: "description",
      render: (_, record) => {
        return (
          <div className="d-flex d-flex align-items-center flex-column">
            <span className="desc-value"><InfoCircleFilled />   Keperluan </span>
            <span className="value">{record.description}</span>
          </div>
        )
      }
    },
    {
      title: "",
      dataIndex: "remind_at",
      key: "remind_at",
      render: (_, record) => {
        return (
          <div className="d-flex d-flex align-items-center flex-column">
            <span className="desc-value"><FieldTimeOutlined />  Tanggal Diingatkan</span>
            <span className="value">{dayjs(record.remind_at).format("D MMMM YYYY HH:mm")}</span>
          </div>
        )
      }
    },
    {
      title: "",
      key: "action",
      dataIndex: "id",
      render: (_, record) => (
        <Button type="primary" className="btn-sm btn-faint-primary" onClick={() => showModal('agendaComplete', record)}>
          <CheckOutlined />
        </Button>
      ),
    },
    {
      title: "",
      key: "action",
      dataIndex: "id",
      render: (value, record) => (
        dayjs().isAfter(dayjs(record.remind_at).format("YYYY-MM-DD HH:mm:ss")) &&
        <Button type="primary" className="btn-sm btn-faint-danger" onClick={() => handleReminder([value])}>
          <FieldTimeOutlined />
        </Button>
      ),
    }
    , {
      title: "",
      key: "action",
      dataIndex: "id",
      render: (value) => (
        <Button type="primary" className="btn-sm btn-faint-purple" onClick={() => showModal('shareReminder', [value])}>
          <ShareAltOutlined />
        </Button>
      ),
    },
  ];

  function getListData(changesFilter = {}) {
    const { limit = null, offset = null } = changesFilter;

    setLoading(true);
    axios.get("/agenda", {
      params: {
        is_active: true,
        keyword: filter.keyword,
        limit: limit || tableData.limit,
        offset: offset || tableData.offset,
      },
    })
      .then((response) => {
        setLoading(false);
        setTableData({
          limit: response.data.limit,
          offset: response.data.offset,
          current: tableData.current,
          resource: response.data.data,
          total: response.data.total,
        });
      })
      .catch(() => {
        setLoading(false);
      });
  }

  function handleReminder(ids) {
    const config = {
      title: "Konfirmasi",
      content: `Anda akan diingatkan kembali besok, yakin untuk melanjutkan?`,
      onOk: () => {
        reqReminder(ids);
      }
    };

    Modal.confirm(config);
  }

  function reqReminder(ids) {
    setLoading(true);
    axios.post('/agenda/remind', { ids }).then((response) => {
      setLoading(false);
      message.success(response.data);
      getListData();

    }).catch(({ response }) => {
      message.error(response.data);
      setLoading(false);
    });
    console.log("🚀 ~ file: index.jsx ~ line 121 ~ reqReminder ~ ids", ids)
  }

  function showModal(type, record) {
    let tempModalData = {
      content: <ShareReminder agendaIds={record} afterActionModal={afterActionModal} />,
      title: "Bagikan Reminder",
      visible: true
    };

    if (type === "agendaComplete") {
      tempModalData.content = <AgendaComplete agendaData={[record]} afterActionModal={() => {
        afterActionModal();
        getListData();
      }} />;
      tempModalData.title = "Agenda Selesai";
    }

    if (type === "filterAgenda") {
      tempModalData.content = (
        <FilterAgenda afterSubmit={() => afterActionModal()} />
      );
      tempModalData.title = "Filter Agenda";
    }

    setModalData(tempModalData);
  }

  function afterActionModal() {
    setModalData({ visible: false });
  }

  function handleChangeLimit(val) {
    getListData({ limit: val });
  }

  function handleChangePage(val) {
    getListData({ offset: val });
  }

  useEffect(() => {
    dispatch({
      type: 'update',
      name: 'headerTitle',
      value: 'Reminder'
    });

    getListData();
  }, []);

  return (
    <>
      <Row className="mb-4 mt-5 pt-2">
        <Col className="search" xs={24} md={12}>
          <Row justify="start">

            <Col span={12}>
              <Input
                value={filter.keyword}
                prefix={<SearchOutlined />}
                placeholder="Cari"
                onChange={(val) => { setFilter({ keyword: val.target.value }) }}
                onPressEnter={() => getListData()}
                suffix={<CloseCircleFilled onClick={() => setFilter({ keyword: '' })} />}
              />
            </Col>

            <Col>
              <Button className="btn-snow btn-sm ml-3" type="primary" onClick={() => showModal("filterAgenda")}>
                <ControlOutlined />
              </Button>
            </Col>
          
            <Col>
            <Dropdown
                overlay={<Menu
                  items={[
                    {
                      label: "Ingatkan kembali besok"
                    },
                    {
                      label: "Bagikan"
                    }]} />}
                placement="bottomRight"
                trigger={['click']}
              >
              <Button className="btn-snow btn-sm ml-3" type="primary" >
              <CheckSquareOutlined />
              </Button>
            </Dropdown>
            </Col>
          </Row>
        </Col>

        <Col xs={24} md={12} className="mt-md-0  mt-2">
          <Row justify="end">
            <Col>
              <Dropdown
                overlay={<Menu
                  items={[
                    {
                      label: "Berdasarkan Filter"
                    },
                    {
                      label: "Data yang ditandai"
                    },
                    {
                      label: "Reminder hari ini"
                    }]} />}
                placement="bottomRight"
                trigger={['click']}
              >
                <Button className="btn-snow-danger" type="primary">
                  <UploadOutlined />
                  Export
                </Button>
              </Dropdown>

            </Col>

            <Col className="px-2">
              <Button className="btn-snow btn-sm" type="primary" onClick={() => getListData()}>
                <ReloadOutlined />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="list">
        <Spin spinning={loading}>
          <Table
            columns={columns}
            dataSource={tableData.resource}
            size="small"
            pagination={false}
          />

          <Row className="mt-2">
            <Col xs={24} md={12}>
              <div className="d-flex align-items-center">
                <span className="d-flex align-items-center">
                  <span className="mr-2">Menampilkan</span>
                  <Select value={tableData.limit} onChange={handleChangeLimit}>
                    <Select.Option value={10}>10</Select.Option>
                    <Select.Option value={20}>20</Select.Option>
                    <Select.Option value={30}>30</Select.Option>
                  </Select>
                </span>
                <span className="px-2">|</span>
                <span>Total {tableData.total} </span>
              </div>
            </Col>

            <Col xs={24} md={12} className="mt-md-0 mt-2 d-flex justify-content-end">
              <Pagination onChange={handleChangePage} total={tableData.total} pageSize={tableData.limit} />
            </Col>
          </Row>
        </Spin>
      </div>

      <Modal
        footer={null}
        title={modalData?.title}
        visible={modalData?.visible}
        onCancel={() => {
          setModalData({ visible: false });
        }}
      >
        {modalData?.content}
      </Modal>
    </>
  );
}

export default Reminder;
