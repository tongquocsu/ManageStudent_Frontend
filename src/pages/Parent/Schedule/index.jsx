import ParentSidebar from '../../../components/Sidebar/parentIndex';
import ScheduleComp from '../../../components/ParentComp/ScheduleComp';

function Schedule() {
    return (
        <div className="flex">
            <ParentSidebar />
            <div className="flex-1 ml-52">
                <ScheduleComp />
            </div> 
        </div>
    )
}
export default Schedule;