import { DeleteOutlined, EditOutlined, DownOutlined } from "@ant-design/icons";
import TableComponent from "../TableItem";
import ModalComponent from "../ModalComponent";
import { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import Loading from "../Loading";
import _ from "lodash";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import SearchInput from "../SearchInput";
function StudentManage() {
  const [itemOption, setItemOption] = useState([]);
  const [isShowOption, setIsShownOption] = useState(false);
  const [selectedClass, setSelectedClass] = useState("10A1");
  const [listUser, setListUser] = useState([]);
  const formInstance = Form.useForm()[0];
  const [fullName, setFullName] = useState("");
  const [Class, setClass] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [edituser, setEdituser] = useState(null);
  const [adduser, setAdduser] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [isModalAdd, setIsModalAdd] = useState(false);
  const [isModalDeleted, setIsModalDeleted] = useState(false);
  const [deleteStudent, setDeleteStudent] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [listUserSearch, setListUserSearch] = useState([]);
  const renderAction = (text, user) => {
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
          onClick={() => handleEdit(user)}
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
          onClick={() => handleDelete(user)}
        />
      </div>
    );
  };

  const columns = [
    { title: "ID", dataIndex: "id" },
    {
      title: "STT",
      dataIndex: "sst",
      sorter: (a, b) => a.sst - b.sst,
    },
    {
      title: "Họ Và Tên",
      dataIndex: "fullName",
      sorter: (a, b) => a.fullName.localeCompare(b.fullName),
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
  const data = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 1; j < 7; j++) {
      data.push({
        key: `${i}`,
        id: `${i}`,
        sst: `${i}`,
        fullName: `Nguyễn Văn ${i + 1}`,
        Class: `10A${j}`,
        gender: "Male",
        dateOfBirth: `${i + 1} / ${i + 1} / 2001`,
        address: "Cần Thơ",
      });
    }
  }

  const uniqueClasses = [...new Set(data.map((item) => item.Class))];

  const menuItems = uniqueClasses.map((classItem, index) => ({
    key: `option${index + 1}`,
    title: classItem,
  }));

  useEffect(() => {
    setItemOption(menuItems);
  }, []);
  useEffect(() => {
    setListUser(data);
  }, []);
  const handletoggle = () => {
    setIsShownOption(!isShowOption);
  };
  const handleEdit = (user) => {
    console.log(user);
    setEdituser(user);
    setIsModalEdit(true);
  };
  const handleAddUser = (user) => {
    console.log(user);
    setAdduser(user);
    setIsModalAdd(true);
  };
  const handleCancel = () => {
    setIsModalAdd(false);
    setIsModalEdit(false);
    setIsModalDeleted(false);
  };
  const handleMenuClick = (e, title) => {
    e.stopPropagation();
    setSelectedClass(title);
    setIsShownOption(false);
  };
  const generateUniqueId = () => {
    return uuidv4();
  };

  const handleAddSubmit = () => {
    let sstItem = filteredData.length;
    const values = formInstance.getFieldsValue();
    const newStudent = {
      id: generateUniqueId(),
      sst: sstItem + 1,
      fullName: values.fullName,
      Class: values.Class,
      gender: values.gender,
      dateOfBirth: values.dateOfBirth,
      address: values.address,
    };
    setListUser([...listUser, newStudent]);
    setIsModalAdd(false);
    setIsLoading(true);
    formInstance.resetFields();
    toast.success("Tạo học sinh thành công!");
    setIsLoading(false);
  };

  const handleEditSubmit = () => {
    const values = formInstance.getFieldsValue();
    const cloneListUser = _.cloneDeep(listUser);
    const index = cloneListUser.findIndex((item) => item.id === edituser.id);

    if (index !== -1) {
      cloneListUser[index].fullName = values.fullName;
      cloneListUser[index].Class = values.Class;
      cloneListUser[index].gender = values.gender;
      cloneListUser[index].dateOfBirth = values.dateOfBirth;
      cloneListUser[index].address = values.address;
      setListUser(cloneListUser);
      setIsLoading(true);
      setIsModalEdit(false);
      toast.success("Cập nhật thành công");
      setIsLoading(false);
      formInstance.resetFields();
    }
  };
  const handleDelete = (student) => {
    setIsModalDeleted(true);
    setDeleteStudent(student);
  };
  const handleDeleteSubmit = () => {
    if (deleteStudent) {
      const updatedListUser = listUser.filter((s) => s.id !== deleteStudent.id);
      setListUser(updatedListUser);
      setIsLoading(true);
      setIsModalDeleted(false);
      setDeleteStudent(null);
      toast.success("Xóa thành công!");
      setIsLoading(false);
    }
  };

  const filteredData = listUser.filter((item) => item.Class === selectedClass);
  const handleSearch = (value) => {
    setSearchValue(value);
  };
  useEffect(() => {
    const filterSearch = filteredData.filter((item) => {
      const classText = item.fullName.toLowerCase();
      const searchValueText = searchValue.toLowerCase();
      return classText.includes(searchValueText);
    });
    setListUserSearch(filterSearch);
  }, [searchValue]);
  return (
    <div>
      <div className="flex items-center justify-between mx-10 my-2">
        <div className="relative">
         <div className="flex items-center"> Lớp: {selectedClass} <DownOutlined onClick={handletoggle} /></div>
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
        <SearchInput placeholder="Tìm kiếm theo tên" onSearch={handleSearch} />
        <Button className="bg-black text-white px-10" onClick={handleAddUser}>
          Tạo mới
        </Button>
      </div>

      <Loading isLoading={isLoading}>
        {searchValue ? (
          <TableComponent data={listUserSearch} columns={columns} />
        ) : (
          <TableComponent data={filteredData} columns={columns} />
        )}
      </Loading>
      <ModalComponent
        title="Thêm học sinh"
        onCancel={handleCancel}
        isOpen={isModalAdd}
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
          initialValues={adduser}
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
            <Button
              className="bg-black cl text-white"
              onClick={handleAddSubmit}
            >
              Tạo mới
            </Button>
          </Form.Item>
        </Form>
      </ModalComponent>
      <ModalComponent
        title="Chỉnh sửa"
        isOpen={isModalEdit}
        onCancel={handleCancel}
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
          initialValues={edituser}
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
            <Button
              className="bg-black cl text-white"
              onClick={handleEditSubmit}
            >
              Thay đổi
            </Button>
          </Form.Item>
        </Form>
      </ModalComponent>
      <ModalComponent
        title="Xóa học sinh"
        isOpen={isModalDeleted}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        <span>Bạn có muốn chắc xóa học sinh này</span>

        <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
          <Button
            className="bg-black cl text-white"
            onClick={() => handleDeleteSubmit()}
          >
            Xóa
          </Button>
        </Form.Item>
      </ModalComponent>
    </div>
  );
}

export default StudentManage;
