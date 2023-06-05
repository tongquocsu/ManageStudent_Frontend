import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
const routes = [{
        path: "/login",
        page: Login,
        isShowHeader: false
    },
    {
        path: "/forgot-password",
        page: ForgotPassword,
        isShowHeader: false
    }
];
export default routes