import Header from './Header/index';
import Sidebar from './Sidebar/teacherIndex';
import Login from '../../../pages/Login/Login.jsx'
function index({children}){
    const ddd = window.location.href;
    if(ddd === 'http://127.0.0.1:5173/teacher/login'){
        return (<div><Login/></div>)
    }else{
        return (
        <div className="p-1">
            <Header/>
            <div className="flex">
                <div className="mr-5">
                    <Sidebar />
                </div>
                <div className="flex-1 ml-3 mr-3 grid justify-items-center">{children}</div>
            </div>
        </div>)
    }    
}
export default index



  