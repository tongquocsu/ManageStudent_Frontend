import {Table} from 'antd';

const {Column} = Table  
const tableDate = [
  {
    key: '1',
    STT: '1',
    nameStudent: 'Trịnh Nhã An',
    score: '5',
    typeScore: 'Điểm 15p',
    edit: <i className="fa-solid fa-floppy-disk text-[#ffff00]"></i>,
  },
  {
    key: '2',
    STT: '2',
    nameStudent: 'Trần Minh Tuấn',
    score: '9',
    typeScore: 'Điểm 15p',
    edit: <i className="fa-solid fa-floppy-disk text-[#ffff00]"></i>,
  },
  {
    key: '3',
    STT: '3',
    nameStudent: 'Trần Minh Anh',
    score: '6.5',
    typeScore: 'Điểm 15p',
    edit: <i className="fa-solid fa-floppy-disk text-[#ffff00]"></i>,
  },
];


const inputScore = () => {
  return (
    <div >
    
      <Table className="border-1 mt-6 rounded-lg border-[#515ddd]" dataSource={tableDate} pagnination={false} bordered>
        <Column className="text-center" title="STT" dataIndex="STT"/> 
        <Column className="text-center" title="Họ và Tên" dataIndex="nameStudent" />
        <Column className="text-center" title="Điểm" dataIndex="score" />
        <Column className="text-center" title="Loại điểm" dataIndex="typeScore" />
        <Column className="text-center" title="Lưu thay đổi" dataIndex="edit" />
      </Table>
    </div>
    
  )
}

export default inputScore
