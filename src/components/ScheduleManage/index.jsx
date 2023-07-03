import {
  DownOutlined,
  EyeOutlined,
  EditOutlined,
} from "@ant-design/icons";
import TableComponent from "../TableItem";
import ModalComponent from "../ModalComponent";
import { useEffect, useState } from "react";
import { Button, Form, Input, Select, Table } from "antd";
import Loading from "../Loading";
import _ from "lodash";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import DrawerComponent from "../Drawer";
import SearchInput from "../SearchInput";

function SchuduleManage() {
  const [listItemSchedule, setListItemSchedule] = useState([]);
  const [itemOption, setItemOption] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState(" ");
  const [isShowOption, setIsShownOption] = useState(false);
  const [isShowOptionWeek, setIsShownOptionWeek] = useState(false);
  const [Schedule, setSchedule] = useState("");
  const [grade, setGrade] = useState("");
  const [weekItem, setWeekItem] = useState("");
  const [optionClass, setOptionClass] = useState([]);
  const [gradeOptions, setGradeOptions] = useState([]);
  const [listSchudules, setListSchudules] = useState([]);
  const formInstance = Form.useForm()[0];
  const [isModalAdd, setIsModalAdd] = useState(false);
  const [addSchedule, setAddSchedule] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSchudule, setIsSchedule] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [listDataFilterGrade, setListDataFilterGrade] = useState([]);
  const [week, setWeek] = useState(" ");
  const [listDatafilters, setListDataFilters] = useState([]);
  const [isEditSubjectDrawer, setIsEditSubjectDrawer] = useState(false);
  const [editSubjectDrawer, setEditSubjectDrawer] = useState(null);
  const [subject, setSubject] = useState("");
  const [teacher, setTeacher] = useState("");
  const [lesson, setLesson] = useState("");
  const [optionsSubject, setOptionsSubject] = useState([]);
  const renderAction = (text, scheduleItem) => {
    return (
      <div>
        <EyeOutlined
          style={{
            color: "#ccc",
            fontSize: "30px",
            cursor: "pointer",
            padding: "4px 0px 4px 20px",
          }}
          onClick={() => handleSeeMore(scheduleItem)}
        />
      </div>
    );
  };
  const renderActionDrawer = (text, action) => {
    return (
      <div className="flex items-center">
        <EditOutlined
          style={{
            color: "#539E53",
            fontSize: "30px",
            cursor: "pointer",
            border: "1px solid #737373",
            borderRadius: "5px",
            padding: "4px",
            marginLeft: "10px"
          }}
          onClick={() => handleEdit(action)}
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
      title: "Lớp học",
      dataIndex: "Class",
      sorter: (a, b) => a.Class.localeCompare(b.Class),
    },
    { title: "Khối", dataIndex: "grade" },
    {
      title: "Trạng thái",
      dataIndex: "status",
    },
    {
      title: "Hành Động",
      dataIndex: "action",
      render: renderAction,
    },
  ];
  const columnTable = [
    {
      title: "Thứ",
      dataIndex: "day",
    },
    {
      title: "Môn",
      dataIndex: "subject",
    },
    {
      title: "Giáo viên",
      dataIndex: "teacher",
    },
    {
      title: "Tiết học",
      dataIndex: "lesson",
    },
    {
      title: "Hành Động",
      dataIndex: "action",
      render: renderActionDrawer,
    },
  ];
  const dataTable = [
    {
      key: "1",
      id: "1",
      day: "Thứ 2",
      subject: "Toán",
      teacher: "Nguyễn Văn A",
      lesson: "Tiết 1-2",
    },
    {
      key: "2",
      id: "2",
      day: "Thứ 3",
      subject: "Lý",
      teacher: "Trần Thị B",
      lesson: "Tiết 3-4",
    },
    {
      key: "3",
      id: "3",
      day: "Thứ 4",
      subject: "Hóa",
      teacher: "Phạm Văn C",
      lesson: "Tiết 5-6",
    },
    {
      key: "4",
      id: "4",
      day: "Thứ 5",
      subject: "Sinh",
      teacher: "Phạm Văn D",
      lesson: "Tiết 5-6",
    },
    {
      key: "5",
      id: "5",
      day: "Thứ 6",
      subject: "Sử",
      teacher: "Phạm Văn E",
      lesson: "Tiết 5-6",
    },
    {
      key: "6",
      id: "6",
      day: "Thứ 7",
      subject: "Địa",
      teacher: "Phạm Văn F",
      lesson: "Tiết 5-6",
    },
  ];
  const data = [];
  const numberOfWeeks = 3;
  for (let week = 1; week <= numberOfWeeks; week++) {
    for (let i = 0; i < 10; i++) {
      for (let j = 10; j < 13; j++) {
        data.push({
          key: `${i}`,
          id: `${i}`,
          week: `${week}`,
          grade: `${j}`,
          Class: `${j}A${i + 1}`,
          status: "Scheduled",
        });
      }
    }
  }
  const uniqueSchedulees = [...new Set(data.map((item) => item.grade))];

  const menuItems = uniqueSchedulees.map((scheduleItem, index) => ({
    key: `option${index + 1}`,
    title: scheduleItem,
  }));

  useEffect(() => {
    setItemOption(menuItems);
  }, []);
  useEffect(() => {
    setListItemSchedule(data);
  }, []);
  useEffect(() => {
    setItemOption(menuItems);
    setGradeOptions(menuItems.map((item) => item.title));
  }, []);
  const handletoggle = () => {
    setIsShownOption(!isShowOption);
  };
  const handletoggleWeek = () => {
    setIsShownOptionWeek(!isShowOptionWeek);
  };

  const handleCancel = () => {
    setIsModalAdd(false);
    setIsSchedule(false);
  };
  const handleCancelDrawer = () => {
    setIsEditSubjectDrawer(false);
  };

  const handleMenuClick = (e, title) => {
    e.stopPropagation();
    setSelectedSchedule(title);
    setIsShownOption(false);
  };
  const handleMenuClickWeek = (e, title) => {
    e.stopPropagation();
    setWeek(title);
    setIsShownOptionWeek(false);
  };
  const generateUniqueId = () => {
    return uuidv4();
  };
  const handleAddSchedule = (Schedule) => {
    setAddSchedule(Schedule);
    setIsModalAdd(true);
  };

  const handleAddSubmit = () => {
    let sstItem = listDataFilterGrade.length;
    const values = formInstance.getFieldsValue();
    const newClass = {
      id: generateUniqueId(),
      sst: sstItem + 1,
      grade: values.grade,
      week: values.week,
      Class: values.class,
      Schedule: values.Schedule,
    };
    setListItemSchedule([...listItemSchedule, newClass]);
    setIsModalAdd(false);
    setIsLoading(true);
    formInstance.resetFields();
    toast.success("Tạo lớp thành công!");
    setIsLoading(false);
  };

  useEffect(() => {
    const filteredDataByGrade = listItemSchedule.filter(
      (item) => item.grade === selectedSchedule
    );
    setListDataFilterGrade(filteredDataByGrade);
  }, [selectedSchedule]);

  const listWeeks = listDataFilterGrade.reduce((weeks, item) => {
    if (!weeks.includes(item.week)) {
      weeks.push(item.week);
    }
    return weeks;
  }, []);

  useEffect(() => {
    if (listDataFilterGrade.length > 0) {
      const filteredDataByWeek = listDataFilterGrade.filter(
        (item) => item.week === week
      );
      setListDataFilters(filteredDataByWeek);
    }
  }, [week, listDataFilterGrade]);
  const handleSeeMore = (scheduleItem) => {
    console.log(scheduleItem);
    setIsSchedule(true);
    setOptionClass(scheduleItem);
  };
  useEffect(() => {
    const filteredData = dataTable.filter((item) => {
      return data.some((dataItem) => dataItem.key === item.key);
    });
    setListSchudules(filteredData);
  }, [searchValue]);
  const handleSearch = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    const filterSearch = listDatafilters.filter((item) => {
      const classText = item.Class.toLowerCase();
      const searchValueText = searchValue.toLowerCase();
      return classText.includes(searchValueText);
    });
    setSearchResults(filterSearch);
  }, [searchValue]);

  const handleEdit = (action) => {
    setEditSubjectDrawer(action);
    setIsEditSubjectDrawer(true);
  };
  const handleEditDrawer = () => {
    const values = formInstance.getFieldsValue();
    const cloneListSubject = _.cloneDeep(listSchudules);
    const index = cloneListSubject.findIndex(
      (item) => item.id === editSubjectDrawer.id
    );
  
    if (index !== -1) {
      cloneListSubject[index].subject = values.subject;
      cloneListSubject[index].teacher = values.teacher;
      cloneListSubject[index].lesson = values.lesson;
      setListSchudules(cloneListSubject);
      setIsLoading(true);
      toast.success("Cập nhật thành công");
      setIsEditSubjectDrawer(false)
      setIsLoading(false);
    }
  };
  useEffect(() => {
    let listOptions = dataTable.map((item) => ({
      value: item.subject,
      label: item.subject,
    }));
    setOptionsSubject(listOptions);
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between mx-10 my-2">
        <div className="flex">
          <div className="relative">
            <div className="flex items-center">
              {" "}
              Khối: {selectedSchedule}{" "}
              <DownOutlined className="ml-2" onClick={handletoggle} />
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
          <div className="ml-8 relative">
            <div className="flex items-center">
              {" "}
              Tuần {week}{" "}
              <DownOutlined className="ml-2" onClick={handletoggleWeek} />
            </div>
            {isShowOptionWeek && (
              <ul
                className="absolute z-10 bg-white text-center rounded-sm w-[100px] shadow min-h-[120px] overflow-y-auto"
                style={{ padding: "0px" }}
              >
                {listWeeks.map((item) => (
                  <li
                    className="hover:bg-[#ccc] cursor-pointer flex items-center justify-center"
                    key={item}
                    onClick={(e) => handleMenuClickWeek(e, item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <SearchInput placeholder="Tìm kiếm theo lớp" onSearch={handleSearch} />
        <Button
          className="bg-black text-white px-10"
          onClick={handleAddSchedule}
        >
          Tạo mới
        </Button>
      </div>

      <Loading isLoading={isLoading}>
        {searchValue ? (
          <TableComponent data={searchResults} columns={columns} />
        ) : (
          <TableComponent data={listDatafilters} columns={columns} />
        )}
      </Loading>
      <ModalComponent
        title="Thêm lớp học"
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
          initialValues={addSchedule}
          autoComplete="off"
        >
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
            <Select value={grade} onChange={(value) => setGrade(value)}>
              {gradeOptions.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Tuần học"
            name="week"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
          >
            <Input value={weekItem} onChange={(value) => setWeekItem(value)} />
          </Form.Item>
          <Form.Item
            label="Lớp"
            name="class"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
          >
            <Input
              value={Schedule}
              onChange={(e) => setSchedule(e.target.value)}
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
      <DrawerComponent isOpen={isSchudule} onClose={handleCancel} width="82%">
        <div className="flex justify-between">
          <h5>Lớp: {optionClass.Class}</h5>
          <h5>Tuần {week}</h5>
        </div>
        <Table dataSource={listSchudules} columns={columnTable} />
      </DrawerComponent>
      <ModalComponent
        title="Điều chỉnh thời khóa biểu"
        isOpen={isEditSubjectDrawer}
        onCancel={handleCancelDrawer}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
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
          initialValues={editSubjectDrawer}
          autoComplete="off"
        >
        <Form.Item
        label="Thứ"
        name="day"
        >
      <Input disabled/>
        </Form.Item>
          <Form.Item
            label="Môn"
            name="subject"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
          >
          <Select
          value={subject}
          onChange={(value) => setSubject(value)}
          options={optionsSubject}
        />
          </Form.Item>
          <Form.Item
            label="Giáo viên"
            name="teacher"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
          >
            <Input
              value={teacher}
              onChange={(e) => setTeacher(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Tiết học"
            name="lesson"
            rules={[
              {
                required: true,
                message: "Không được để trống!",
              },
            ]}
          >
            <Input value={lesson} onChange={(e) => setLesson(e.target.value)} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
            <Button
              className="bg-black cl text-white"
              onClick={handleEditDrawer}
            >
             Thay đổi
            </Button>
          </Form.Item>
        </Form>
      </ModalComponent>
    </div>
  );
}

export default SchuduleManage;
