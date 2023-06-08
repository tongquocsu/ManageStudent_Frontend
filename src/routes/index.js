import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
const routes = [
  {
    path: "/",
    page: Home,
    isShowHeader: true,
  },

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
    path: "*",
    page: NoPage,
    isShowHeader: false,
  },
];
export default routes;
