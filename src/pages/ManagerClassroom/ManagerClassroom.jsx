import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import TableComponent from "../../components/TableItem/TableItem";
import Sidebar, { getItem } from "../../components/Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
const renderAction = () => {
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
    title: "Room",
    dataIndex: "room",
  },
  {
    title: "Class",
    dataIndex: "class",
  },
  {
    title: "Action",
    dataIndex: "action",
    render: renderAction,
  },
];
const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    id: ` ${i}`,
    room: `P ${i}`,
    class: `10 A ${i}`,
  });
}

const itemsTop = [
  getItem("Quản lý học vụ", "sub1", <FontAwesomeIcon icon="user" />),
  getItem("Học Sinh", "sub2", <FontAwesomeIcon icon="chalkboard-user" />),
  getItem("Thời Khóa Biểu", "sub3", <FontAwesomeIcon icon="user-pen" />),
  getItem("Lớp Học", "sub4"),
  getItem("Môn Học", "sub5"),
];
const itemsBottom = [
  getItem("Cài đặt", "sub5", <FontAwesomeIcon icon="gear" />),
  getItem("Đăng xuất", "sub6", <FontAwesomeIcon icon="right-to-bracket" />),
];

function ManagerClassroom() {
  const navigate = useNavigate();
  const handleMenuClick = (key) => {
    // Xử lý chuyển hướng tới menu tương ứng
    switch (key) {
      case "sub1":
        navigate("/manager-user");
        break;
      // teacher routes
      case "sub2":
        navigate("/manager-user");
        break;
      case "sub3":
        navigate("/manager-user");
        break;
      case "sub4":
        navigate("/manager-user");
        break;
      case "sub5":
        navigate("/manager-user");
        break;
      // Thêm các trường hợp khác tương ứng với menu của bạn
      default:
        break;
    }
  };
  return (
    <div className="flex">
      <div className="w-2/10">
        <Sidebar
          itemsTop={itemsTop}
          itemsBottom={itemsBottom}
          handleMenuClick={handleMenuClick}
        />
      </div>
      <div className="w-8/10 flex-grow">
        <TableComponent data={data} columns={columns} />
      </div>
    </div>
  );
}
export default ManagerClassroom;
