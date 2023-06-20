import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
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
