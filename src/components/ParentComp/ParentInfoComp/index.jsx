import { Button, Form } from 'antd';
import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import UpdateParentComp from '../UpdateParentComp'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
 
function ParentInfoComp(){
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
  
    const [title, setNewTitle] = useState([
        "Họ và tên",
        "Ngày sinh",
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
    const id = useParams();

    const [getParent, setGetParent] = useState([{}])

    // useEffect(() => {
    //     axios.get('http://localhost:3002/api/v1/parent/detail/'+id.pid)
    //     .then(
    //         response => response.json()
    //     ).catch(err => console.log(err))
    //     .then(
    //         data => {
    //             setGetParent(data)
    //         }
    //     )
    // }, [])
    useEffect(() => {
        axios.get('http://localhost:3002/api/v1/parent/detail/'+id.pid)
        .then(
            res => {
                setGetParent(res.data)
            }
        ).catch(err => console.log(err))
    }, [])
    return (
        <>
            <h2 className="m-4 text-center text-base font-bold">Thông tin tài khoản</h2>
            <div className="grid justify-items-center">
                <div className="border rounded-[20px] w-7/12 relative">
                    <div className="flex text-sm">
                        <div className="flex ">
                            <div className="pt-3 px-3">
                            <img
                                className="w-[90px] h-[90px] rounded-[100%]"
                                src="https://cdn.pixabay.com/photo/2023/06/03/17/11/giraffe-8038107_640.jpg"
                            />
                            </div>
                            <span className="border-r border-inherit h-52"></span>
                        </div>

                        <div className="flex pt-3">
                            <thead className="text-black text-left">
                            {title.map((t) => {
                                return (
                                <tr>
                                    <th className="pl-3 w-1/3">{t}:</th>
                                </tr>
                                );
                            })}
                            </thead>
                            <tbody className="pl-3">
                            {(typeof getParent.parent === 'undefined') ? (
                                    <p>Loading...</p>
                                ): (
                                    <div>
                                        <tr key={getParent._id}>
                                            <td>{getParent.parent.person.name}</td>
                                        </tr>
                                        <tr key={getParent._id}>
                                            <td>{getParent.parent.person.dateOfBirth}</td>
                                        </tr>
                                        <tr key={getParent._id}>
                                            <td>{getParent.parent.person.mobileNumber}</td>
                                        </tr>
                                        <tr key={getParent._id}>
                                            <td>{getParent.parent.person.address}</td>
                                        </tr>
                                    </div>
                                )
                            }   
                            </tbody>
                        </div>
                    </div>

                    <div className="inline-block absolute right-5 top-3/4">
                        <Button className="bg-black text-white" type="primary">
                            <Link className="no-underline" onClick={toggle}>Chỉnh sửa</Link>
                        </Button>
                    </div>
                </div>
                
                <Modal isOpen={modal} toggle={toggle} >
                    <UpdateParentComp />
                </Modal>
            </div>
        </>
    );
}
// export default withRouter(ParentInfoComp);
export default ParentInfoComp;
