import { Button } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Sidebar from "../../../components/Sidebar";

function AccountInfo() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [title, setNewTitle] = useState([
    "teacherID",
    "Name",
    "Email",
    "Phone",
    "Address",
  ]);
  const [info, setNewInfo] = useState([
    "1",
    "Nguyễn Văn Tuấn",
    "tuan@gmail.com",
    "09235134365",
    "CT",
  ]);
  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4">
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
                        <tr key={t}>
                          <th className="pl-3 font-mono w-[120px]">{t}:</th>
                        </tr>
                      );
                    })}
                  </thead>
                  <tbody className="pl-3 font-mono">
                    {info.map((s) => {
                      return (
                        <tr key={s}>
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
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Modal title</ModalHeader>
              <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>
                  Do Something
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Hủy
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AccountInfo;
