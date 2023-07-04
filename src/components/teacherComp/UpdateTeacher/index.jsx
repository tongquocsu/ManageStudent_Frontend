import { Button, Form, Input, Upload } from "antd";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { UploadOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
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

    const [info, setNewInfo] = useState([
        "Nguyễn Văn A",
        "nva@gmail.com",
        "09235134365",
        "46, đường Nguyễn Trãi, TP Vĩnh Long",
    ]);

    const [form] = Form.useForm();

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const [value, setValue] = useState({
        id: '649548043ae080109a9ff752',
        name: '',
        dateOfBirth: '',
        mobileNumber: '',
        address: ''
    })

    useEffect(() => {
        axios.get("http://localhost:3002/api/v1/parent/detail/649548043ae080109a9ff752")
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

    const navigate = useNavigate()

    const hanldeSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3002/api/v1/parent/update/649548043ae080109a9ff752', value)
        .then(res => {
            navigate('/parent/parent-info')
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <h2 className="text-center text-base font-bold relative top-5">Cập nhật thông tin</h2>
            <ModalBody>
                <form onSubmit={hanldeSubmit}>
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ và tên </label>
                    <input value={value.name} onChange={e => setValue({...value, name: e.target.value})} type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-6">
                    <label for="dateOfBirth" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ngày sinh </label>
                    <input value={value.dateOfBirth} onChange={e => setValue({...value, dateOfBirth: e.target.value})} type="text" id="dateOfBirth" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-6">
                    <label for="mobileNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại </label>
                    <input value={value.mobileNumber} onChange={e => setValue({...value, mobileNumber: e.target.value})} type="tel" id="mobileNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div class="mb-6">
                    <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa chỉ </label>
                    <input value={value.address} onChange={e => setValue({...value, address: e.target.value})} type="text" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </ModalBody>
        </>
    );
}
export default UpdateParentComp;