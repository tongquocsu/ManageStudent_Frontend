import { useState } from 'react';
import { Menu } from 'antd';
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
function ParentSidebar() {
    const [open, setOpen] = useState(true);

    const Menu = [
        {title: "Trang chủ", icon:<HomeOutlined /> , url: "/"},
        {title: "Thông tin tài khoản", icon:<UserOutlined /> , url: "/teacher/profile"},
        {title: "Danh sách các lớp", icon:<AppstoreOutlined /> , url: "/teacher/classlist"},
        {title: "Xem lịch dạy", icon:<CalendarOutlined /> , url: "/teacher/xemlichday"},
        {title: "Đăng Xuất", icon:<ImportOutlined /> , url: "/"},
    ];
    return (
        <aside className={`${open ? "w-52" : "w-22"} origin-left duration-700 h-screen relative shadow-[0_2px_2px_rgb(0,0,0,0.5)]`}>
            <img onClick={() => setOpen(!open)} src={controlSidebar} className={`${!open && "rotate-180"} w-[25px] absolute -right-3 top-5 cursor-pointer bg-white`}/>
            <div>
                <ul className='pt-3 pl-2 pr-2'>
                    {Menu.map((menu, index) => (
                        <li key={index} className='text-sm p-2 cursor-pointer hover:bg-gray-100 hover:rounded-md'>
                            <a href={menu.url} className='flex items-center gap-x-4'>
                                <span className='text-lg'>{menu.icon}</span>
                                <span className={`${!open && 'hidden'} origin-left duration-700`}>{menu.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
export default ParentSidebar;