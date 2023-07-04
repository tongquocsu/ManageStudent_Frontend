import { Button , Input} from "antd";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function getTeacherById(id) {
  axios.get(`localhost:3002/api/v1/teacher/detail/${id}`)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
    .catch(error => console.log(error));
}
state = {
  teacher: []

}
function index() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

 
  const id = '64a19ce7ec25f6da85b25979';
  axios.get(`localhost:3002/api/v1/teacher/detail/${id}`)
    .then(res => {
      const teacher = res.data;
      this.setState({ teacher });
      console.log(teacher);
    })
    .catch(error => console.log(error));

 
  //------------chỉnh sửa thông tin giáo viên--------------
  const [newIdInfo, setNewIdInfo] = useState('');
  const [newNameInfo, setNewNameInfo] = useState('');
  const [newEmailInfo, setNewEmailInfo] = useState('');
  const [newPhoneInfo, setNewphoneInfo] = useState('');
  const [newAddressInfo, setNewAddressInfo] = useState('');
  const [newImageInfo, setImageInfo] = useState('');
  const onChangeNewIdInfo = (e) => {
    setNewIdInfo(e.currentTarget.value);
  };
  const onChangeNewNameInfo = (e) => {
    setNewNameInfo(e.currentTarget.value);
  };
  const onChangeNewEmailInfo = (e) => {
    setNewEmailInfo(e.currentTarget.value);
  };
  const onChangeNewPhoneInfo = (e) => {
    setNewphoneInfo(e.currentTarget.value);
  };
  const onChangeNewAdressInfo = (e) => {
    setNewAddressInfo(e.currentTarget.value);
  };
  const onChangeNewImageInfo = (e) => {
    setImageInfo(e.currentTarget.value);
  };
  const onPressEditingInfo = (content) => {
    setNewIdInfo(conteteacherId)
    setNewNameInfo(contename)
    setNewEmailInfo(conteemail)
    setNewphoneInfo(contephone)
    setNewAddressInfo(conteaddress)
    setImageInfo(conteimage)
  };
  const onClickUpdateContent = () => {
    let index = newstatusInfo.findIndex(s =>s.teacherId === editingRow)
    let statusCopy = [...newstatusInfo];
    statusCopy[index] = {
      teacherId: newIdInfo,
      name: newNameInfo,
      email: newEmailInfo,
      phone: newPhoneInfo,
      address: newAddressInfo,
    }
    newstatusInfo(statusCopy);
    setNewIdInfo('')
    setNewNameInfo('')
    setNewEmailInfo('')
    setNewPhoneInfo('')
    setNewAdressInfo('')
    setNewImageInfo('')
  }
  //--------------------------------------------------------
  return (
    <div>
      <h2 className="my-3 text-center font-bold font-sm text-[#515ddd]">Thông tin cá nhân</h2>
      <div className="grid justify-items-center">
        <div className="mt-1 border rounded-[20px] p-[20px] w-[750px]">
          <div className="flex">
            <div className="border-r border-[#f0c0e0] w-48 h-52">
              <img
                className="w-[100px] h-[100px] rounded-[100%] ml-[50px] mt-[50px]"
                src="https://cdn.pixabay.com/photo/2023/06/03/17/11/giraffe-8038107_640.jpg"
              />
            </div>
            <div className="pl-[50px] py-[20px] flex">
              <thead className="text-black text-left">
                {title.map((t) => {
                  return (
                    <tr>
                      <th className="pl-3 font-mono w-[120px]">{t}:</th>
                    </tr>
                  );
                })}
              </thead>
              <tbody className="pl-3 font-mono">
                {Newinfo.map((s) => {
                  return (
                    <tr>
                      <td>{s}</td>
                    </tr>
                  );
                })}
              </tbody>
            </div>
          </div>
          <div className="grid justify-items-end">
            <Button className="bg-[#515ddd]" type="primary">
              <Link onClick={toggle}>Chỉnh sữa</Link>
            </Button>
          </div>
        </div>
      </div>

      <div>
        <Modal isOpen={modal} toggle={toggle} className="w-[900px]">
          <div className="grid justify-items-center">
            <ModalHeader toggle={toggle} className="font-bold font-sans">
              Chỉnh sửa hồ sơ
            </ModalHeader>
          </div>
          <ModalBody>
            <div className="flex">
              <div className="grid justify-items-center">
                <img className="w-[100px] h-[100px] rounded-[100%] mt-[50px] mx-5"
                src="https://cdn.pixabay.com/photo/2023/06/03/17/11/giraffe-8038107_640.jpg" />
              </div>
              <div className="mx-3 mr-3">
                <div className="grid-rows-1 border border-1 px-3 py-2 ">
                  <div>
                    <label>Mã số ID: </label>
                    <input type="text" disabled />
                  </div>
                  {/* <Input
                    className="mt-3 w-[400px]"
                    onChange={onChangeNewId}
                    value={newId}
                    disabled={editingRow}
                    placeholder="Vui lòng nhập ID"
                  /> */}
                </div>
                <div className="grid-rows-1 border border-1 px-3 my-2 py-2">
                  <div>
                    <label>Họ và Tên: </label>
                    <input type="text" />
                  </div>
                </div>
                <div className="grid-rows-1 border border-1 px-3 my-2 py-2">
                  <div>
                    <label>SĐT: </label>
                    <input type="number" />
                  </div>
                </div>
                <div className="grid-rows-1 border border-1 px-3 my-2 py-2">
                  <div>
                    <label>Địa chỉ: </label>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              className="bg-[#515ddd]"
              type="primary"
              onClick={toggle}
            >
              Lưu thông tin
            </Button>{" "}
            <Button
              color="secondary"
              className="bg-[#515ddd]"
              type="primary"
              onClick={toggle}
            >
              Hủy
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}
export default index;
