import { Table } from 'antd';

const {Column} = Table
  const data = [
    {
      key: '1',
      stt: '1',
      feeName: 'Học phí',
      fee: 700000,
    },
    {
        key: '2',
        stt: '2',
        feeName: 'Các khoản phí khác',
        fee: 650000,
    },
];

function SchoolFeeComp() {
    let total = 0;
    data.forEach(item => {
        total = total + item.fee
    });

    const NFTotal = new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(total);
    
    return(
        <>
            <h2 className="m-4 text-center text-base font-bold">Thông tin học phí</h2>
            <Table className="mx-[25px]" dataSource={data} pagination={false} bordered>
                <Column title="Các khoản phí" dataIndex="feeName" />
                <Column
                title="Số tiền/ Học kỳ"
                dataIndex="fee"
                render={(value) => {
                    return value.toLocaleString("vn");
                }}
                />
            </Table>
            <div className="m-[25px]">
                <div className='flex justify-between text-sm'>
                    <p>Tổng tiền học phí</p>
                    <p>{NFTotal}</p>
                </div>
                <div className="my-2 border-b-[1px] border-solid border-gray-800"></div>
            </div>
            <div className='absolute right-0 mr-[25px]'>
                <button className='bg-black text-white p-2 text-sm'>Đóng học phí</button>
            </div>
        </>
    )
}

export default SchoolFeeComp;