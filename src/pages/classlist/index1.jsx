import {  EyeOutlined,DownOutlined} from '@ant-design/icons';
import TableComponent from "/src/components/teacherComp/TableItem";
import { Button, Form, Input } from "antd";
import { useEffect, useState } from "react";
import ModalComponent from "/src/components/teacherComp/ModalComponent";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import Loading from "/src/components/teacherComp/Loading";
import _ from "lodash";
import SearchInput from "/src/components/teacherComp/SearchInput";
function ClassManage() {
  const [listItemClass, setListItemClass] = useState([]);
  const [itemOption, setItemOption] = useState([]);
  const [selectedClass, setSelectedClass] = useState("10");
  const [isShowOption, setIsShownOption] = useState(false);
  const [Class, setClass] = useState("");
  const [room, setRoom] = useState("");
  const [grade, setGrade] = useState("");
  const formInstance = Form.useForm()[0];
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const renderAction = (text, classItem) => {
    return (
      <div>
        <EyeOutlined
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
       
      </div>
    );
  };
  const columns = [
    {
      title: "STT",
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
        Class: `${j}A${i + 1}`,
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
        
      </div>
      <Loading isLoading={isLoading}>
        {searchValue ? (
          <TableComponent data={searchResults} columns={columns} />
        ) : (
          <TableComponent data={filteredData} columns={columns} />
        )}
      </Loading>
      
  
      
    </div>
  );
}

export default ClassManage;