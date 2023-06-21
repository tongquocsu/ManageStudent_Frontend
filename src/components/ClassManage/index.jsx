import { DeleteOutlined, EditOutlined, DownOutlined } from "@ant-design/icons";
import TableComponent from "../TableItem";
import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import ModalComponent from "../ModalComponent";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import Loading from "../Loading";
import _ from "lodash";
function ClassManage() {
  const [listItemClass, setListItemClass] = useState([]);
  const [itemOption, setItemOption] = useState([]);
  const [selectedClass, setSelectedClass] = useState("10");
  const [isShowOption, setIsShownOption] = useState(false);
  const [Class, setClass] = useState("");
  const [room, setRoom] = useState("");
  const [grade, setGrade] = useState("");
  const [editClass, setEditClass] = useState(null);
  const formInstance = Form.useForm()[0];
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [isModalAdd, setIsModalAdd] = useState(false);
  const [isModalDeleted, setIsModalDeleted] = useState(false);
  const [addClass, setAddClass] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteClass, setDeleteClass] = useState(null);
  const renderAction = (text, classItem) => {
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
          onClick={() => handleEdit(classItem)}
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
          onClick={() => handleDelete(classItem)}
        />
      </div>
    );
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Phòng ",
      dataIndex: "room",
      sorter: (a, b) => a.room.localeCompare(b.room),
    },
    {
      title: "Lớp",
      dataIndex: "Class",
      sorter: (a, b) => a.Class.localeCompare(b.Class),
    },
    { title: "Khối", dataIndex: "grade" },
    {
      title: "Hành Động",
      dataIndex: "action",
      render: renderAction,
    },
  ];

const data = [];
const usedRooms = [];

for (let i = 0; i < 10; i++) {
  for (let j = 10; j < 13; j++) {
    let room = ""; 
    for (let k = 0; k < i + 1; k++) {
      if (!usedRooms.includes(`P${k}`)) {
        room = `P${k}`;
        usedRooms.push(room);
        break;
      }
    }
    data.push({
      key: `${i}+${j}`,
      id: `${i}`,
      room: room,
      Class: `10A${j}`,
      grade: `${j}`,
    });
  }
}

  const uniqueClasses = [...new Set(data.map((item) => item.grade))];

  const menuItems = uniqueClasses.map((classItem, index) => ({
    key: `option${index + 1}`,
    title: classItem,
  }));

  useEffect(() => {
    setItemOption(menuItems);
  }, []);
  useEffect(() => {
    setListItemClass(data);
  }, []);
  const handletoggle = () => {
    setIsShownOption(!isShowOption);
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
  const handleAddClass = (user) => {
    console.log(user);
    setAddClass(user);
    setIsModalAdd(true);
  };

  const handleAddSubmit = () => {
    let sstItem = filteredData.length;
    const values = formInstance.getFieldsValue();
    const newStudent = {
      id: generateUniqueId(),
      sst: sstItem + 1,
      room: values.room,
      Class: values.Class,
      grade: values.grade,
    };
    setListItemClass([...listItemClass, newStudent]);
    setIsModalAdd(false);
    setIsLoading(true);
    formInstance.resetFields();
    toast.success("Tạo học sinh thành công!");
    setIsLoading(false);
  };
  const handleEditSubmit = () => {
    const values = formInstance.getFieldsValue();
    const cloneListUser = _.cloneDeep(listItemClass);
    const index = cloneListUser.findIndex((item) => item.id === editClass.id);

    if (index !== -1) {
      cloneListUser[index].fullName = values.fullName;
      cloneListUser[index].Class = values.Class;
      cloneListUser[index].gender = values.gender;
      cloneListUser[index].dateOfBirth = values.dateOfBirth;
      cloneListUser[index].address = values.address;
      setListItemClass(cloneListUser);
      setIsLoading(true);
      setIsModalEdit(false);
      toast.success("Cập nhật thành công");
      setIsLoading(false);
      formInstance.resetFields();
    }
  };
  const handleEdit = (classItem) => {
    console.log(classItem);
    setEditClass(classItem);
    setIsModalEdit(true);
  };
  const handleDelete = (classItem) => {
    setIsModalDeleted(true);
    setDeleteClass(classItem);
  };
  const handleDeleteSubmit = () => {
    if (deleteClass) {
      const updatedListUser = listItemClass.filter(
        (s) => s.id !== deleteClass.id
      );
      setListItemClass(updatedListUser);
      setIsLoading(true);
      setIsModalDeleted(false);
      setDeleteClass(null);
      toast.success("Xóa thành công!");
      setIsLoading(false);
    }
  };

  const filteredData = listItemClass.filter(
    (item) => item.grade === selectedClass
  );

  return (
    <div>
      <div className="flex items-center justify-between mx-10 my-2">
        <div className="relative">
          Khối: {selectedClass} <DownOutlined onClick={handletoggle} />
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
        <Button className="bg-black text-white px-10" onClick={handleAddClass}>
          Tạo mới
        </Button>
      </div>
      <Loading isLoading={isLoading}>
        <TableComponent data={filteredData} columns={columns} />
      </Loading>
      <ModalComponent
        title="Thêm lớp"
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
          initialValues={addClass}
          autoComplete="off"
        >
          <Form.Item
            label="Phòng"
            name="room"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
          >
            <Input value={room} onChange={(e) => setRoom(e.target.value)} />
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
            label="Khối"
            name="grade"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
          >
            <Input value={grade} onChange={(e) => setGrade(e.target.value)} />
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
        title="Thay đổi lớp học"
        onCancel={handleCancel}
        isOpen={isModalEdit}
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
          initialValues={editClass}
          autoComplete="off"
        >
          <Form.Item
            label="Phòng"
            name="room"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
          >
            <Input value={room} onChange={(e) => setRoom(e.target.value)} />
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
            label="Khối"
            name="grade"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
          >
            <Input value={grade} onChange={(e) => setGrade(e.target.value)} />
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

export default ClassManage;
