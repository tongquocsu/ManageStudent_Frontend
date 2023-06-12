import Sidebar from "../../../components/Sidebar";
import TableItem from "../../../components/TableItem";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
const ManagerUser = () => {
  const renderAction = () => {
    return (
      <div>
        <EditOutlined className="text-green-600 text-lg cursor-pointer border border-gray-400 rounded-md p-1" />
        <DeleteOutlined className="text-[#EC6453] text-lg cursor-pointer border border-gray-400 rounded-md p-1" />
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
      title: "SĐT",
      dataIndex: "phone",
    },
    {
      title: "Vai trò",
      dataIndex: "role",
    },
    {
      title: "Hành động",
      dataIndex: "action",
      render: renderAction,
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      fullname: ` ${i}`,
      email: `P ${i}`,
      phone: `10 A ${i}`,
      role: `P ${i}`,
    });
  }

  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4">
        <h1 className="text-gray-700 text-center">ManagerUser</h1>
        <TableItem data={data} columns={columns} />
      </div>
    </div>
  );
};

export default ManagerUser;
