import ParentSidebar from '../../../components/Sidebar/parentIndex';
import MeetingComp from '../../../components/ParentComp/MeetingComp';

function ParentMeeting() {
    return (
        <div className="flex">
            <ParentSidebar/>
            <div className="flex-1 ml-52">
                <MeetingComp />
            </div> 
        </div>
    )
}
export default ParentMeeting;