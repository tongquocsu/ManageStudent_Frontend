import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "antd";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const itemsTop = [
  getItem("Quản lý người dùng", "managerUser", <FontAwesomeIcon icon="user" />),
  getItem(
    "Giáo viên",
    "mangerTeacher",
    <FontAwesomeIcon icon="chalkboard-user" />,
    [
      getItem("Trang chủ", "teacherHome", <FontAwesomeIcon icon="house" />),
      getItem(
        "Thông tin tài khoản",
        "teacherAccountInfo",
        <FontAwesomeIcon icon="circle-info" />
      ),
      getItem(
        "Danh sách các lớp",
        "teacherClassList",
        <FontAwesomeIcon icon="list" />
      ),
      getItem(
        "Xem lịch dạy",
        "teacherViewSchedule",
        <FontAwesomeIcon icon="calendar-days" />
      ),
      getItem(
        "Lịch họp phụ huynh",
        "teacherParentMeeting",
        <FontAwesomeIcon icon="calendar" />
      ),
    ]
  ),
  getItem("Kế toán", "managerAccountant", <FontAwesomeIcon icon="user-pen" />, [
    getItem(
      "Thống kế",
      "accountantStatistic",
      <FontAwesomeIcon icon="chart-simple" />
    ),
    getItem(
      "Phiếu chi",
      "accountantPayment",
      <FontAwesomeIcon icon="money-check-dollar" />
    ),
    getItem(
      "Phiếu thu",
      "accountantRecipient",
      <FontAwesomeIcon icon="file-invoice" />
    ),
    getItem("Báo cáo", "accountantReport", <FontAwesomeIcon icon="receipt" />),
  ]),
  getItem(
    "Quản lý học vụ",
    "managerStaff",
    <FontAwesomeIcon icon="user-tie" />,
    [
      getItem(
        "Học sinh",
        "staffStudent",
        <FontAwesomeIcon icon="user-graduate" />
      ),
      getItem(
        "Thời khóa biểu",
        "staffSchedule",
        <FontAwesomeIcon icon="calendar-days" />
      ),
      getItem("Lớp học", "staffClassroom", <FontAwesomeIcon icon="school" />),
      getItem("Môn học", "staffSubject", <FontAwesomeIcon icon="book" />),
    ]
  ),

  getItem("Tạo người dùng", "createUser", <FontAwesomeIcon icon="user-tie" />, [
    getItem(
      "Học sinh",
      "createStudent",
      <FontAwesomeIcon icon="user-graduate" />
    ),
    getItem(
      "Giáo viên",
      "createTeacher",
      <FontAwesomeIcon icon="calendar-days" />
    ),
    getItem("Kế toán", "createAccountant", <FontAwesomeIcon icon="school" />),
    getItem(
      "Quản lý học vụ",
      "createAccStaff",
      <FontAwesomeIcon icon="book" />
    ),
  ]),
];

const itemsBottom = [
  getItem("Cài đặt", "settings", <FontAwesomeIcon icon="gear" />),
  getItem("Đăng xuất", "logout", <FontAwesomeIcon icon="right-to-bracket" />),
];

// submenu keys of first level
const rootSubmenuKeys = [
  "managerUser",
  "mangerTeacher",
  "managerAccountant",
  "managerStaff",
  "createUser",
  "settings",
  "logout",
];
const Sidebar = () => {
  const navigate = useNavigate();
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const handleMenuClick = (key) => {
    // Define route paths
    const routes = {
      managerUser: "/admin/manager-user",
      settings: "/settings",
      signUp: "/sign-up",
      teacherHome: "/admin/teacher/home",
      teacherAccountInfo: "/admin/teacher/account-info",
      teacherClassList: "/admin/teacher/class-list",
      teacherViewSchedule: "/admin/teacher/view-schedule",
      teacherParentMeeting: "/admin/teacher/parent-meeting",
      accountantStatistic: "/admin/accountant/statistic",
      accountantPayment: "/admin/accountant/payment",
      accountantRecipient: "/admin/accountant/recipient",
      accountantReport: "/admin/accountant/report",
      staffStudent: "/admin/acc-staff/student",
      staffSchedule: "/admin/acc-staff/schedule",
      staffClassroom: "/admin/acc-staff/classroom",
      staffSubject: "/admin/acc-staff/subject",
      createStudent: "/admin/create/student",
      createTeacher: "/admin/create/teacher",
      createAccountant: "/admin/create/accountant",
      createAccStaff: "/admin/create/acc-staff",
    };

    // Get the corresponding route path based on the key
    const route = routes[key];

    // Navigate to the route if it exists
    if (route) {
      navigate(route);
    }
  };

  // const handleLogout = (key) => {
  //   console.log(key);
  //   localStorage.removeItem("access_token");
  //   Navigate("/login");
  // };
  return (
    <div className="mx-auto">
      <Menu
        mode="inline"
        onClick={({ key }) => handleMenuClick(key)}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          width: 256,
        }}
        items={itemsTop}
      />
      <Menu
        className="bottom-0 absolute"
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={({ key }) => handleMenuClick(key)}
        style={{
          width: 256,
        }}
        items={itemsBottom}
      />
    </div>
  );
};
export default Sidebar;
