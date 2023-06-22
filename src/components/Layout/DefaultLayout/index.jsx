import Header from './Header';
import Sidebar from './Sidebar';

const DefaultLayout =  ({children}) => {
    return (
        <div className="p-1">
            <Header/>
            <div className="w-12/12 flex">
                <div className="w-3/12 ">
                    <Sidebar />
                </div>
                <div className="w-9/12 ml-[10px] mr-3">{children}</div> 
            </div>
        </div>
    )
}


export default DefaultLayout



  