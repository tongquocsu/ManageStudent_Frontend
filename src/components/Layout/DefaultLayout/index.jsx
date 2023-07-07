import Header from './Header/index';
import Sidebar from './Sidebar/teacherIndex';
import Login from '../../../pages/Login/Login.jsx'
const DefaultLayout =  ({children}) => {
    return (
        <div className="p-1">
            {Login ? '':  <Header/>}
            <div className="flex">
                <div className="mr-5">
                    {Login ? '' : <Sidebar />}
                </div>
                <div className="flex-1 ml-3 mr-3 grid justify-items-center">{children}</div> 
            </div>
        </div>
    )
}


export default DefaultLayout



  