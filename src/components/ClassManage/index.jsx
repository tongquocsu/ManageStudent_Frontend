import { DeleteOutlined, EditOutlined, DownOutlined } from "@ant-design/icons";
import TableComponent from "../TableItem";
import { Button, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import ModalComponent from "../ModalComponent";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import Loading from "../Loading";
import _ from "lodash";
import SearchInput from "../SearchInput";
import { getAllClassRedux } from "../../redux/action/classReducer";
import { useDispatch, useSelector } from "react-redux";
import { addClassApi } from "../../service/classService";
import { getAllSchoolRedux } from "../../redux/action/schoolAction";
import { Option } from "antd/es/mentions";
function ClassManage() {
  const [listItemClass, setListItemClass] = useState([]);
  const [itemOption, setItemOption] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
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
  const [deleteClass, setDeleteClass] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [optionSchool, setOptionSchool] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const dispatch = useDispatch();
  const tokenUser = useSelector((state) => state.user.account.token);
  const dataClass = useSelector((state) => state.class.ListClass);
  const isLoading = useSelector((state) => state.class.isLoading);
  const dataSchool = useSelector((state) => state.school.ListSchool);
  console.log(dataSchool);
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
  const getAllSchool = async () => {
    dispatch(getAllSchoolRedux(tokenUser));
  };
  useEffect(() => {
    getAllSchool();
  }, []);
  const getListClass = async () => {
    try {
      await dispatch(getAllClassRedux(tokenUser));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getListClass();
  }, [listItemClass]);

  useEffect(() => {
    setOptionSchool(dataSchool);
  }, []);

  const data = [];
  dataClass?.map((item) => {
    data.push({
      key: item._id,
      id: item._id,
      room: "",
      Class: item.name,
      grade: item.gradeLevel,
    });
  });

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
  const handleAddClass = (Class) => {
    setAddClass(Class);
    setIsModalAdd(true);
  };
  const handleAddSubmit = async () => {
    let sstItem = filteredData.length;
    const values = formInstance.getFieldsValue();
    console.log("checkvl", values)
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const newStudent = {
      id: generateUniqueId(),
      sst: sstItem + 1,
      name: values.Class,
      gradeLevel: values.grade,
      classYear: currentYear.toString(),
      classEnrollment: 50,
      school: values.school,
    };
    const res = await addClassApi(newStudent);
    console.log("checkađ", res);
    setListItemClass([...listItemClass, res]);
    setIsModalAdd(false);
    // setIsLoading(true);
    formInstance.resetFields();
    toast.success("Tạo học lớp thành công!");
    // setIsLoading(false);
  };
  const handleEditSubmit = () => {
    const values = formInstance.getFieldsValue();
    const cloneListClass = _.cloneDeep(listItemClass);
    const index = cloneListClass.findIndex((item) => item.id === editClass.id);

    if (index !== -1) {
      cloneListClass[index].room = values.room;
      cloneListClass[index].Class = values.Class;
      cloneListClass[index].grade = values.grade;
      cloneListClass[index].school = values.school;
      setListItemClass(cloneListClass);
      // setIsLoading(true);
      setIsModalEdit(false);
      toast.success("Cập nhật thành công");
      // setIsLoading(false);
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
      const updatedListClass = listItemClass.filter(
        (s) => s.id !== deleteClass.id
      );
      setListItemClass(updatedListClass);
      // setIsLoading(true);
      setIsModalDeleted(false);
      setDeleteClass(null);
      toast.success("Xóa thành công!");
      // setIsLoading(false);
    }
  };

  const filteredData = listItemClass.filter(
    (item) => item.grade === selectedClass
  );
  const handleSearch = (value) => {
    setSearchValue(value);
  };
  useEffect(() => {
    const filterSearch = filteredData.filter((item) => {
      const classText = item.Class.toLowerCase();
      const searchValueText = searchValue.toLowerCase();
      return classText.includes(searchValueText);
    });
    setSearchResults(filterSearch);
  }, [searchValue]);

  const handleSchoolChange = (value, item) => {
    setSelectedSchool({ id: value, name: item.children });
  };
  return (
    <div>
      <div className="flex items-center justify-between mx-10 my-2">
        <div className="relative">
          <div className="flex items-center">
            Khối: {selectedClass} <DownOutlined onClick={handletoggle} />
          </div>
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
        <SearchInput
          placeholder="Tìm kiếm theo lớp..."
          onSearch={handleSearch}
        />
        <Button className="bg-black text-white px-10" onClick={handleAddClass}>
          Tạo mới
        </Button>
      </div>
      <Loading isLoading={isLoading}>
        {searchValue ? (
          <TableComponent data={searchResults} columns={columns} />
        ) : (
          <TableComponent data={filteredData} columns={columns} />
        )}
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
          <Form.Item
            label="Trường"
            name="school"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
          >
            <Select value={selectedSchool?.id} onChange={handleSchoolChange}>
              {optionSchool.map((item, index) => (
                <Option key={index} value={item._id}>
                  {item.name}
                </Option>
              ))}
            </Select>
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
        <span>Bạn có muốn chắc xóa lớp này</span>

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
