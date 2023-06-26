import {Table, Button} from 'antd';
import { useNavigate  } from 'react-router';

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
function index() {
  let navigate = useNavigate()
  const handleBackData = () =>{
    navigate('/teacher/classlist');
  }
  return (
    <div>
      <Table className="border-1 w-[780px] mt-6 rounded-lg border-[#515ddd]" dataSource={tableDate} pagnination={false} bordered>
        <Column className="text-center w-1/12" title="STT" dataIndex="STT"/> 
        <Column className="text-center w-4/12" title="Họ và Tên" dataIndex="nameStudent" />
        <Column className="text-center w-2/12" title="Điểm" dataIndex="score" />
        <Column className="text-center w-3/12" title="Loại điểm" dataIndex="typeScore" />
        <Column className="text-center w-2/12" title="Lưu thay đổi" dataIndex="edit" />
      </Table>
      <div className="grid justify-items-start mt-3">
        <Button type="primary" onClick={handleBackData} className="bg-[#515ddd]">Quay lại</Button>
      </div>
    </div>
    
  )
}

export default index
