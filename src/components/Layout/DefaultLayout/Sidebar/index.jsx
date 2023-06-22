import { Divider, Menu, Switch } from 'antd';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { 
  AppstoreOutlined, 
  MailOutlined ,  
  CalendarOutlined,   
  SettingOutlined, 
  LinkOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';
//----------------------------------------------------------------
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem('Trang chủ', '1',<HomeOutlined />),
    getItem('Thông tin tài khoản', '2',<UserOutlined />),
    getItem('Danh sách các lớp', 'sub1', <AppstoreOutlined />, [
      getItem('Danh sách lớp', '3'),
      getItem('Nhập điểm', '4'),
    ]),
    getItem('Xem lịch dạy', '5', <CalendarOutlined /> ),
    getItem('Gửi thư mời', '6', <MailOutlined />),
    getItem('Cài đặt', '7', <SettingOutlined/>),
    
  ];
  const rootSubmenuKeys = ["sub1"];
  const App = () => {
    const navigate = useNavigate();
    const [mode, setMode] = useState('inline');
    const [theme, setTheme] = useState('light');
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
    const routes = {
      sub1: "/teacher/classlist",
      1: "/",
      2: "/teacher/profile",
      3: "/teacher/classlist",
      4: "/teacher/inputScore",
      5: "/teacher/xemlichday",
      6: "/teacher/sendLetter",
    };
  
    // Get the corresponding route path based on the key
    const route = routes[key];
  
    // Navigate to the route if it exists
    if (route) {
      navigate(route);
    }
  };
  return (
    <>
      <Menu
        mode="inline"
        onClick={({ key }) => handleMenuClick(key)}
        openKeys={openKeys}
        onOpenChange={onOpenChange} 
        style={{ width: 256 }}
        items={items}
      />
    </>
  );
};
export default App;