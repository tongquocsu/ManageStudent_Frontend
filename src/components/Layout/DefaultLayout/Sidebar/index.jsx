import { Divider, Menu, Switch } from 'antd';
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import controlSidebar from '/src/assets/images/controlSidebar.jpg';
import { 
  AppstoreOutlined, 
  CalendarOutlined,   
  SettingOutlined, 
  LinkOutlined,
  HomeOutlined,
  UserOutlined,
  ImportOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  AlignLeftOutlined,

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
    getItem('Dashboard', '9',<AlignLeftOutlined />),
    getItem('Trang chủ', '1',<HomeOutlined />),
    getItem('Thông tin tài khoản', '2',<UserOutlined />),
    getItem('Danh sách các lớp', 'sub1', <AppstoreOutlined />, [
      getItem('Danh sách lớp', '3'),
      getItem('Nhập điểm', '4'),
    ]),
    getItem('Xem lịch dạy', '5', <CalendarOutlined /> ),
    getItem('Cài đặt', '7', <SettingOutlined/>),
    getItem('Đăng Xuất', '8', <ImportOutlined />),
    
    
  ];
  const rootSubmenuKeys = ["sub1"]
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
  
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
      setToggle(!toggle)
    }
    const handleMenuClick = (key) => {
      const routes = {
        sub1: "/teacher/classlist",
        1: "/",
        2: "/teacher/profile",
        3: "/teacher/classlist",
        4: "/teacher/inputScore",
        5: "/teacher/xemlichday",
        8: "/",
      };
    
      // Nhận đường dẫn route tương ứng dựa trên key
      const route = routes[key];
    
      // Điều hướng đến url nếu route tồn tại
      if (route) {
        navigate(route);
      }
    };
  
    return (
      <div className={toggle?'navbav expanded':'navbar'}> 
          <Menu
            mode="inline"
            onClick={({ key }) => handleMenuClick(key)}
            openKeys={openKeys}
            onOpenChange={onOpenChange} 
            style={{ width: 256 }}
            items={ items }
          />
        <div className='toggle-icon' onClick={handleToggle}>
          {toggle? <LeftCircleOutlined /> : <RightCircleOutlined />}
        </div>
      </div>
    )
  }
  export default App
// <aside className={`${toggle ? "w-68" : "w-22"} origin-left duration-700 h-screen relative shadow-[0_2px_2px_rgb(0,0,0,0.5)]`}>
//         <img onClick={handleMenuClick} src={controlSidebar} className={`${!toggle && "rotate-180"} w-[25px] absolute -right-3 top-5 cursor-pointer bg-white nav-btn nav-close-btn`}/>
          