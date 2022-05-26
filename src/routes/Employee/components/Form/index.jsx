import React, { useEffect, useState } from "react";
import {
  Form as BaseForm,
  Input,
  Row,
  Col,
  Upload,
  Button
} from "antd";

import ImgCrop from 'antd-img-crop';
import { UserOutlined } from "@ant-design/icons";

import { checkPhoneNumber } from "../../../../core/utils";
import validation from "../../../../core/helpers/validation";
import SelectDepartment from "../../../../components/SelectDepartment";
import SelectPosition from "../../../../components/SelectPosition";

import "./style.css";
import config from "../../../../config";

function Form({ onCancel = () => null, onSubmit = () => null, data = null }) {
  const [form] = BaseForm.useForm();

  const [image, setImage] = useState([]);

  function handleSubmit() {
    const formValues = form.getFieldsValue(true);
    onSubmit({ ...formValues, file: image.length ? image[0].originFileObj : null });
  }

  function onSelect(value, type) {
    if (type === 'department') {
      clearPosition();
    }
    form.setFieldsValue({
      [type]: value.name,
      [`${type}_id`]: value.id
    })
  }

  function clearPosition() {
    // always reset position if department field changes
    form.setFieldsValue({ position: null, position_id: null })
  }

  function onClear(type) {
    form.setFieldsValue({
      [type]: null,
      [`${type}_id`]: null
    })
    if (type === 'department') {
      clearPosition();
    }
  }

  const onChange = ({ fileList: newFileList }) => {
    setImage(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  useEffect(() => {
    if (data) {
      if (data.picture_url) {
        setImage([{
          uid: '1',
          name: data.picture_url,
          status: 'done',
          url: `${config.API_BE_URL}/picture/employee/${data.picture_url}`,
        }]);
      }
      form.setFieldsValue(data);
    }
  }, [data])

  return (
    <BaseForm form={form} layout="vertical" onFinish={handleSubmit} className="employee-form">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <ImgCrop rotate>
            <Upload
              className={image.length && 'uploaded'}
              maxCount={1}
              customRequest={({ onSuccess }) => {
                setTimeout(() => {
                  onSuccess(true);
                }, 0);
              }}
              defaultFileList={image}
              listType="picture-card"
              fileList={image}
              onChange={onChange}
              onPreview={onPreview}
            >
              <UserOutlined style={{ fontSize: "60px", color: "#737373" }} />
            </Upload>
          </ImgCrop>
        </Col>

        <Col span={24}>
          <Row gutter={[16, 16]}>
            <Col span={12} >
              <BaseForm.Item label="NIK" name="nik" rules={[validation.required()]}>
                <Input />
              </BaseForm.Item>
            </Col>

            <Col span={12} >
              <BaseForm.Item label="Nama Lengkap" name="full_name" rules={[validation.required()]}>
                <Input />
              </BaseForm.Item>
            </Col>
          </Row>
        </Col>

        <Col span={24}>

          <Row gutter={[16, 16]}>
            <Col span={12} >
              <BaseForm.Item label="Email" name="email" rules={[validation.required()]}>
                <Input />
              </BaseForm.Item>
            </Col>

            <Col span={12} >
              <BaseForm.Item label="No Telepon" name="phone" rules={[validation.required()]}>
                <Input prefix={"+62"} onChange={(event) => {
                  form.setFieldsValue({ phone: checkPhoneNumber(event) })
                }} />
              </BaseForm.Item>
            </Col>
          </Row>
        </Col>

        <Col span={24}>

          <Row gutter={[16, 16]}>
            <Col span={12}>
              <BaseForm.Item shouldUpdate={(prevValues, curValues) => prevValues.department !== curValues.department}>
                {({ getFieldValue }) => {
                  return (
                    <BaseForm.Item label="Departemen" name="department" >
                      <SelectDepartment valueSelect={getFieldValue("department")} onSelect={(value) => { onSelect(value, 'department') }} component={{
                        allowClear: true,
                        showSearch: true,
                        mode: false,
                        onClear: () => onClear("department")
                      }} />
                    </BaseForm.Item>
                  );
                }}
              </BaseForm.Item>
            </Col>

            <Col span={12}>
              <BaseForm.Item shouldUpdate={(prevValues, curValues) => (prevValues.position !== curValues.position || prevValues.department !== curValues.department)}>
                {({ getFieldValue, prevValues }) => {
                  return (
                    <BaseForm.Item label="Jabatan" name="position">
                      <SelectPosition clearOptions={getFieldValue('department_id')} params={{ department_id: getFieldValue('department_id') }} valueSelect={getFieldValue("position")} onSelect={(value) => onSelect(value, 'position')} component={{
                        allowClear: true,
                        showSearch: true,
                        mode: false,
                        disabled: !getFieldValue('department_id'),
                        onClear: () => onClear("position")
                      }} />
                    </BaseForm.Item>
                  );
                }}
              </BaseForm.Item>
            </Col>
          </Row>
        </Col>

      </Row>

      <div className="d-flex justify-content-center">
        <Button htmlType="button" onClick={onCancel}>
          Kembali
        </Button>

        <Button type="primary" htmlType="submit">
          Kirim
        </Button>
      </div>
    </BaseForm>
  );
};

export default Form;