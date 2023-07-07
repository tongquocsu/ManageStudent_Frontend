import { useState } from 'react';
import { Menu } from 'antd';
import controlSidebar from '/src/assets/images/controlSidebar.jpg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
function ParentSidebar() {
    const [open, setOpen] = useState(true);

    const Menu = [
        {title: "Thời khóa biểu", icon: <FontAwesomeIcon icon={faCalendarDays} />, url: "/parent/schedule"},
        {title: "Thông tin tài khoản", icon: <FontAwesomeIcon icon={faUser} />, url: "/parent/parent-info"},
        {title: "Học phí", icon: <FontAwesomeIcon icon={faMoneyCheckDollar} />, url: "/parent/school-fee"},
        {title: "Phản ánh vi phạm", icon: <FontAwesomeIcon icon={faMessage} />, url: "/parent/comment"},
        {title: "Bảng điểm", icon: <FontAwesomeIcon icon={faTableList} />, url: "/parent/transcript"},
        {title: "Lịch họp phụ huynh", icon: <FontAwesomeIcon icon={faClock} />, url: "/parent/meeting"},
    ];
    return (
        <aside className={`${open ? "w-52" : "w-22"} origin-left duration-700 h-screen relative shadow-[0_2px_2px_rgb(0,0,0,0.5)]`}>
            <img onClick={() => setOpen(!open)} src={controlSidebar} className={`${!open && "rotate-180"} w-[25px] absolute -right-3 top-5 cursor-pointer bg-white`}/>
            <div>
                <ul className='pt-5 pl-2 pr-2'>
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