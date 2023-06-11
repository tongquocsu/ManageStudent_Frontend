
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import TableComponent from "../../components/Table/TableComponent";

const renderAction = () => {
  return (
    <div>
      <EditOutlined className="mx-2"
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

function ManagerClassroom() {
  return (
    <div>
      <TableComponent
      data={data}
      columns ={columns}

      />
    </div>
  );
}
export default ManagerClassroom;
