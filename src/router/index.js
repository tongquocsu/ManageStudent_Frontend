import Infringement from "../pages/Parent/Infringement";
import SchoolFee from "../pages/Parent/SchoolFee";
import Schedule from "../pages/Parent/Schedule";
import ParentInfo from "../pages/Parent/ParentInfo";
import Transcript from "../pages/Parent/Transcript";
import ParentMeeting from "../pages/Parent/ParentMeeting";
import Login from "../pages/Login/Login";

const routes = [
    { path: "/login", page: Login, isShowHeader: false, },
    { path: "/parent/infringement", page: Infringement, isShowHeader: true, },
    { path: "/parent/school-fee", page: SchoolFee, isShowHeader: true, },
    { path: "/parent/schedule", page: Schedule, isShowHeader: true, },
    { path: "/parent/parent-info/:pid", page: ParentInfo, isShowHeader: true, },
    { path: "/parent/transcript", page: Transcript, isShowHeader: true, },
    { path: "/parent/meeting", page: ParentMeeting, isShowHeader: true, },
];

export default routes;
