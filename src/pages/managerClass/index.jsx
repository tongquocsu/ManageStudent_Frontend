import React, { useState, useEffect } from "react";
import { useNavigate  } from 'react-router';
import {Link } from 'react-router-dom';
import {Table ,Button } from 'antd';
import env from '/env.json';
import axios from "axios";
import { useParams } from "react-router-dom";

const {Column} = Table  
const tableDate = [
  {
    key: '1',
    STT: '1',
    nameStudent: 'Trịnh Nhã An',
    schoolProfile: <Link to="/inputScore"><i className="fa-solid fa-pencil text-[#00ff00]"></i></Link>,
    evaluate: <Link to="/teacher/studentAssessment"><i className="fa-solid fa-pencil text-[#00ff00]"></i></Link>,
    status: <Link to="/inputScore"><i className="fa-solid fa-pencil text-[#00ff00]"></i></Link>,
  },
  {
    key: '2',
    STT: '2',
    nameStudent: 'Lê Thị Thu',
    schoolProfile: <Link to="/inputScore"><i className="fa-solid fa-pencil text-[#00ff00]"></i></Link>,
    evaluate: <Link to="/inputScore"><i className="fa-solid fa-pencil text-[#00ff00]"></i></Link>,
    status: <Link to="/inputScore"><i className="fa-solid fa-pencil text-[#00ff00]"></i></Link>,
   
  },
  {
    key: '3',
    STT: '3',
    nameStudent: 'Trần Minh Tuấn',
    schoolProfile: <Link to="/inputScore"><i className="fa-solid fa-pencil text-[#00ff00]"></i></Link>,
    evaluate: <Link to="/inputScore"><i className="fa-solid fa-pencil text-[#00ff00]"></i></Link>,
    status: <Link to="/inputScore"><i className="fa-solid fa-pencil text-[#00ff00]"></i></Link>,
    
  },
];

function index() {
  let navigate = useNavigate()
  const handleBackData = () =>{
    navigate('/teacher/classlist');
  }
  const { id } = useParams()
  const [getClass, setClass] = useState('');
  const [getStudent, setStudent] = useState('');

  useEffect(() =>{
    axios.get(`${env.api}/class/class-detail/${id}`)
    .then((res) => {
      setClass(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);

  //console.log(getClass.name)
  return (
    <div className="w-full">
      <div className="grid grid-rows-1 my-4 pl-3 ">
        <div className="grid-cols-4 flex">
          <p className=" mr-8">Lớp: {getClass.name}</p>
          <p className="text-[#000] font-bold flex-none w-[470px]">Sỉ số: {getClass.classEnrollment}</p>
          <button className="flex-auto border border-1 py-1 px-2 rounded-lg bg-[#515ddd] text-[#fff] mr-3"><Link to="/teacher/inputScore">Nhập điểm</Link></button>
          <button className="flex-auto border border-1 px-2 rounded-lg bg-[#515ddd] text-[#fff] mr-3"><Link to="/teacher/sendLetter">Gửi Thư mời</Link></button>
        </div>
      </div>
      <Table dataSource={tableDate} pagnination={false} bordered>
        <Column className="text-center w-1/12" title="STT" dataIndex="STT"/> 
        <Column className="text-center w-5/12" title="Họ và Tên" dataIndex="nameStudent" />
        <Column className="text-center w-2/12" title="Học bạ" dataIndex="schoolProfile" />
        <Column className="text-center w-2/12" title="Phản ánh" dataIndex="evaluate" />
        <Column className="text-center w-2/12" title="Trạng thái" dataIndex="status" />
      </Table>
      <div className="grid justify-items-start">
        <Button type="primary" onClick={handleBackData} className="bg-[#515ddd]">Quay lại</Button>
      </div>
      
    </div>
  )
}

export default index
