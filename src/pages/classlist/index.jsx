import React, { useState, useEffect } from "react";
import {  EyeOutlined, EditOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Table , Button} from 'antd';
import env from '/env.json';
import axios from "axios";


function index() {
  const [className, setClassName]= useState([]);
  useEffect(() => {
      axios.get(`${env.api}/class/class-list`)
      .then((res) => {
          setClassName(res.data.classes)
      }).catch(err => {
          console.log(err)
      })
  }, []);


  // console.log(className[0].teacher)
  
 
  const sharedOnCell = (_, index) => {
    if (index === 1) {
      return {
        colSpan: 1,
      };
    }
    return {};
  };

  const columns = [
    {
      title: 'STT',
      key: 'STT',
      render: (_, record, index) => index +1,
    },
    {
      title: 'Tên Lớp',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
      onCell: (_, index) => ({
        colSpan: index === 1 ? 1 : 1,
      }),
    },
    {
      title: 'Sỉ số',
      dataIndex: 'classEnrollment',
      onCell: sharedOnCell,
    },
    {
      title: 'Nhập điểm',
      onCell: sharedOnCell,
      render: (_, record) => (
        <div size="middle">
          <Button><Link to={`/teacher/inputScore/${record._id}`}> <EditOutlined /> </Link></Button>
        </div>
      ),
    },
    {
      title: 'Gửi thư mời',
      onCell: sharedOnCell,
      render: (_, record) => (
        <div size="middle">
          <Button><Link to={`/teacher/sendLetter/${record._id}`}> <EditOutlined /> </Link></Button>
        </div>
      ),
    },
    {
      title: 'Giáo viên chủ nhiệm',
      onCell: sharedOnCell,
       render: (_, record) => {
          if(record.teacher) {
            return (<div>{record.teacher?.person?.name}</div>)
          }
          return (<div>Ahihi</div>)
       }
    },
    {
      title: 'Action',
      onCell: sharedOnCell,
      render: (_, record) => (
        <div size="middle">
          <Button><Link to={`/teacher/managerClass/${record._id}`} > <EyeOutlined /> </Link></Button>
        </div>
      ),
    },
  ];
  
  return (
    <div>
    <h2 className="my-3 text-center font-bold font-sm text-[#515ddd]">Danh sách các lớp</h2>
       <Table className="w-[780px] mt-3 " columns={columns}  dataSource={className} bordered />
      {/* <h2>{getCount}</h2> */}
    </div>
  )
}

export default index









{/* {className.map((t) => <span key={t._id}> {t.name}</span>)}  */}
 {/* <Columns title="STT" ></Columns>
        <Columns title="Tên lớp" dataIndex=""></Columns>
        <Columns title="Sỉ số"></Columns>
        <Columns title="action" dataIndex = {<Link> <EyeOutlined /></Link> }> d</Columns>  */}