import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Modal, Form, Input } from "antd";
import {
  emailValidationMessage,
  requiredValidationMessage,
} from "../../Utils/Contants";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const EditUsers = ({ user, handleUserUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const handleOk = async () => {
    const formValues = await form.validateFields();
    const updatedUser = { ...user, ...formValues };
    handleUserUpdate(updatedUser);
    setIsModalOpen(false);
  };

  return (
    <>
      <EditOutlined
        onClick={() => setIsModalOpen(true)}
        style={{
          fontSize: "20px",
        }}
      />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={() => handleOk()}
        onCancel={() => setIsModalOpen(false)}
      >
        <Form
          {...layout}
          form={form}
          name="edit-user-form"
          initialValues={{
            name: user.name,
            email: user.email,
            phone: user.phone,
            website: user.website,
          }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: requiredValidationMessage }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: requiredValidationMessage },
              { type: "email", message: emailValidationMessage },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[{ required: true, message: requiredValidationMessage }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="website"
            label="Website"
            rules={[{ required: true, message: requiredValidationMessage }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditUsers;
