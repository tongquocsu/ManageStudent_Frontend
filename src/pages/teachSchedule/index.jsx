import { Table } from "antd";
import {Link } from 'react-router-dom';
import { DownOutlined, FilterOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


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
const items = [
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Tuần này
        </a>
      ),
      key: '0',
    },
    {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            Tuần trước
          </a>
        ),
        key: '1',
      },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Tuần sau
        </a>
      ),
      key: '2',
    },
    {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            Tháng sau
          </a>
        ),
        key: '3',
      },
    {
      type: 'divider',
    },
    {
      label: 'HK sau',
      key: '3',
      disabled: true,
    },
  ];

function Schedule() {
    return (
        <div>
            <div>
                <Dropdown menu={{ items, }}>
                    <a onClick={(e) => e.preventDefault()}>
                    <Space className="font-sans mt-3 ml-[60px] border-1 px-3 py-1 rounded-[10px] bg-[#515ddd] text-white">
                         Bộ Lọc
                         <FilterOutlined className="top-[20px]" />
                    </Space>
                    </a>
                </Dropdown>
            </div>
            <div className="flex">
                <div className="grid justify-items-center">
                    <h2 className="lg:text-base md:text-base sm:text-sm font-bold text-center my-3 text-[#515ddd]">Thời khóa biểu HKI năm 2023</h2>
                    <Table columns={columns} dataSource={data} pagination={false} bordered/>
                </div>
            </div>
        </div>
    )
}
export default Schedule;