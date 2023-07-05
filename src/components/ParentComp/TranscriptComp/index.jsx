import { Table } from 'antd';

const {Column} = Table
const data = [
    {
        key: '1',
        types: 'Danh hiệu',
        results: 'Chưa xét',
    },
    {
        key: '2',
        types: 'Điểm trung bình',
        results: 'Chưa xét',
    },
    {
        key: '3',
        types: 'Hạnh kiểm',
        results: 'Chưa xét',
    },
    {
        key: '4',
        types: 'Học lực',
        results: 'Chưa xét',
    },
    {
        key: '5',
        types: 'Xếp hạng',
        results: 'Chưa xét',
    },
];

const data1 = [];
for(let i = 0; i < 12; i++){
    data1.push(
        {
            key: '1',
            subject: "Ngữ Văn",
            oralTest: [10, 10, 9, 8],
            fifteenTest: 8,
            fourtyFiveTest: 7.5,
            semesterTest: 8,
            gpa: 8.7
        }
    ) 
}

function TranscriptComp() {
    return (
        <>
            <h2 className="m-4 text-base font-bold text-center">Kết quả học tập</h2>
            <div>
                <p className="m-4 text-sm text-center">Kết quả học tập của Nguyễn Thị Hà trong HK1, 2023 - 2024</p>
                <Table size="small" className="mx-[25px]" dataSource={data} pagination={false} bordered>
                    <Column className="w-1/3" title="Loại đánh giá" dataIndex="types" />
                    <Column title="Kết quả" dataIndex="results" />
                </Table>
            </div>

            <div className='mt-[50px]'>
                <p className="m-4 text-sm text-center">Bảng điểm HK1, 2023 - 2024</p>
                <Table size="small" className="mx-[25px]" dataSource={data1} pagination={false} bordered>
                    <Column className="" title="Môn học" dataIndex="subject" />
                    <Column title="Điểm miệng" dataIndex="oralTest" 
                    render={(value) => {
                        return value.join(" ");
                    }}
                    />
                    <Column title="Điểm 15 phút" dataIndex="fifteenTest"/>
                    <Column title="Điểm 1 tiết" dataIndex="fourtyFiveTest" />
                    <Column title="Thi HK" dataIndex="semesterTest" />
                    <Column title="ĐTB" dataIndex="gpa" />
                </Table>
            </div>
        </>
    )
}

export default TranscriptComp;