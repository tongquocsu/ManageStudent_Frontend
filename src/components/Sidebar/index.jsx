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
  getItem("Quản lý người dùng", "sub1", <FontAwesomeIcon icon="user" />),
  getItem("Giáo viên", "sub2", <FontAwesomeIcon icon="chalkboard-user" />, [
    getItem("Trang chủ", "5", <FontAwesomeIcon icon="house" />),
    getItem("Thông tin tài khoản", "6", <FontAwesomeIcon icon="circle-info" />),
    getItem("Danh sách các lớp", "7", <FontAwesomeIcon icon="list" />),
    getItem("Xem lịch dạy", "8", <FontAwesomeIcon icon="calendar-days" />),
    getItem("Lịch họp phụ huynh", "9", <FontAwesomeIcon icon="calendar" />),
  ]),
  getItem("Kế toán", "sub3", <FontAwesomeIcon icon="user-pen" />, [
    getItem("Thống kế", "10", <FontAwesomeIcon icon="chart-simple" />),
    getItem("Phiếu chi", "11", <FontAwesomeIcon icon="money-check-dollar" />),
    getItem("Phiếu thu", "12", <FontAwesomeIcon icon="file-invoice" />),
    getItem("Báo cáo", "13", <FontAwesomeIcon icon="receipt" />),
  ]),
  getItem("Quản lý học vụ", "sub4", <FontAwesomeIcon icon="user-tie" />, [
    getItem("Học sinh", "14", <FontAwesomeIcon icon="user-graduate" />),
    getItem("Thời khóa biểu", "15", <FontAwesomeIcon icon="calendar-days" />),
    getItem("Lớp học", "16", <FontAwesomeIcon icon="school" />),
    getItem("Môn học", "17", <FontAwesomeIcon icon="book" />),
  ]),
];
const itemsBottom = [
  getItem("Cài đặt", "sub5", <FontAwesomeIcon icon="gear" />),
  getItem("Đăng xuất", "sub6", <FontAwesomeIcon icon="right-to-bracket" />),
];

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6"];
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
      sub1: "/admin/manager-user",
      sub5: "/settings",
      sub6: "/sign-up",
      5: "/admin/teacher/home",
      6: "/admin/teacher/account-info",
      7: "/admin/teacher/class-list",
      8: "/admin/teacher/view-schedule",
      9: "/admin/teacher/parent-meeting",
      10: "/admin/accountant/statistic",
      11: "/admin/accountant/payment",
      12: "/admin/accountant/recipient",
      13: "/admin/accountant/report",
    };

    // Get the corresponding route path based on the key
    const route = routes[key];

    // Navigate to the route if it exists
    if (route) {
      navigate(route);
    }
  };

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
