import Sidebar from "../../../../components/Sidebar";

function ParentMeeting() {
  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4">
        <div className="ml-[10px]">
          <div className="border-1 border-[#b5afaf] rounded-lg">
            <div className="flex flex-col items-center mt-[30px]">
              <p>Cộng hoà xã hội chủ nghĩa việt nam </p>
              <p> Độc lập - Tự do - Hạnh phúc</p>
              <h2 className="letter-name font-bold text-[18px] my-5">
                Thư mời họp phụ huynh
              </h2>
            </div>

            <div className="pl-[70px] leading-8">
              <p>Kính gửi phụ huynh em: </p>
              <p>Học sinh lớp: </p>
              <p>Thời gian họp vào lúc: </p>
              <p>Đến tại hội trường của trường THCS .....</p>
              <p>
                Để thông báo tới quý phụ huynh kết quả học tập và rèn luyện của
                học sinh năm ....
              </p>
              <p>
                Rất mong quý phụ huynh tham dự đúng giờ <br /> Xin trân trọng
                cảm ơn.{" "}
              </p>
            </div>

            <div className="flex flex-col items-end">
              <p className="pr-[30px]">......, ngày 19 tháng 06 năm 2023</p>
              <p className="pr-[120px] pb-[150px]">GVCN</p>
              <button className="border-1 mt-auto px-4 py-2 rounded-[30px] text-[#3F3030] bg-[#FDCC58] font-bold mr-[50px] mb-[50px] hover:bg-[#515ddd] hover:text-[#fff]">
                Gửi tất cả
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ParentMeeting;
