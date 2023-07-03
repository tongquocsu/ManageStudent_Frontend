import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import HomeAdmin from "../pages/HomeAdmin";
import NoPage from "../pages/NoPage";
import ManagerUser from "../pages/Admin/ManagerUser";

import AccountInfo from "../pages/Admin/Teacher/AccountInfo.jsx";
import HomeTeacher from "../pages/Admin/Teacher/Home.jsx";
import ClassList from "../pages/Admin/Teacher/ClassList.jsx";
import ViewSchedule from "../pages/Admin/Teacher/ViewSchedule.jsx";
import ParentMeeting from "../pages/Admin/Teacher/ParentMeeting.jsx";
import Settings from "../pages/Admin/Settings";
import Logout from "../pages/Logout";
import News from "../pages/News";
import Home from "../pages/Home";

import ManagerStudent from "../pages/Admin/ManageAcademic/ManagerStudent";
import MangerSchedule from "../pages/Admin/ManageAcademic/MangerSchedule";
import MangerClassroom from "../pages/Admin/ManageAcademic/MangerClassroom";
import ManagerSubject from "../pages/Admin/ManageAcademic/ManagerSubject";

import CreateTeacher from "../pages/Admin/CreateUser/CreateTeacher";
import CreateAccountant from "../pages/Admin/CreateUser/CreateAccountant";
import CreateAccStaff from "../pages/Admin/CreateUser/CreateAccStaff";
const routes = [
  {
    path: "/",
    page: Home,
    isShowHeader: true,
  },

  {
    path: "/admin",
    page: HomeAdmin,
    isShowHeader: true,
  },
  {
    path: "/admin/news",
    page: News,
    isShowHeader: true,
  },
  {
    path: "/admin/manager-user",
    page: ManagerUser,
    isShowHeader: true,
  },
  {
    path: "/admin/teacher/home",
    page: HomeTeacher,
    isShowHeader: true,
  },
  {
    path: "/admin/teacher/account-info",
    page: AccountInfo,
    isShowHeader: true,
  },
  {
    path: "/admin/teacher/class-list",
    page: ClassList,
    isShowHeader: true,
  },
  {
    path: "/admin/teacher/view-schedule",
    page: ViewSchedule,
    isShowHeader: true,
  },
  {
    path: "/admin/teacher/parent-meeting",
    page: ParentMeeting,
    isShowHeader: true,
  },
  {
    path: "/admin/acc-staff/student",
    page: ManagerStudent,
    isShowHeader: true,
  },
  {
    path: "/admin/acc-staff/schedule",
    page: MangerSchedule,
    isShowHeader: true,
  },
  {
    path: "/admin/acc-staff/classroom",
    page: MangerClassroom,
    isShowHeader: true,
  },
  {
    path: "/admin/acc-staff/subject",
    page: ManagerSubject,
    isShowHeader: true,
  },

  {
    path: "/admin/create/teacher",
    page: CreateTeacher,
    isShowHeader: true,
  },
  {
    path: "/admin/create/accountant",
    page: CreateAccountant,
    isShowHeader: true,
  },
  {
    path: "/admin/create/acc-staff",
    page: CreateAccStaff,
    isShowHeader: true,
  },

  {
    path: "/login",
    page: Login,
    isShowHeader: false,
  },
  {
    path: "/admin/settings",
    page: Settings,
    isShowHeader: true,
  },
  {
    path: "/sign-up",
    page: Logout,
    isShowHeader: false,
  },

  {
    path: "/forgot-password",
    page: ForgotPassword,
    isShowHeader: false,
  },
  {
    path: "*",
    page: NoPage,
    isShowHeader: false,
  },
];
export default routes;
