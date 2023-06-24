import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import routes from "../src/routes/index.js";
import { ToastContainer } from "react-toastify";

function App() {
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
                  <Page />
                </>
              }
            />
          );
        })}
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
