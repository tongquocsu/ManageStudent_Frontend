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

function Schedule() {
    return (
        <div>
            <div className="flex">
                <div className="grid justify-items-center">
                    <h2 className="text-base font-bold text-center my-3">Thời khóa biểu HKI năm 2023</h2>
                    <Table className="mx-5" columns={columns} dataSource={data} pagination={false}/>
                </div>
            </div>
        </div>
    )
}

        

export default Schedule;