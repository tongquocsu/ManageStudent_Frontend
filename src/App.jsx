import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import routes from "../src/router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
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
