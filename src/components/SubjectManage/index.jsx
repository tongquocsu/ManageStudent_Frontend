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
function SubjectManage() {
  const [listItemSubject, setListItemSubject] = useState([]);
  const [itemOption, setItemOption] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("10");
  const [isShowOption, setIsShownOption] = useState(false);
  const [Subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [editSubject, setEditSubject] = useState(null);
  const formInstance = Form.useForm()[0];
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [isModalAdd, setIsModalAdd] = useState(false);
  const [isModalDeleted, setIsModalDeleted] = useState(false);
  const [addSubject, setAddSubject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteSubject, setDeleteSubject] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [listSearchClass, setListSearchClass] = useState([]);
  const renderAction = (text, SubjectItem) => {
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
          onClick={() => handleEdit(SubjectItem)}
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
          onClick={() => handleDelete(SubjectItem)}
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
      title: "Môn học",
      dataIndex: "Subject",
      sorter: (a, b) => a.Subject.localeCompare(b.Subject),
    },
    { title: "Khối", dataIndex: "grade" },
    {
      title: "Hành Động",
      dataIndex: "action",
      render: renderAction,
    },
  ];

  const data = [];
  const subjects = ["Toán", "Lý", "Hóa"];

  for (let i = 0; i < subjects.length; i++) {
    for (let j = 10; j < 13; j++) {
      data.push({
        key: `${i}+${j}`,
        id: `${i}`,
        Subject: `${subjects[i]}`,
        grade: `${j}`,
      });
    }
  }

  const uniqueSubjectes = [...new Set(data.map((item) => item.grade))];

  const menuItems = uniqueSubjectes.map((SubjectItem, index) => ({
    key: `option${index + 1}`,
    title: SubjectItem,
  }));

  useEffect(() => {
    setItemOption(menuItems);
  }, []);
  useEffect(() => {
    setListItemSubject(data);
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
    setSelectedSubject(title);
    setIsShownOption(false);
  };
  const generateUniqueId = () => {
    return uuidv4();
  };
  const handleAddSubject = (Subject) => {
    console.log(Subject);
    setAddSubject(Subject);
    setIsModalAdd(true);
  };

  const handleAddSubmit = () => {
    let sstItem = filteredData.length;
    const values = formInstance.getFieldsValue();
    const newStudent = {
      id: generateUniqueId(),
      sst: sstItem + 1,
      room: values.room,
      Subject: values.Subject,
      grade: values.grade,
    };
    setListItemSubject([...listItemSubject, newStudent]);
    setIsModalAdd(false);
    setIsLoading(true);
    formInstance.resetFields();
    toast.success("Tạo học sinh thành công!");
    setIsLoading(false);
  };
  const handleEditSubmit = () => {
    const values = formInstance.getFieldsValue();
    const cloneListSubject = _.cloneDeep(listItemSubject);
    const index = cloneListSubject.findIndex(
      (item) => item.id === editSubject.id
    );

    if (index !== -1) {
      cloneListSubject[index].Subject = values.Subject;
      cloneListSubject[index].grade = values.grade;
      setListItemSubject(cloneListSubject);
      setIsLoading(true);
      setIsModalEdit(false);
      toast.success("Cập nhật thành công");
      setIsLoading(false);
      formInstance.resetFields();
    }
  };
  const handleEdit = (SubjectItem) => {
    console.log(SubjectItem);
    setEditSubject(SubjectItem);
    setIsModalEdit(true);
  };
  const handleDelete = (SubjectItem) => {
    setIsModalDeleted(true);
    setDeleteSubject(SubjectItem);
  };
  const handleDeleteSubmit = () => {
    if (deleteSubject) {
      const updatedListSubject = listItemSubject.filter(
        (s) => s.id !== deleteSubject.id
      );
      setListItemSubject(updatedListSubject);
      setIsLoading(true);
      setIsModalDeleted(false);
      setDeleteSubject(null);
      toast.success("Xóa thành công!");
      setIsLoading(false);
    }
  };

  const filteredData = listItemSubject.filter(
    (item) => item.grade === selectedSubject
  );
  const handleSearch = (value) => {
    setSearchValue(value);
  };
  useEffect(() => {
    const filterSearch = filteredData.filter((item) => {
      console.log(item);
      const classText = item.Subject.toLowerCase();
      const searchValueText = searchValue.toLowerCase();
      return classText.includes(searchValueText);
    });
    setListSearchClass(filterSearch);
  }, [searchValue]);
  return (
    <div>
      <div className="flex items-center justify-between mx-10 my-2">
        <div className="relative">
          <div className="flex items-center">
            {" "}
            Khối: {selectedSubject} <DownOutlined onClick={handletoggle} />
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
          placeholder="Tìm kiếm theo môn học"
          onSearch={handleSearch}
        />
        <Button
          className="bg-black text-white px-10"
          onClick={handleAddSubject}
        >
          Tạo mới
        </Button>
      </div>
      <Loading isLoading={isLoading}>
        {searchValue ? (
          <TableComponent data={listSearchClass} columns={columns} />
        ) : (
          <TableComponent data={filteredData} columns={columns} />
        )}
      </Loading>
      <ModalComponent
        title="Thêm môn học"
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
          initialValues={addSubject}
          autoComplete="off"
        >
          <Form.Item
            label="Môn học"
            name="Subject"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
          >
            <Input
              value={Subject}
              onChange={(e) => setSubject(e.target.value)}
            />
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
        title="Thay đổi môn học"
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
          initialValues={editSubject}
          autoComplete="off"
        >
          <Form.Item
            label="Môn học"
            name="Subject"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
          >
            <Input
              value={subjects}
              onChange={(e) => setSubject(e.target.value)}
            />
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
        title="Xóa môn học"
        isOpen={isModalDeleted}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
      >
        <span>Bạn có muốn chắc môn học này</span>

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

export default SubjectManage;
