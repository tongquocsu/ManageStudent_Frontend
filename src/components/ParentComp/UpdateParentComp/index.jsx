import { Button, Form, Input, Upload } from "antd";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { UploadOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import './UpdateParentInfo.css';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UpdateParentComp(){
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [title, setNewTitle] = useState([
        "Họ và tên",
        "Email",
        "Số điện thoại",
        "Địa chỉ",
    ]);

    const id = useParams();

    const [value, setValue] = useState({
        id: '',
        name: '',
        dateOfBirth: '',
        mobileNumber: '',
        address: ''
    })

    useEffect(() => {
        axios.get("http://localhost:3002/api/v1/parent/detail/"+id.pid)
        .then(
            res => {
                setValue({...value, 
                            name: res.data.parent.person.name, 
                            dateOfBirth: res.data.parent.person.dateOfBirth, 
                            mobileNumber: res.data.parent.person.mobileNumber, 
                            address: res.data.parent.person.address 
                        })
            }).catch(err => console.log(err))
    }, [])
 
    const hanldeSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3002/api/v1/parent/update/'+id.pid, value)
        .then(res => {
            location.reload();
        })
        .catch(err => console.log(err))
    }

    const handleCancel = () => {
        location.reload();
    }

    return (
        <>
            <h2 className="text-center text-base font-bold relative top-5">Cập nhật thông tin</h2>
            <ModalBody>
                <form onSubmit={hanldeSubmit}>
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và tên <span className="text-red-600 text-base relative top-[5px]">*</span></label>
                    <input value={value.name} onChange={e => setValue({...value, name: e.target.value})} type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-6">
                    <label for="dateOfBirth" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ngày sinh </label>
                    <input value={value.dateOfBirth} onChange={e => setValue({...value, dateOfBirth: e.target.value})} type="text" id="dateOfBirth" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-6">
                    <label for="mobileNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại <span className="text-red-600 text-base relative top-[5px]">*</span></label>
                    <input value={value.mobileNumber} onChange={e => setValue({...value, mobileNumber: e.target.value})} type="tel" id="mobileNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-6">
                    <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa chỉ <span className="text-red-600 text-base relative top-[5px]">*</span></label>
                    <input value={value.address} onChange={e => setValue({...value, address: e.target.value})} type="text" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="flex">
                    {/* <button type="submit" class="mr-10 text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CẬP NHẬT</button> */}
                    <button type="submit" class="mr-10 text-white bg-black hover:bg-gray-100 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">CẬP NHẬT</button>
                    <button type="submit" onClick={handleCancel} class="mr-10 text-white bg-black hover:bg-gray-100 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">HỦY</button>
                </div>
                </form>
            </ModalBody>
        </>
    );
}
export default UpdateParentComp;