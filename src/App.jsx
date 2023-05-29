import "./App.css";
import { DatePicker } from "antd";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
      <DatePicker />
    </>
  );
}

export default App;
