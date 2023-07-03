import {Table} from 'antd';
import {Link } from 'react-router-dom'

// constructor(props) {
//   super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
//   this.state = { //state is by default an object
//      students: [
//         { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
//         { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
//         { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
//         { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
//      ];
//   }
//   }
  const {Column} = Table  
  const dataSource = [
    {
      key: '1',
      stt: '1',
      name: <Link to="/teacher/managerClass">6A</Link>,
      score: <Link to="/teacher/inputScore"><i className="fa-solid fa-pencil"></i></Link>,
      sl: '24',
      GVCN: 'Ngô Minh Tuấn'
    },
    {
      key: '2',
      stt: '2',
      name:  <Link to="/quanlylop">6B</Link>,
      score:  <Link to="/teacher/inputScore"><i className="fa-solid fa-pencil"></i></Link>,
      sl: '40',
      GVCN: 'Hà Thị Minh Tuyết',
    },
    {
      key: '3',
      stt: '3',
      name:  <Link to="/quanlylop">6C</Link>,
      score: <i className="fa-solid fa-pencil"></i>,
      sl: '40',
      GVCN: 'Dương Văn Nam',
    },
   
  ];
  function index() {
    return (
      <div className="w-full"> 
        <h2 className="my-3 text-center font-bold font-sm text-[#515ddd]">Danh sách các lớp</h2>

          <Table dataSource={dataSource} pagnination={false} bordered 
            className="border-1 mt-6 rounded-lg border-[#515ddd] ">
            <Column className="text-center w-1/12" title="STT" dataIndex="stt" />
            <Column className="text-center w-2/12 text-[#515ddd]" title="Lớp" dataIndex="name" />
            <Column className="text-center w-2/12 text-[#ffef09]" title="Nhập điểm" dataIndex="score"/>
            <Column className="text-center" title="Sỉ số" dataIndex="sl"/>
            <Column className="text-center" title="GVCN" dataIndex="GVCN"/>
          </Table>
      </div>
    )
  }
  

export default index

