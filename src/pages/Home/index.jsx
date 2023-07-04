import Slider from '/src/components/teacherComp/Slider/slider'
import InfoDetail from '/src/components/teacherComp/Information/information'

function index() {
  return (
      <div>
          <div className="grid grid-rows-1 w-full h-72 mb-3 mt-3">
              <div className="grid-cols-2 flex ">
                  <div className="w-5/12 ">
                      <div className="grid-rows-2 float-left mr-1">
                          <div className="h-36 mb-1 ">
                              <Slider 
                                  class1="carousel-inner h-36 rounded-3xl"
                                  Id="carouselExampleControls"
                                  image1="/src/assets/images/slider1.jpg" 
                                  image2="/src/assets/images/slider2.jpeg"
                                  image3="/src/assets/images/slider3.jpg"
                                  target="#carouselExampleControls"
                              />
                          </div>
                          <div className="h-36">
                              <Slider 
                                  class1="carousel-inner h-36 rounded-3xl"
                                  Id="carouselExampleIndicators"
                                  image1="/src/assets/images/slider2.jpeg"
                                  image2="/src/assets/images/slider5.jpg"
                                  image3="/src/assets/images/slider6.jpg"
                                  target="#carouselExampleIndicators"
                              />
                          </div>
                      </div>
                  </div>
                  <div className="w-7/12 ">
                      <Slider 
                          class1="carousel-inner h-72 rounded-3xl"
                          Id="carouselExampleInterval"
                          image1="/src/assets/images/slider6.jpg" 
                          image2="/src/assets/images/slider8.png"
                          image3="/src/assets/images/slider9.jpg"
                          target="#carouselExampleInterval"
                      />
                  </div>  
                  </div>
          </div>

          <div className="grid grid-cols-3 gap-4 ">
              <InfoDetail 
                  desc= "Tổng điểm khá trở lên"
                  percent= "50%"
                  explain = "/Học kỳ"
                  classInfo1 ="flex items-start info-green"
                  classInfo2 ="flex items-start info-green"
                  classInfo3 ="flex items-start info-red"
                  detail1 = "Thành tích cao nhat"
                  detail2 = "So sanh diem so"
                  detail3 = "Hoc sinh co diem duoi trung binh"
              />
              <InfoDetail 
                  desc= "Tỉ lệ hoàn thành học phí"
                  percent= "75%"
                  explain = "/Học kỳ"
                  classInfo1="flex items-start info-green"
                  classInfo2="flex items-start info-red"
                  classInfo3="flex items-start info-white"
                  detail1 = "Các lớp đã hoàn thành học phí"
                  detail2 = "Học sinh chưa hoàn thành học phí"

              />
              <InfoDetail 
                  desc= "Số học sinh vắng"
                  percent= "20"
                  explain = "Học sinh"
                  classInfo1="flex items-start info-green"
                  classInfo2="flex items-start info-red"
                  classInfo3="flex items-start info-white"
                  detail1 = "Các lớp hoàn thành xuất sắc"
                  detail2 = "Số học sinh vắng ở các lớp"
              />
          </div>
      </div>
  ) 
}

export default index