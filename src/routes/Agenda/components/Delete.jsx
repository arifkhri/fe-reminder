import { Form, Button } from "antd";

const Delete = (props) => {
  return (
    <div className="delete-agenda-component" align="center">
      <p>Apakah anda yakin akan menghapus agenda?</p>
      <Form>
        <div className="d-flex justify-content-center">
          <Button type="" htmlType="button" onClick>
            Kembali
          </Button>

          <Button type="primary" htmlType="submit">
            Hapus
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Delete;
