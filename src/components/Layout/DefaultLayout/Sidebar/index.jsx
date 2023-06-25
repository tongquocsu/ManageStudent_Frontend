import { Divider, Menu, Switch } from 'antd';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import controlSidebar from '/src/assets/images/controlSidebar.jpg';

import { 
  AppstoreOutlined, 
  MailOutlined ,  
  CalendarOutlined,   
  SettingOutlined, 
  LinkOutlined,
  HomeOutlined,
  UserOutlined,
  ImportOutlined,

} from '@ant-design/icons';
//----------------------------------------------------------------
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children ,
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
    getItem('Đăng Xuất', '8', <ImportOutlined />),
    
    
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
      8: "/",
    };
  
    // Get the corresponding route path based on the key
    const route = routes[key];
  
    // Navigate to the route if it exists
    if (route) {
      navigate(route);
    }
  };
  const [open, setOpen] = useState(true);
  return (
    <>
    <aside className={`${open ? "w-68" : "w-22"} origin-left duration-700 h-screen relative shadow-[0_2px_2px_rgb(0,0,0,0.5)]`}>
    <img onClick={() => setOpen(!open)} src={controlSidebar} className={`${!open && "rotate-180"} w-[25px] absolute -right-3 top-5 cursor-pointer bg-white`}/>
      <Menu
        mode="inline"
        onClick={({ key }) => handleMenuClick(key)}
        openKeys={openKeys}
        onOpenChange={onOpenChange} 
        style={{ width: 256 }}
        {items.map((menu,index) => (
          <li key={index} className='text-sm p-2 cursor-pointer hover:bg-gray-100 hover:rounded-md'>
              <a href={items.route} className='flex items-center gap-x-4'>
                  <span className='text-lg'>{items.icon}</span>
                  <span className={`${!open && 'hidden'} origin-left duration-700`}>{items.label}</span>
                  <span className={`${!open && 'hidden'} origin-left duration-700`}>{items.children}</span>
              </a>
          </li>
        ))}
        items={items}
      />
    </aside>
    </>
  );
};
export default App;