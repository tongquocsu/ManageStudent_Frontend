import { DeleteOutlined, EditOutlined, DownOutlined } from "@ant-design/icons";
import TableComponent from "../TableItem";
import ModalComponent from "../ModalComponent";
import { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import Loading from "../Loading";
import _ from "lodash";
import { toast } from "react-toastify";

function StudentManage() {
  const [itemOption, setItemOption] = useState([]);
  const [isShowOption, setIsShownOption] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const [listUser, setListUser] = useState([]);
  const formInstance = Form.useForm()[0];
  const [fullName, setFullName] = useState("");
  const [Class, setClass] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [editRecord, setEditRecord] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [isModalEdit, setIsModalEdit] = useState(false);

  const renderAction = (text, record) => {
    return (
      <div>
        <EditOutlined
          className="mx-2"
          style={{
            color: "#539E53",
            fontSize: "30px",
            cursor: "pointer",
            border: "1px solid #737373",
            borderRadius: "5px",
            padding: "4px",
          }}
          onClick={() => handleEdit(record)}
        />
        <DeleteOutlined
          style={{
            color: "#EC6453",
            fontSize: "30px",
            cursor: "pointer",
            border: "1px solid #737373",
            borderRadius: "5px",
            padding: "4px",
          }}
          onClick={() => handleDelete(record)}
        />
      </div>
    );
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "id",
    },
    {
      title: "Họ Và Tên",
      dataIndex: "fullName",
    },
    {
      title: "Lớp",
      dataIndex: "Class",
    },
    {
      title: "Giới Tính",
      dataIndex: "gender",
    },
    {
      title: "Ngày Sinh",
      dataIndex: "dateOfBirth",
    },
    {
      title: "Địa Chỉ",
      dataIndex: "address",
    },
    {
      title: "Hành Động",
      dataIndex: "action",
      render: renderAction,
    },
  ];
  const data = [
    {
      id: "1",
      fullName: "Nguyễn Văn 1",
      Class: "10A3",
      gender: "Male",
      dateOfBirth: "1 / 1 / 2001",
      address: "Cần Thơ",
    },
    {
      id: "2",
      fullName: "Nguyễn Văn 2",
      Class: "10A3",
      gender: "Male",
      dateOfBirth: "2 / 2 / 2001",
      address: "Cần Thơ",
    },
    {
      id: "3",
      fullName: "Nguyễn Văn 3",
      Class: "10A3",
      gender: "Male",
      dateOfBirth: "3 / 3 / 2001",
      address: "Cần Thơ",
    },
    {
      id: "4",
      fullName: "Nguyễn Văn 4",
      Class: "10A3",
      gender: "Male",
      dateOfBirth: "4 / 4 / 2001",
      address: "Cần Thơ",
    },
    {
      id: "5",
      fullName: "Nguyễn Văn 5",
      Class: "10A3",
      gender: "Male",
      dateOfBirth: "5 / 5 / 2001",
      address: "Cần Thơ",
    },
    {
      id: "6",
      fullName: "Nguyễn Văn 6",
      Class: "10A3",
      gender: "Male",
      dateOfBirth: "6 / 6 / 2001",
      address: "Cần Thơ",
    },
    {
      id: "7",
      fullName: "Nguyễn Văn 7",
      Class: "10A3",
      gender: "Male",
      dateOfBirth: "7 / 7 / 2001",
      address: "Cần Thơ",
    },
    {
      id: "8",
      fullName: "Nguyễn Văn 8",
      Class: "10A3",
      gender: "Male",
      dateOfBirth: "8 / 8 / 2001",
      address: "Cần Thơ",
    },
    {
      id: "9",
      fullName: "Nguyễn Văn 9",
      Class: "10A3",
      gender: "Male",
      dateOfBirth: "9 / 9 / 2001",
      address: "Cần Thơ",
    },
    {
      id: "10",
      fullName: "Nguyễn Văn 10",
      Class: "10A3",
      gender: "Male",
      dateOfBirth: "10 / 10 / 2001",
      address: "Cần Thơ",
    },
  ];

  const menuItems = [
    { key: "option1", title: "10A1" },
    { key: "option2", title: "10A2" },
    { key: "option3", title: "10A3" },
  ];

  useEffect(() => {
    setItemOption(menuItems);
  }, []);
  useEffect(() => {
    setListUser(data);
  }, []);
  const handletoggle = () => {
    setIsShownOption(!isShowOption);
  };
  const handleEdit = (record) => {
    setEditRecord(record);
    setIsModalEdit(true);
  };
  const handleCancelEdit = () => {
    setIsModalEdit(false);
  };
  const handleMenuClick = (e, title) => {
    e.stopPropagation();
    setSelectedClass(title);
    setIsShownOption(false);
  };

  const handleSubmit = () => {
    const values = formInstance.getFieldsValue();
    const cloneListUser = _.cloneDeep(listUser);
    const index = cloneListUser.findIndex((item) => item.id === editRecord.id);

    if (index !== -1) {
      cloneListUser[index].fullName = values.fullName;
      cloneListUser[index].Class = values.Class;
      cloneListUser[index].gender = values.gender;
      cloneListUser[index].dateOfBirth = values.dateOfBirth;
      cloneListUser[index].address = values.address;
      setListUser(cloneListUser);
      setIsModalEdit(false);
      toast.success("Cập nhật thành công");
    }
  };
  const handleDelete = (e) => {
    console.log(e);
  };
  console.log({
    fullName,
    Class,
    gender,
    dateOfBirth,
    address,
  });
  const filteredData = listUser.filter((item) => item.Class === selectedClass);
  console.log(listUser);
  return (
    <div>
      <div className="flex items-center justify-between mx-10 my-2">
        <div className="relative">
          Lớp: {selectedClass} <DownOutlined onClick={handletoggle} />
          {isShowOption && (
            <ul
              className="absolute z-10 bg-white text-center rounded-sm w-[100px] shadow min-h-[120px] overflow-y-auto"
              style={{ padding: "0px" }}
            >
              {itemOption.map((item) => (
                <li
                  className="hover:bg-[#ccc] cursor-pointer flex items-center justify-center"
                  onClick={(e) => handleMenuClick(e, item.title)}
                  key={item.key}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Button className="bg-black text-white px-10">Tạo mới</Button>
      </div>

      <Loading isLoading={!filteredData}>
        <TableComponent data={filteredData} columns={columns} />
      </Loading>
      <ModalComponent
        title="Chỉnh sửa"
        isOpen={isModalEdit}
        onCancel={handleCancelEdit}
        okButtonProps={{ style: { display: "none" } }}
      >
        <Form
          form={formInstance}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={editRecord}
          autoComplete="off"
        >
          <Form.Item
            label="Họ và Tên"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
          >
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Lớp"
            name="Class"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
          >
            <Input value={Class} onChange={(e) => setClass(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Giới Tính"
            name="gender"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
          >
            <Input value={gender} onChange={(e) => setGender(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Ngày Sinh"
            name="dateOfBirth"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
          >
            <Input
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Địa Chỉ"
            name="address"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
          >
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
            <Button className="bg-black cl text-white" onClick={handleSubmit}>
              Thay đổi
            </Button>
          </Form.Item>
        </Form>
      </ModalComponent>
    </div>
  );
}

export default StudentManage;
