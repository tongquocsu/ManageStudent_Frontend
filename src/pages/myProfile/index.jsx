import { Button , Input} from "antd";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function index() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [title, setNewTitle] = useState([
    "teacherID",
    "Name",
    "Email",
    "Phone",
    "Address",
  ]);
  const [Newinfo, setNewInfo] = useState([
    {
      teacherId: "1",
      name: "Nguyễn Văn A",
      email: "tuan@gmail.com",
      phone: "09235134365",
      address: "CT",
    },
    {
      teacherId: "2",
      name: "Nguyễn Văn Tuấn",
      email: "tuan@gmail.com",
      phone: "09235134365",
      address: "CT",
    }
  ]);
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
    setNewIdInfo(content.teacherId)
    setNewNameInfo(content.name)
    setNewEmailInfo(content.email)
    setNewphoneInfo(content.phone)
    setNewAddressInfo(content.address)
    setImageInfo(content.image)
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
      <div className="grid justify-items-center">
        <div className="mt-4 border rounded-[20px] p-[20px] w-9/12">
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
                {info.map((s) => {
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
            <ModalHeader toggle={toggle} onClick={e => onPressEditingInfo(s)} className="font-bold font-sans">
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
