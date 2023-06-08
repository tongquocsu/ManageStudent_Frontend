import { useState, useEffect, useRef } from "react";
import Slider from "../../components/Slider";
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
    <div className="flex flex-col justify-center items-center text-center">
      <div className="container text-center">
        <div className="flex justify-center">
          <div
            className={
              showSlider
                ? "w-1/2 flex flex-col mx-auto items-center justify-center"
                : " w-full flex flex-col mx-auto items-center justify-center"
            }
          >
            <div className="text-3xl font-bold">
              Xin chào mừng đến với MyApp
            </div>
            <div className="text-[60px] font-[600] my-4">Quên mật khẩu</div>

            <input
              ref={emailInputRef}
              className={
                showSlider
                  ? "w-2/3 my-2 mx-auto rounded-md h-12 p-2 text-lg"
                  : "w-full my-2 mx-auto rounded-md h-12 p-2 text-lg"
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
                  ? "flex justify-between mx-auto w-2/3 my-4"
                  : "flex justify-between mx-auto w-full my-4"
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
                showSlider
                  ? "mx-auto h-12 rounded-md text-white bg-black hover:opacity-80 w-2/3"
                  : "mx-auto h-12 rounded-md text-white bg-black hover:opacity-80 w-full"
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
