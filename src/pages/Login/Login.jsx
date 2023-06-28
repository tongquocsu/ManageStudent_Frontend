import { useState, useEffect } from "react";
import Slider from "../../components/Slider";
import { useNavigate } from "react-router-dom";
import image from "../../assets/slider/slider.png";
import { loginUser } from "../../service/userService";
import Loading from "../../components/Loading";
// eslint-disable-next-line react/prop-types
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSlider, setShowSlider] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const arrImages = [image, image, image];
  const Navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const data = await loginUser(email, password);
      if (data.success && data.account.role == "schoolStaff") {
        if (data?.token) {
          Navigate("/manager-academic");
        }
        localStorage.setItem("access_token", data.token);
      } else if (data.success && data.account.role == "Admin") {
        if (data?.token) {
          Navigate("/manager-admin");
        }
        localStorage.setItem("access_token", data.token);
      } else if (data.success && data.account.role == "accoutant") {
        if (data?.token) {
          Navigate("/manager-accoutant");
        }
        localStorage.setItem("access_token", data.token);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
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
  const handleNavigate = () => {
    Navigate("/forgot-password");
  };
  return (
    <Loading isLoading={isLoading}>
      <div className="flex flex-col justify-center items-center ">
        <div className="container ">
          <div className="flex">
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
              <div className="text-[60px] font-[600] my-4">Đăng nhập</div>
              <input
                className={
                  showSlider
                    ? "w-2/3 my-2 mx-auto rounded-md h-12 p-2 text-lg"
                    : "w-full my-2 mx-auto rounded-md h-12 p-2 text-lg"
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
                    ? "w-2/3 my-2 mx-auto rounded-md h-12 p-2 text-lg"
                    : "w-full my-2 mx-auto rounded-md h-12 p-2 text-lg"
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
                    ? "flex justify-between mx-auto w-2/3 my-4"
                    : "flex justify-between mx-auto w-full my-4"
                }
              >
                <div className="checkbox-input">
                  <input type="checkbox" />
                  <span className="mx-1">Ghi nhớ tôi</span>
                </div>
                <div className="cursor-pointer hover:" onClick={handleNavigate}>
                  Quên mật khẩu?
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
                Đăng nhập
              </button>
            </div>
            {showSlider && (
              <div className="w-1/2 my-4">
                <Slider arrImages={arrImages} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Loading>
  );
}

export default Login;
