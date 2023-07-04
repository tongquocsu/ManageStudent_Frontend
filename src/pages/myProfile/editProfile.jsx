import { ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import React, { useState} from "react";

function editProfile() {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
  return (
    <div>
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
        
    </div>
  )
}

export default editProfile
