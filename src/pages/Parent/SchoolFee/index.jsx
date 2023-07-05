import ParentSidebar from '../../../components/Sidebar/parentIndex';
import SchoolFeeComp from '../../../components/ParentComp/SchoolFeeComp';

function SchoolFee() {
    return(
        <div className="flex">
            <ParentSidebar/>
            <div className="flex-1 ml-52">
                <SchoolFeeComp />
            </div>
        </div>
    )
}

export default SchoolFee;