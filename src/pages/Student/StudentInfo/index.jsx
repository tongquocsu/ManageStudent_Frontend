import StudentSidebar from '../../../components/Sidebar/studentIndex';
import StudentInfoComp from '../../../components/StudentComp/StudentInfoComp';

function StudentInfo() {
    return (
        <div className="flex">
            <StudentSidebar/>
            <div className="flex-1 ml-52">
                <StudentInfoComp />
            </div>
        </div>
    )
}
export default StudentInfo;