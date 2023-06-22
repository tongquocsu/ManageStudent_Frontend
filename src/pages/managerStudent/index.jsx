
const manager_student = () => {
  return (
    <div className="">
        <h2 className="m-4 text-base font-bold text-center">Danh sách học sinh lớp</h2>
        <Table className="mx-5" columns={columns} dataSource={data} pagination={false}/>
    </div>
  )
}
import { Table } from "antd";

const columns = [
    {
        title: 'Thứ hai',
        dataIndex: 'subject',
        width: 140,
    },
    {
        title: 'Thứ ba',
        dataIndex: 'subject',
        width: 140,
    },
    {
        title: 'Thứ tư',
        dataIndex: 'subject',
        width: 140,
    },
    {
        title: 'Thứ năm',
        dataIndex: 'subject',
        width: 140,
    },
    {
        title: 'Thứ sáu',
        dataIndex: 'subject',
        width: 140,
    },
    {
        title: 'Thứ bảy',
        dataIndex: 'subject',
        width: 140,
    },
];

const data = [];
for(let i = 0; i < 5; i++){
    data.push({
        subject: 'Ngữ Văn',
    });
}


export default manager_student
