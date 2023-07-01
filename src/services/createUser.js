import axios from "axios";

const createUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:3002/api/v1/student/create",
      userData
    );

    // Xử lý phản hồi từ API (nếu cần)
    console.log(response.data); // Thông tin người dùng đã được tạo

    // Trả về kết quả thành công (nếu cần)
    return response.data;
  } catch (error) {
    // Xử lý lỗi (nếu có)
    console.error(error);

    // Trả về kết quả thất bại (nếu cần)
    throw error;
  }
};

// Sử dụng hàm createUser
const user = {
  username: "john.doe",
  email: "john.doe@example.com",
  password: "password123",
  role: "student",
};

createUser(user)
  .then((result) => {
    // Xử lý kết quả thành công (nếu cần)
    console.log("Người dùng đã được tạo:", result);
  })
  .catch((error) => {
    // Xử lý kết quả thất bại (nếu cần)
    console.error("Lỗi khi tạo người dùng:", error);
  });
