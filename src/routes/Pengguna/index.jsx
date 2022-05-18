import { Table, Switch, Space } from "antd";

const columns = [
  {
    title: "NAMA",
    dataIndex: "name",
    key: "name",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "EMAIL",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "NO. TELP",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "STATUS",
    key: "action",
    render: () => (
      <Switch size="middle">
        <a>Invite </a>
      </Switch>
    ),
  },
  {
    title: "UPDATE",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>UPDATE </a>
      </Space>
    ),
  },
  {
    title: "PASSWORD",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>PASSWORD </a>
      </Space>
    ),
  },
];

const Pengguna = [];
for (let i = 0; i < 46; i++) {
  Pengguna.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default () => <Table columns={columns} dataSource={Pengguna} />;
