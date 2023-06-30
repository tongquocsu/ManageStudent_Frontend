import { Link } from "react-router-dom";
import { useState } from "react";
import { Button ,Input } from 'antd';

function index() {
  const [title, setTitle] = useState(["STT","ngày", "nội dung vi phạm", "", ""]);
  const [statusStudent, newstatusStudent] = useState([
    {
      _id: 1,
      date: "2022-06-15",
      desc: "Trốn học tiết ngữ văn",
    },
    {
      _id: 2,
      date: "2022-07-19",
      desc: "Trốn học tiết toán",
    },
  ]);
  const [newId, setNewId] = useState('');
  const [newDay, setNewDay] = useState('');
  const [newContent, setNewContent] = useState('');
  const [editingRow, setEditingRow] = useState('');

  const onClickAddAssessment = () => {
    let statusCopy = [...statusStudent];
    statusCopy.push({
      _id: newId,
      date: newDay,
      desc: newContent,
    });
    newstatusStudent(statusCopy);
    setNewId('')
    setNewDay('')
    setNewContent('')
  };
  const onChangeNewId = (e) => {
    setNewId(e.currentTarget.value);
  };
  const onChangeNewContent = (e) => {
    setNewContent(e.currentTarget.value);
  };
  const onChangeNewDay = (e) => {
    setNewDay(e.currentTarget.value);
  };
  const onPressEditingRow = (content) => {
    setNewId(content._id)
    setNewDay(content.date)
    setNewContent(content.desc)
    setEditingRow(content._id)
  };
  const onClickUpdateContent = () => {
    let index = statusStudent.findIndex(s =>s._id === editingRow)
    let statusCopy = [...statusStudent];
    statusCopy[index] = {
      _id: newId,
      date: newDay,
      desc: newContent,
    }
    newstatusStudent(statusCopy);
    setNewId('')
    setNewDay('')
    setNewContent('')
    setEditingRow('')
  }
  const onPressDeleteRow = (_id) => {
    let statusCopy =  [...statusStudent];
    let index = statusStudent.findIndex(s => s._id === _id);
    statusCopy.splice(index, 1);
    newstatusStudent(statusCopy);
  }
  
  return (
    <>
      <div class="mt-4">
      <h2 className="my-3 text-center font-bold">Đánh giá học sinh</h2>
        <table className="border  rounded-[20px] w-full">
          <thead className="bg-[#515ddd] text-white text-center">
            <tr>
              {title.map(t => {
                return <th key={t}>{t}</th>;
              })}
            </tr>
          </thead>

          <tbody className="pl-3">
            {statusStudent.map(s => {
              return (
                <tr>
                    <td key={s._id} className="pl-3 border w-[150px] text-center">{s._id}</td>
                    <td key={s.date} className="pl-3 border w-[150px] text-center">{s.date}</td>
                    <td key={s.desc} className="pl-[10px] border w-[200px]">{s.desc}</td>
                    <td className="pl-3 border-y  w-[50px]">
                      <Button onClick={e => onPressEditingRow(s)}> <i className="fa-solid fa-pencil"></i> </Button>
                    </td>
                    <td className="pl-3 border-y  w-[50px]">
                      <Button onClick={e => onPressDeleteRow(s._id)}> <i className="fa-solid fa-trash"></i> </Button>
                    </td>
                </tr>
              );
            })}
          </tbody>
          
        </table>

        <div className="grid justify-items-center mt-3">
          <h3 className="font-bold">Thêm Đánh giá</h3>
          <Input
            className="mt-3 w-[400px]"
            onChange={onChangeNewId}
            value={newId}
            disabled={editingRow}
            placeholder="Vui lòng nhập ID"
          />
          <Input type="date"
            className="mt-3 w-[400px]"
            onChange={onChangeNewDay}
            value={newDay}
            placeholder="Vui lòng chọn Ngày"
          />
          <Input
            className="mt-3 w-[400px]"
            onChange={onChangeNewContent}
            value={newContent}
            placeholder="Vui lòng nhập nội dung"
          />
          {
            editingRow
            ?
            <Button type="primary" className="relative left-[350px] text-right mt-5 text-[#fff] bg-[#515ddd]  mr-[50px] mb-[50px] hover:bg-[#FDCC58] hover:text-[#fff]" onClick={onClickUpdateContent}>Cập Nhật</Button>
            : 
            <Button type="primary" className="relative left-[350px] text-right mt-5 text-[#fff] bg-[#515ddd]  mr-[50px] mb-[50px] hover:bg-[#FDCC58] hover:text-[#fff]" onClick={onClickAddAssessment}>Thêm</Button>
          }
        </div>
      </div>
    </>
  );
}
export default index;
