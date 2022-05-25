import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  Modal,
  Switch,
  Col,
  Row,
  Pagination,
  Input,
  Button,
  Table,
  Spin,
  message,
  Select,
} from "antd";
import {
  EditOutlined,
  PlusOutlined,
  DeleteOutlined,
  SearchOutlined,
  ReloadOutlined,
  UploadOutlined,
  ControlOutlined,
  CloseCircleFilled,
} from "@ant-design/icons";

import axios from "../../core/helpers/axios";
import useLocalData from "../../core/hooks/useLocalData";
import CreateAgenda from "./components/New";
import Import from "./components/Import";
import Filter from "../../components/FilterAgenda";

function Agenda() {
  const { store, dispatch } = useLocalData();
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({ keyword: "" });
  const [modalData, setModalData] = useState(null);
  const [values, setValues] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  axios.config(store);
  const [tableData, setTableData] = useState({
    offset: 0,
    limit: 10,
    resource: [],
    current: 0,
    total: 0,
  });

  const showModal = (type, record) => {
    let tempModalData = {
      content: <CreateAgenda afterSubmit={() => afterSubmitAgenda()} />,
      title: "Create Agenda",
      visible: true,
      onCancel: () => {
        setModalData({ visible: false });
      },
    };

    if (type === "Import") {
      tempModalData.content = (
        <Import data={record} afterSubmit={() => afterSubmitAgenda()} />
      );
      tempModalData.title = "Import Reminder";
    }

    if (type === "Filter") {
      tempModalData.content = (
        <Filter data={record} afterSubmit={() => afterSubmitAgenda()} />
      );
      tempModalData.title = "Filter Agenda";
    }

    setModalData(tempModalData);
  };

  function afterSubmitAgenda() {
    getListData();
    setModalData({ visible: false });
  }

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "NAMA",
      align: "center",
      dataIndex: "employee",
      key: "employee",
      render: (_, record) => {
        return (
          <div className="d-flex d-flex align-items-center flex-column">
            <span className="value">{record.employee}</span>
            <span className="desc-value">{record.nik || "-"}</span>
          </div>
        );
      },
    },
    {
      title: "JABATAN",
      align: "center",
      dataIndex: "position",
      key: "position",
      render: (_, record) => {
        return (
          <div className="d-flex d-flex align-items-center flex-column">
            <span className="value">{record.position}</span>
            <span className="desc-value">{record.department}</span>
          </div>
        );
      },
    },
    {
      title: "TANGGAL",
      align: "center",
      dataIndex: "date",
      key: "date",
      render: (_, record) => {
        return dayjs(record.date).format("D MMMM YYYY HH:mm");
      },
    },
    {
      title: "KEPERLUAN",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "PENGINGAT",
      dataIndex: "remind_at",
      key: "remind_at",
      render: (_, record) => {
        return dayjs(record.remind_at).format("D MMMM YYYY HH:mm");
      },
    },
    {
      title: "STATUS",
      key: "action",
      dataIndex: "is_active",
      render: (value, record) =>
        store?.userData?.email != record.email ? (
          <Switch
            checked={value}
            size="small"
            onClick={() => handleChangeStatus(record)}
          ></Switch>
        ) : (
          <></>
        ),
    },
    {
      title: "",
      key: "action",
      dataIndex: "edit",
      render: (text, record) => (
        <Button type="primary" className="btn-faint-primary">
          <EditOutlined />
        </Button>
      ),
    },
    {
      title: "",
      key: "action",
      dataIndex: "id",
      render: (values, record) => (
        <Button
          type="primary"
          className="btn-faint-danger"
          onClick={() => handleDelete(record)}
        >
          <DeleteOutlined />
        </Button>
      ),
    },
  ];

  function handleDelete(record) {
    const config = {
      title: `Hapus Agenda`,
      content: `Apakah anda yakin menghapus agenda ini?`,
      onOk: () => {
        reqDeleteAgenda(record);
      },
    };

    Modal.confirm(config);
  }

  function reqDeleteAgenda(data) {
    setLoading(true);
    axios
      .delete(`/agenda/${data.id}`)
      .then((response) => {
        setLoading(false);
        message.success(response.data);
        getListData();
      })
      .catch(({ response }) => {
        message.error(response.data);
        setLoading(false);
      });
  }

  function handleChangeStatus(data) {
    const config = {
      title: "Konfirmasi",
      content: `Apakah anda yakin ${
        data.is_active ? "menonaktifkan" : "mengaktifkan"
      } agenda ini?`,
      onOk: () => {
        updateStatus(data);
      },
    };

    Modal.confirm(config);
  }

  function updateStatus(data) {
    setLoading(true);

    axios
      .put(`/agenda/${data.id}/active`, { is_active: !data.is_active })
      .then((response) => {
        getListData();
        message.success(response.data);
      })
      .catch(({ response }) => {
        message.error(response.data);
        setLoading(false);
      });
  }

  function handleChangeLimit(val) {
    getListData({ limit: val });
  }

  function getListData(changesFilter = {}) {
    const { limit = null } = changesFilter;
    setLoading(true);
    axios
      .get("/agenda", {
        params: {
          keyword: filter.keyword,
          limit: limit || tableData.limit,
          offset: tableData.offset,
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

  useEffect(() => {
    dispatch({
      type: "update",
      name: "headerTitle",
      value: "Agenda",
    });

    getListData();
  }, []);

  return (
    <div>
      <Row className="mb-4 mt-5 pt-2">
        <Col className="search" xs={24} md={12}>
          <Row justify="start">
            <Col span={12}>
              <Input
                value={filter.keyword}
                prefix={<SearchOutlined />}
                placeholder="Cari"
                onChange={(val) => {
                  setFilter({ keyword: val.target.value });
                }}
                onPressEnter={() => getListData()}
                suffix={
                  <CloseCircleFilled
                    onClick={() => setFilter({ keyword: "" })}
                  />
                }
              />
            </Col>

            <Col>
              <Button
                className="btn-snow btn-sm ml-3"
                type="primary"
                onClick={() => showModal("Filter")}
              >
                <ControlOutlined />
              </Button>
            </Col>
          </Row>
        </Col>

        <Col xs={24} md={12} className="mt-md-0  mt-2">
          <Row justify="end">
            <Col className="px-2">
              <Button
                className="btn-snow-success"
                type="primary"
                visible={isModalVisible}
                onClick={() => showModal("Import")}
              >
                <UploadOutlined />
                Import
              </Button>
            </Col>

            <Col>
              <Button
                className="btn-snow-danger"
                type="primary"
                onClick={showModal}
              >
                <UploadOutlined />
                Export
              </Button>
            </Col>

            <Col className="pl-2 pr-4 mr-4 border-right">
              <Button
                className="btn-snow btn-sm"
                type="primary"
                onClick={() => getListData()}
              >
                <ReloadOutlined />
              </Button>
            </Col>

            <Col>
              <Button className="btn-user" type="primary" onClick={showModal}>
                Agenda Baru <PlusOutlined />
              </Button>
            </Col>

            {/* <Col>
              <Button className="btn-snow btn-sm" type="primary">
                <MenuOutlined />
              </Button>
            </Col> */}
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

            <Col
              xs={24}
              md={12}
              className="mt-md-0 mt-2 d-flex justify-content-end"
            >
              <Pagination total={tableData.total} pageSize={tableData.limit} />
            </Col>
          </Row>
        </Spin>
      </div>

      {/* <Modal
        title="Agenda Baru"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <CreateAgenda />
      </Modal> */}
      <Modal
        footer={null}
        title={modalData?.title}
        visible={modalData?.visible}
        onCancel={modalData?.onCancel}
      >
        {modalData?.content}
      </Modal>
    </div>
  );
}

export default Agenda;
