import {Table} from 'antd';
import {Link } from 'react-router-dom';

const {Column} = Table  
const tableDate = [
  {
    key: '1',
    STT: '1',
    nameStudent: 'Trịnh Nhã An',
    schoolProfile: <Link to="/inputScore"><i className="fa-solid fa-pencil text-[#00ff00]"></i></Link>,
    evaluate: <Link to="/teacher/studentAssessment"><i className="fa-solid fa-pencil text-[#00ff00]"></i></Link>,
    status: <Link to="/inputScore"><i className="fa-solid fa-pencil text-[#00ff00]"></i></Link>,
    information: <Link to="/inputScore"><i className="fa-solid fa-eye text-[#00ff00]"></i></Link>,
    edit: <Link to="/inputScore"><i className="fa-solid fa-trash text-[#ff0000]"></i></Link>,
  },
  {
    key: '2',
    STT: '2',
    nameStudent: 'Lê Thị Thu',
    schoolProfile: <Link to="/inputScore"><i className="fa-solid fa-pencil text-[#00ff00]"></i></Link>,
    evaluate: <Link to="/inputScore"><i className="fa-solid fa-pencil text-[#00ff00]"></i></Link>,
    status: <Link to="/inputScore"><i className="fa-solid fa-pencil text-[#00ff00]"></i></Link>,
    information: <Link to="/inputScore"><i className="fa-solid fa-eye text-[#00ff00]"></i></Link>,
    edit: <Link to="/inputScore"><i className="fa-solid fa-trash text-[#ff0000]"></i></Link>,
  },
  {
    key: '3',
    STT: '3',
    nameStudent: 'Trần Minh Tuấn',
    schoolProfile: <Link to="/inputScore"><i className="fa-solid fa-pencil text-[#00ff00]"></i></Link>,
    evaluate: <Link to="/inputScore"><i className="fa-solid fa-pencil text-[#00ff00]"></i></Link>,
    status: <Link to="/inputScore"><i className="fa-solid fa-pencil text-[#00ff00]"></i></Link>,
    information: <Link to="/inputScore"><i className="fa-solid fa-eye text-[#00ff00]"></i></Link>,
    edit: <Link to="/inputScore"><i className="fa-solid fa-trash text-[#ff0000]"></i></Link>,
  },
];

function index() {
  return (
    <div>
      <div className="grid grid-rows-1 my-4 pl-3 ">
        <div className="grid-cols-4 flex">
          <p className=" mr-8">Lớp: ...</p>
          <p className="text-[#000] font-bold flex-none w-[450px]">Sỉ số: ....</p>
          <button className="flex-auto border border-1 py-1 rounded-lg bg-[#515ddd] text-[#fff] mr-3"><Link to="/inputScore">Nhập điểm</Link></button>
          <button className="flex-auto border border-1 rounded-lg bg-[#515ddd] text-[#fff] mr-3"><Link to="/inputScore">Gửi Thư mời</Link></button>
        </div>
      </div>
      <Table dataSource={tableDate} pagnination={false} bordered>
        <Column className="text-center" title="STT" dataIndex="STT"/> 
        <Column className="text-center" title="Họ và Tên" dataIndex="nameStudent" />
        <Column className="text-center" title="Học bạ" dataIndex="schoolProfile" />
        <Column className="text-center" title="Đánh giá" dataIndex="evaluate" />
        <Column className="text-center" title="Trạng thái" dataIndex="status" />
        <Column className="text-center" title="Thông tin cá nhân" dataIndex="information" />
        <Column className="text-center" dataIndex="edit" />
      </Table>
    </div>
  )
}

export default index
