import Header from './Header/index';
import Sidebar from './Sidebar/index';

const DefaultLayout =  ({children}) => {
    return (
        <div className="p-1">
            <Header/>
            <div className=" flex">
                <div className="mr-5">
                    <Sidebar />
                </div>
                <div className="ml-3 mr-3 grid justify-items-center">{children}</div> 
            </div>
        </div>
    )
}


export default DefaultLayout



  