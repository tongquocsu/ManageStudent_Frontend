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

function ScheduleComp() {
    return (
        <>
            <h2 className="m-4 text-base font-bold text-center">Thời khóa biểu HKI năm 2023</h2>
            <Table className="mx-5" columns={columns} dataSource={data} pagination={false}/>
        </>
    )
}

export default ScheduleComp;