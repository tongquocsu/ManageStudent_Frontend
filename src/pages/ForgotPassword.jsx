import { useState, useEffect, useRef } from "react";
import "../assets/css/login.css";
import Slider from "../components/Slider";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [forgotEmail, setForgotEmail] = useState("");
  const [showSlider, setShowSlider] = useState(true);
  const emailInputRef = useRef(null);

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
    Navigate("/login");
  };
  useEffect(() => {
    emailInputRef.current.focus();
  }, []);
  return (
    <div className="app-login-container">
      <div className="container text-center">
        <div className="flex justify-center">
          <div
            className={
              showSlider ? "w-1/2 login-container" : " w-full login-container"
            }
          >
            <div className="title my-2">Xin chào mừng đến với MyApp</div>
            <div className="login-title my-2">Quên mật khẩu</div>

            <input
              ref={emailInputRef}
              className={
                showSlider
                  ? "w-2/3 my-2 login-input"
                  : "w-full my-2 login-input"
              }
              type="text"
              placeholder="Nhập tài khoản đã đăng ký..."
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              required
            />
            <div
              className={
                showSlider
                  ? "check-password w-2/3 my-4"
                  : "check-password w-full my-4"
              }
            >
              <div
                className="cursor-pointer flex-row-reverse ml-auto"
                onClick={handleNavigate}
              >
                Hủy
              </div>
            </div>
            <button
              className={
                showSlider ? "button-input w-2/3" : "button-input w-full"
              }
              onClick={handleSubmit}
            >
              Gửi mật khẩu mới
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

export default ForgotPassword;
