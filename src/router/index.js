import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ManageAcademic from "../pages/ManageAcademic/ManageAcademic";
import NotPage from "../pages/NoPage/NoPage";

const routes = [
  {
    path: "/login",
    page: Login,
    isShowHeader: false,
  },
  {
    path: "/forgot-password",
    page: ForgotPassword,
    isShowHeader: false,
  },
  {
    path: "/",
    page: Home,
    isShowHeader: true,
  },
  {
    path: "/manager-academic",
    page: ManageAcademic,
    isShowHeader: true,
  },
  {
    path: "*",
    page: NotPage,
    isShowHeader: false,
  },
];
export default routes;
