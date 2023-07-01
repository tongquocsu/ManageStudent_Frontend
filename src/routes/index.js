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
