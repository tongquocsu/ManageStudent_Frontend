import { createTeacherAccountController } from "../../../ManageStudent_Backend/controllers/teacherController";

export const handleCreateTeacher = async () => {
  try {
    // Gửi yêu cầu tới controller để tạo giáo viên
    const response = await createTeacherAccountController({
      name: "Teacher Name",
      mobileNumber: "123456789",
      // Thêm các thông tin khác từ giao diện người dùng
    });

    // Xử lý kết quả từ controller
    if (response.success) {
      // Tạo giáo viên thành công, thực hiện các hành động khác (ví dụ: thông báo, làm mới trang, vv.)
      console.log("Successfully created");
    } else {
      // Xử lý khi có lỗi từ controller (ví dụ: hiển thị thông báo lỗi)
    }
  } catch (error) {
    console.log(error);
    // Xử lý khi có lỗi trong quá trình gọi controller (ví dụ: hiển thị thông báo lỗi)
  }
};
