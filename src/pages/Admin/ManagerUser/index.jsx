import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { Form, Input, Select, Modal } from "antd";
const { Option } = Select;
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import Sidebar from "../../../components/Sidebar";
import TableItem from "../../../components/TableItem";
import ModalItem from "../../../components/ModalItem";

const ManagerUser = () => {
  const [data, setData] = useState([]);
  const [editRecord, setEditRecord] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formValues, setFormValues] = useState({ user: { ...selectedUser } });
  const formRef = useRef(null);

  const [isModalEdit, setIsModalEdit] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Initialize the data array
    const initialData = [];
    for (let i = 0; i < 100; i++) {
      const id = uuidv4(); // Generate a UUID as a random ID
      initialData.push({
        key: id,
        fullname: `Nguyen Van ${i}`,
        email: `test@gmail${i}.com`,
        phone: `09999999${i}`,
        role: "User",
        address: `Address${i}`,
      });
    }
    setData(initialData);
  }, []);

  useEffect(() => {
    // Update the form values when the selectedUser changes
    if (selectedUser) {
      formRef.current?.setFieldsValue({ user: { ...selectedUser } });
    }
  }, [selectedUser]);

  const renderAction = (text, user) => {
    return (
      <div>
        <EditOutlined
          onClick={() => {
            setSelectedUser(user);
            handleEdit(user);
          }}
          className="text-green-600 text-lg cursor-pointer border border-gray-400 rounded-md p-1"
        />
        <span>
          <DeleteOutlined
            onClick={() => {
              setSelectedUser(user);
              showConfirm();
            }}
            className="text-[#EC6453] text-lg cursor-pointer border border-gray-400 rounded-md p-1"
          />
        </span>
      </div>
    );
  };
  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "fullname",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
    },
    {
      title: "Hành động",
      dataIndex: "action",
      render: renderAction,
    },
  ];
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  // handle CRUD

  const handleEdit = (record) => {
    setEditRecord(record);
    setSelectedUser(record);
    setIsModalEdit(true);
    setFormValues({ user: { ...record } });
    console.log("user: ", record);
  };

  const handleConfirmOk = () => {
    const updatedData = data.filter((user) => user.key !== selectedUser.key);
    setData(updatedData);
    formRef.current?.resetFields();
    setIsConfirmVisible(false);
    setIsModalEdit(false);
    toast.success("Xóa thành công!");
  };

  const handleConfirmCancel = () => {
    setIsConfirmVisible(false);
  };

  const showConfirm = () => {
    setIsConfirmVisible(true);
    setIsModalEdit(false);
  };

  const handleOk = () => {
    formRef.current.submit();
    toast.success("Cập nhật thành công!");
  };

  const handleCancel = () => {
    setIsModalEdit(false);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredData = data.filter((user) => {
    const { fullname, email, phone, role } = user;
    const searchValue = searchQuery.toLowerCase();
    return (
      fullname.toLowerCase().includes(searchValue) ||
      email.toLowerCase().includes(searchValue) ||
      phone.toLowerCase().includes(searchValue) ||
      role.toLowerCase().includes(searchValue)
    );
  });

  const onFinish = (values) => {
    const updatedData = data.map((user) => {
      if (user.key === selectedUser.key) {
        return { ...user, ...values.user };
      }
      return user;
    });

    setData(updatedData);
    setIsModalEdit(false);
    formRef.current?.resetFields();
  };

  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4 mr-14">
        <h1 className="text-gray-700 text-center mt-4">Quản lý người dùng</h1>
        <div className="my-2 grid justify-items-end">
          <input
            type="text"
            placeholder="Tìm kiếm người dùng"
            onChange={handleSearch}
            className="w-full py-2 px-3 rounded-md bg-gray-200 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ maxWidth: "400px" }}
          />
        </div>

        <TableItem data={filteredData} columns={columns} className="mb-4" />
        <Modal
          title="Xóa người dùng"
          visible={isConfirmVisible}
          onOk={handleConfirmOk}
          onCancel={handleConfirmCancel}
          okText="Có"
          okType="danger"
          cancelText="Không"
        >
          <p>Bạn có chắc là muốn xóa người dùng này?</p>
        </Modal>
        <ModalItem
          title="Cập nhật người dùng"
          isOpen={isModalEdit}
          onCancel={handleCancel}
          editRecord={editRecord}
          onOk={handleOk}
          setEditRecord={setEditRecord}
          okType="default"
          okText="Cập nhật"
          cancelText="Hủy"
        >
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
            validateMessages={validateMessages}
            initialValues={{
              user: {
                ...formValues.user,
                fullname: selectedUser ? selectedUser.fullname : "",
              },
            }}
            ref={formRef}
          >
            <Form.Item
              name={["user", "fullname"]} // Update the name to match the field name
              label="Họ và tên"
              rules={[
                {
                  required: true,
                  message: "Không được để trống!",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  const value = e.target.value;
                  setFormValues((prevValues) => ({
                    ...prevValues,
                    user: {
                      ...prevValues.user,
                      fullname: value,
                    },
                  }));
                }}
              />
            </Form.Item>

            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                  required: true,
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  const value = e.target.value;
                  setFormValues((prevValues) => ({
                    ...prevValues,
                    user: {
                      ...prevValues.user,
                      email: value,
                    },
                  }));
                }}
              />
            </Form.Item>
            <Form.Item
              name={["user", "phone"]} // Update the name to match the field name
              label="Số điện thoại"
              rules={[
                {
                  required: true,
                  message: "Không được để trống!",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  const value = e.target.value;
                  setFormValues((prevValues) => ({
                    ...prevValues,
                    user: {
                      ...prevValues.user,
                      fullname: value,
                    },
                  }));
                }}
              />
            </Form.Item>
            <Form.Item
              name={["user", "role"]}
              label="Vai trò"
              rules={[
                {
                  type: "role",
                  required: true,
                },
              ]}
            >
              <Select
                onChange={(value) => {
                  setFormValues((prevValues) => ({
                    ...prevValues,
                    user: {
                      ...prevValues.user,
                      role: value,
                    },
                  }));
                }}
              >
                <Option value="User">User</Option>
                <Option value="Admin">Admin</Option>
                <Option value="Giáo viên">Giáo viên</Option>
                <Option value="Kế toán">Kế toán</Option>
                <Option value="Quản lý học vụ">Quản lý học vụ</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={["user", "address"]} // Update the name to match the field name
              label="Địa chỉ"
              rules={[
                {
                  required: true,
                  message: "Không được để trống!",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  const value = e.target.value;
                  setFormValues((prevValues) => ({
                    ...prevValues,
                    user: {
                      ...prevValues.user,
                      fullname: value,
                    },
                  }));
                }}
              />
            </Form.Item>
          </Form>
        </ModalItem>
      </div>
    </div>
  );
};

export default ManagerUser;
