import ParentSidebar from '../../../components/Sidebar/parentIndex';
import InfringementComp from '../../../components/ParentComp/InfringementComp';

function Infringement() {
    return (
        <div className="flex">
            <ParentSidebar/>
            <div className="flex-1 ml-52">
                <InfringementComp />
            </div> 
        </div>
    )
}
export default Infringement;