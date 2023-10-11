import { Component } from "react";
import axios from "axios";
import { Button, Form, Input } from "antd";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ModalComp from "/src/components/teacherComp/UpdateTeacher";
function index() {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [getTeacher, setTeacher] = useState([{}]);
  useEffect(() => {
    fetch(
      `http://127.0.0.1:3002/api/v1/teacher/detail/64a19ce7ec25f6da85b25979`
    )
      .then((response) => response.json())
      .then((data) => {
        setTeacher(data);
      });
  }, []);
  console.log(getTeacher._id)
  return (
    <div>
      <h2 className="my-3 text-center font-bold font-sm text-[#515ddd]">
        Thông tin cá nhân
      </h2>
      <div className="grid justify-items-center">
        <div className="mt-1 border rounded-[20px] p-[20px] w-[750px]">
          <div className="flex">
            <div className="border-r border-[#f0c0e0] w-48 h-52">
              <img
                className="w-[100px] h-[100px] rounded-[100%] ml-[50px] mt-[50px]"
                src="https://cdn.pixabay.com/photo/2023/06/03/17/11/giraffe-8038107_640.jpg"
              />
            </div>
            {typeof getTeacher.teacher === "undefined" ? (
              <p>Loading...</p>
            ) : (
              <div>
                <form className="ml-3">
                  <label className="ml-[50px] text-[#000] font-sans">
                    ID:
                    <input
                      className="ml-[35px] my-1 pl-2"
                      type="text"
                      name="name"
                      value={getTeacher.teacher.person.name}
                    />
                  </label>
                  <br />
                  <label className="ml-[50px]">
                    Họ và tên:
                    <input
                      className="ml-[35px] my-1 pl-2"
                      type="text"
                      name="name"
                      value={getTeacher.teacher.person.name}
                    />
                  </label>
                  <br />
                  <label className="ml-[50px]">
                    Năm sinh:
                    <input
                      className="ml-[35px] my-1 pl-2"
                      type="text"
                      name="name"
                      value={getTeacher.teacher.person.dateOfBirth}
                      // onChange={this.handleChangeDate}
                    />
                  </label>
                  <br />
                  <label className="ml-[50px]">
                    Giới tính:
                    <input
                      className="ml-[35px] my-1 pl-2"
                      type="text"
                      name="name"
                      value={getTeacher.teacher.person.gender}
                    />
                  </label>
                  <br />
                  <label className="ml-[50px]">
                    SĐT:
                    <input
                      className="ml-[35px] my-1 pl-2"
                      type="text"
                      name="name"
                      value={getTeacher.teacher.person.mobileNumber}
                    />
                  </label>
                  <br />
                  <label className="ml-[50px]">
                    Địa chỉ:
                    <input
                      className="ml-[35px] my-1 pl-2"
                      type="text"
                      name="name"
                      value={getTeacher.teacher.person.address}
                    />
                  </label>
                  <br />
                  <label className="ml-[50px]">
                    Truờng:
                    <input
                      className="ml-[35px] my-1 pl-2 mb-3"
                      type="text"
                      name="name"
                      value={getTeacher.teacher.person.school}
                    />
                  </label>
                  <br />
                  <div className="grid justify-items-end">
                    <Button
                      className="bg-[#515ddd] text-[#fff] "
                      type="primary">
                      <Link onClick={toggle}>Chỉnh sửa</Link>
                    </Button>
                  </div>

                  <Modal isOpen={modal} toggle={toggle}>
                    <ModalComp/>
                  </Modal>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
