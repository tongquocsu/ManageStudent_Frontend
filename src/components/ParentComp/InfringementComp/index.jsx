import { Table } from 'antd';

const {Column} = Table
  const data = [
    {
      key: '1',
      day: '18-8-2022',
      infringement: 'Không thuộc bài Địa',
    },
];

function InfringementComp() {
    return (
        <>
            <h2 className="m-4 text-center text-base font-bold">Phản ánh vi phạm</h2>
            <Table className="mx-[25px]" dataSource={data} pagination={false} bordered>
                <Column className="w-1/3" title="Ngày" dataIndex="day" />
                <Column title="Vi phạm" dataIndex="infringement"/>
            </Table>
        </>
    )
}

export default InfringementComp;