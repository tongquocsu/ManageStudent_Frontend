import { useState, useEffect } from "react";
import "../assets/css/login.css";
import Slider from "../components/Slider";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSlider, setShowSlider] = useState(true);
  const handleSubmit = () => {
    // Xử lý việc gửi biểu mẫu
  };

  useEffect(() => {
    const handleResize = () => {
      setShowSlider(window.innerWidth > 768); 
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const Navigate = useNavigate();
  const handleNavigate = () => {
    Navigate("/forgot-password");
  };
  return (
    <div className="app-login-container">
      <div className="container text-center">
        <div className="flex justify-center">
          <div
            className={
              showSlider ? "w-1/2 login-container" : " w-full login-container"
            }
          >
            <div className="title">Xin chào mừng đến với MyApp</div>
            <div className="login-title my-2">Đăng nhập</div>
            <input
              className={
                showSlider
                  ? "w-2/3 my-2 login-input"
                  : "w-full my-2 login-input"
              }
              type="text"
              placeholder="Tài Khoản..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className={
                showSlider
                  ? "w-2/3 my-2 login-input"
                  : "w-full my-2 login-input"
              }
              type="password"
              placeholder="Mật khẩu..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className={
                showSlider
                  ? "check-password w-2/3 my-4"
                  : "check-password w-full my-4"
              }
            >
              <div className="checkbox-input">
                <input type="checkbox" />
                <span>Ghi nhớ tôi</span>
              </div>
              <div className="cursor-pointer hover:" onClick={handleNavigate}>
                Quên mật khẩu?
              </div>
            </div>
            <button
              className={
                showSlider ? "button-input w-2/3" : "button-input w-full"
              }
              onClick={handleSubmit}
            >
              Đăng nhập
            </button>
          </div>
          {showSlider && (
            <div className="w-1/2 my-4">
              <Slider />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
