import "./App.css";
import Header from "./components/Header";
import { Routes, Route, useNavigate } from "react-router-dom";
import routes from "../src/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const Navigate = useNavigate();
  const getAccessToken = () => {
    return localStorage.getItem("access_token");
  };

  return (
    <div>
      <Routes>
        {routes.map((route) => {
          const Page = route.page;
          const isShowHeader = route.isShowHeader;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <>
                  {isShowHeader && <Header />}
                  {route.path === "/login" || getAccessToken() ? (
                    <Page />
                  ) : (
                    <Navigate to="/login" />
                  )}
                </>
              }
            />
          );
        })}
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
