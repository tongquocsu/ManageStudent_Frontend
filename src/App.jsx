import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import routes from "../src/routes/index.js";
function App() {
  return (
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
  );
}

export default App;
