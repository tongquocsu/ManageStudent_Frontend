import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import ManagerUser from "../pages/Admin/ManagerUser";

import AccountInfo from "../pages/Admin/Teacher/AccountInfo";
import HomeTeacher from "../pages/Admin/Teacher/Home";
import ClassList from "../pages/Admin/Teacher/ClassList";
import ViewSchedule from "../pages/Admin/Teacher/ViewSchedule";
import ParentMeeting from "../pages/Admin/Teacher/ParentMeeting";
import Settings from "../pages/Admin/Settings";
import Logout from "../pages/Logout";
import News from "../pages/News";
const routes = [
  {
    path: "/admin",
    page: Home,
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
