import { Table } from "antd";
import Sidebar from "../../../../components/Sidebar";
const { Column } = Table;
const tableDate = [
  {
    key: "1",
    tiet: "1",
    thu2: "10C7",
    thu3: "6A",
  },
  {
    key: "2",
    tiet: "2",
    nameStudent: "Lê Thị Thu",
  },
  {
    key: "3",
    tiet: "3",
    nameStudent: "Trần Minh Tuấn",
  },
];
function ViewSchedule() {
  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4">
        <div>
          <h2 className="my-3 text-center font-bold font-sm text-[#515ddd]">
            Thời khóa biểu
          </h2>
          <Table
            dataSource={tableDate}
            pagnination={false}
            bordered
            className="border-1  rounded-lg border-[#515ddd]"
          >
            <Column className="text-center" title="Tiết" dataIndex="tiet" />
            <Column className="text-center" title="Thứ 2" dataIndex="thu2" />
            <Column className="text-center" title="Thứ 3" dataIndex="thu3" />
            <Column className="text-center" title="Thứ 4" dataIndex="thu4" />
            <Column className="text-center" title="Thứ 5" dataIndex="thu5" />
            <Column className="text-center" title="Thứ 6" dataIndex="thu6" />
            <Column className="text-center" title="Thứ 7" dataIndex="thu7" />
            <Column
              className="text-center"
              title="Chủ nhật"
              dataIndex="chunhat"
            />
          </Table>
        </div>
      </div>
    </div>
  );
}
export default ViewSchedule;
