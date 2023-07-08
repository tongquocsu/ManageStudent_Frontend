import { useState } from 'react';
import controlSidebar from '../../assets/images/controlSidebar.png';
import { 
        ScheduleOutlined,
        UserOutlined,
        DollarOutlined,
        SnippetsOutlined,
        ReadOutlined,
        MailOutlined
        } 
        from '@ant-design/icons';

function StudentSidebar() {
    const [open, setOpen] = useState(true);

    const Menu = [
        {title: "Thời khóa biểu", icon: <ScheduleOutlined />, url: ""},
        {title: "Thông tin tài khoản", icon: <UserOutlined />, url: "/student/student-info/:pid"},
        {title: "Học phí", icon: <DollarOutlined />, url: "/parent/school-fee"},
        {title: "Phản ánh vi phạm", icon: <SnippetsOutlined />, url: "/parent/infringement"},
        {title: "Bảng điểm", icon: <ReadOutlined />, url: "/parent/transcript"},
        {title: "Lịch họp phụ huynh", icon: <MailOutlined />, url: "/parent/meeting"},
    ];
    
    return (
        <aside className={`${open ? "w-52" : "w-22"} fixed h-full origin-left duration-700 shadow-[0_2px_2px_rgb(0,0,0,0.5)]`}>
            <img onClick={() => setOpen(!open)} src={controlSidebar} className={`${!open && "rotate-180"} w-[25px] absolute -right-3 top-5 cursor-pointer bg-white`}/>
            <div>
                <ul className='pt-5 pl-2 pr-2'>
                    {Menu.map((menu, index) => (
                        <li key={index} className='text-sm p-2 cursor-pointer hover:bg-gray-100 hover:rounded-md'>
                            <a href={menu.url} className='flex items-center gap-x-4 text-black no-underline'>
                                <span className='text-xl relative bottom-1'>{menu.icon}</span>
                                <span className={`${!open && 'hidden'} origin-left duration-700`}>{menu.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}
export default StudentSidebar;