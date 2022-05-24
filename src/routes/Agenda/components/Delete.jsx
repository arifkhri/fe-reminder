// import { useState } from "react";
// import { Form, Button, message, Modal, Spin } from "antd";

// import axios from "../../../core/helpers/axios";
// import useLocalData from "../../../core/hooks/useLocalData";

// const Delete = (props) => {
//   const { store } = useLocalData();
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);
// const [values, setValues] = useState([]);
//   axios.config(store);

//   function handleSubmit() {
//     const config = {
//       title: "Konfirmasi",
//       content: `Apakah anda yakin menghapus agenda ini?`,
//       onOk: () => {
//         reqDeleteAgenda();
//       },
//     };

//     Modal.confirm(config);
//   }

//   function reqDeleteAgenda() {
//     const payload = {
//       id: values.map((data) => data.id),
//     };

//     setLoading(true);
//     axios
//       .delete(`/agenda/${props.data.id}`, payload)
//       .then((response) => {
//         setLoading(false);
//         message.success(response.data);
//         props.afterActionModal();
//       })
//       .catch(({ response }) => {
//         message.error(response.data);
//         setLoading(false);
//       });
//   }

//   function onCancel() {
//     props.afterActionModal();
//   }

//   return (
//     <Spin spinning={loading}>
//       <Form onFinish={handleSubmit} form={form} layout="vertical">
//         <div className="delete-agenda-component" align="center">
//           <p>Apakah anda yakin akan menghapus agenda?</p>
//           <div className="d-flex justify-content-center">
//             <Button type="" htmlType="button" onClick={onCancel}>
//               Kembali
//             </Button>

//             <Button type="primary" htmlType="submit">
//               Hapus
//             </Button>
//           </div>
//         </div>
//       </Form>
//     </Spin>
//   );
// };

// export default Delete;
