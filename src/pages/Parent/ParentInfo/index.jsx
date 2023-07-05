import ParentSidebar from '../../../components/Sidebar/parentIndex';
import ParentInfoComp from '../../../components/ParentComp/ParentInfoComp';

function ParentInfo() {
    return (
        <div className="flex">
            <ParentSidebar/>
            <div className="flex-1 ml-52">
                <ParentInfoComp />
            </div>
        </div>
    )
}
export default ParentInfo;