import { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import axios from "axios";
import TeacherList from "../../../components/TeacherList";

const CreateTeacher = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [image, setImage] = useState("");
  const [school, setSchool] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3002/api/v1/teacher/create",
        {
          name,
          mobileNumber,
          image,
          school,
          address,
          dateOfBirth,
          gender,
          username,
          email,
          password,
        }
      );
      const response1 = await axios.get(
        "http://localhost:3002/api/v1/student/list"
      );
      console.log(response.data); // Log the response from the backend
      console.log(response1.data); // Log the response from the backend

      // Thực hiện các hành động khác sau khi tạo người dùng thành công
    } catch (error) {
      console.log("error: " + error);
      console.error(error.response.data); // Log the error response from the backend

      // Xử lý khi có lỗi từ backend
    }
  };
  return (
    <div>
      <div className="flex">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4">
          <div className="flex flex-col">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tên"
            />
            <input
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Số điện thoại"
            />
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Ảnh"
            />
            <input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              placeholder="Trường"
            />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Địa chỉ"
            />
            <input
              type="text"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              placeholder="Ngày sinh"
            />
            <label>
              Giới tính:
              <input
                type="radio"
                checked={gender === true}
                onChange={() => setGender(true)}
              />
              Nam
              <input
                type="radio"
                checked={gender === false}
                onChange={() => setGender(false)}
              />
              Nữ
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Tên đăng nhập"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mật khẩu"
            />
            <button onClick={handleCreateUser}>Tạo người dùng</button>
          </div>
          <TeacherList />
        </div>
      </div>
    </div>
  );
};

export default CreateTeacher;
