// import { useNavigate  } from 'react-router';
import axios from 'axios';
import { Button} from 'antd';
import env from '/env.json';
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { TimePicker } from 'antd';
import dayjs from 'dayjs';

function index() {
  const format = 'HH:mm';

  const {id} = useParams();
  console.log(id);

  const [getClass, setClass] = useState('');
  useEffect(()=> {
    axios.get(`${env.api}/class/class-detail/${id}`)
    .then((res) => {
      setClass(res.data)
    })
    .catch(error => console.log(error));
  }, []);
  const currentYear = new Date().getFullYear();
  return (
    <div className="ml-[10px] ">
      <div>
          <div className="flex flex-col w-12/12 items-center mt-[30px]">
            <p>Cộng hoà xã hội chủ nghĩa việt nam </p>
            <p> Độc lập - Tự do - Hạnh phúc</p> 
            <h2 className="letter-name font-bold text-[18px] my-5">Thư mời họp phụ huynh</h2>
          </div>

          <div className="pl-[70px] leading-8">
            <p>Kính gửi phụ huynh em:    </p>
            <p>Học sinh lớp: <span className="font-bold text-[#000]">{getClass.name}</span></p>
            <p>Thời gian họp vào lúc: <TimePicker defaultValue={dayjs('12:08', format)} format={format} /> </p>
            <p>Đến tại hội trường của trường THCS: <span className="font-bold text-[#000]">{getClass.school}</span> </p>
            <p>Để thông báo tới quý phụ huynh kết quả 
            học tập  và rèn luyện của học sinh năm <span className="font-bold text-[#000]">{currentYear}</span> </p>
            <p>Rất mong quý phụ huynh tham dự đúng giờ <br/>  Xin trân trọng cảm ơn. </p>
          </div>

          <div className="flex flex-col items-end">
            <p className="pr-[30px]">......, ngày 19 tháng 06 năm 2023</p>
            <p className="pr-[120px] pb-[150px]">GVCN</p>
            <button className="border-1 mt-auto px-4 py-2 rounded-[30px] text-[#3F3030] bg-[#FDCC58] font-bold mr-[50px] mb-[50px] hover:bg-[#515ddd] hover:text-[#fff]">Gửi</button>
          </div>
      </div>
    </div>
  )
}

export default index

