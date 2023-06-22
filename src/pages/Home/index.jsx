function index() {
    return (
        <div className="mt-3 mb-3">
            <div className="grid grid-rows-1 w-full h-72 mb-3">
                <div className="grid-cols-2 flex ">
                    <div className="w-5/12 ">
                        <div className="grid-rows-2 float-left mr-1">
                            <div className="h-36 mb-1 ">
                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner h-36 rounded-3xl">
                                        <div className="carousel-item active h-100">
                                            <img className="d-block h-100 object-fill" src="https://bris.edu.vn/wp-content/uploads/2021/01/DSC08491blur-1.jpg"  alt="..."/>
                                        </div>
                                        <div className="carousel-item h-100">
                                            <img className="d-block h-100 object-fill " src="https://onlinica.com/static/vtca/new_design_assests/image/Course-banner.d3616cf7bbc2.jpeg"  alt="..."/>
                                        </div>
                                        <div className="carousel-item  h-100 w-100">
                                            <img className="d-block  object-fill" src="https://bris.edu.vn/wp-content/uploads/2021/03/7.jpg"  alt="..."/>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            
                            </div>
                            <div className="h-36">
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                    
                                    <div className="carousel-inner h-36 rounded-3xl">
                                        <div className="carousel-item active h-100 ">
                                            <img className="d-block w-100 h-100 object-fill" src="https://www.rongvietedu.vn/images/bai-viet/cac-hoat-dong/tu-van-va-can-thiep-tri-lieu-tam-ly/tin-tuc/lo-trinh-hoc-tai-rong-viet-6.jpg"  alt="..."/>
                                        </div>
                                        <div className="carousel-item h-100">
                                            <img className="d-block w-100 h-100 object-fill" src="https://bris.edu.vn/wp-content/uploads/2021/01/message_banner.jpg"  alt="..."/>
                                        </div>
                                        <div className="carousel-item h-100 w-100">
                                            <img className="d-block w-100 h-100 object-fill " src="https://globalonlineacademy.org/stockPhotos/_700x420_crop_center-center_none/stefan-stefancik-257625-unsplash.jpg"  alt="..."/>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="w-7/12 ">
                        <div id="carouselExampleInterval" className="carousel slide rounded-lg" data-bs-ride="carousel">
                            <div className="carousel-inner h-72 rounded-3xl">
                                <div className="carousel-item active " data-bs-interval="10000">
                                    <img className="d-block w-100 h-100" src="https://hocmai.vn/media/images/home/desktop/patchung522x324.png"  alt="..."/>
                                </div>
                                <div className="carousel-item w-100 h-100" data-bs-interval="2000">
                                    <img className="d-block w-100 h-100 object-fill" src="https://hocmai.vn/media/images/home/desktop/715x400-7-2.png"  alt="..."/>
                                </div>
                                <div className="carousel-item  w-100 h-100 ">
                                    <img className="d-block w-100 h-100 object-fill" src="https://hocmai.vn/media/images/home/desktop/banner-website-1.jpg"  alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="grid grid-cols-3 gap-4 ">
                <div className="border-1 border-[#e0d0d0] py-[30px] rounded-lg flex items-center flex-col">
                    <h2 className="text-xl font-extrabold">Top</h2>
                    <p>Tổng điểm khá trở lên</p> 
                    <h2 className="text-[24px] text-[#515ddd] font-extrabold pt-[25px] relative left-[-20px] pb-[20px]">50%</h2>
                    <h2 className="pl-[80px] relative top-[-30px]">/Học kỳ</h2>
                    <div>
                        <ul className="px-[30px] mb-[30px]">
                        <div className="flex items-start info-green">
                            <i className="fa-solid fa-circle pr-3 "></i>
                            <li className="leading-loose font-semibold">Thanh tich cao nhat</li>
                        </div>
                        <div className="flex items-start info-green">
                            <i className="fa-solid fa-circle pr-3"></i>
                            <li className="leading-loose font-semibold">So sanh diem so</li>
                        </div>
                        <div className="flex items-start info-red">
                            <i className="fa-solid fa-circle pr-3"></i>
                            <li className="leading-loose font-semibold">Hoc sinh co diem duoi trung binh</li>
                        </div>
                        </ul>
                    </div>
                    <button className="border-solid border-1 border-sky-500  mt-auto px-4 py-2 rounded-[30px] text-[#515ddd] font-bold">Xem ngay</button>
                </div>
                <div className="border-1 border-[#e0d0d0] py-[30px] rounded-lg flex items-center flex-col">
                    <h2 className="text-xl font-extrabold">Top</h2>
                    <p>Tỉ lệ hoàn thành học phí</p> 
                    <h2 className="text-[24px] text-[#515ddd] font-extrabold pt-[25px] relative left-[-20px] pb-[20px]">75%</h2>
                    <h2 className="pl-[80px] relative top-[-30px]">/Học kỳ</h2>
                    <div>
                        <ul className="px-[30px] mb-[30px]">
                        <div className="flex items-start info-green">
                            <i className="fa-solid fa-circle pr-3 "></i>
                            <li className="leading-loose font-semibold">Các lớp đã hoàn thành học phí</li>
                        </div>
                        <div className="flex items-start info-red">
                            <i className="fa-solid fa-circle pr-3"></i>
                            <li className="leading-loose font-semibold">Học sinh chưa hoàn thành học phí</li>
                        </div>
                        </ul>
                    </div>
                    <button className="border-solid border-1 border-sky-500  mt-auto px-4 py-2 rounded-[30px] text-[#515ddd] font-bold">Xem ngay</button>
                </div>
                <div className="border-1 border-[#e0d0d0] py-[30px] rounded-lg flex items-center flex-col">
                    <h2 className="text-xl font-extrabold">Top</h2>
                    <p>Số học sinh vắng</p> 
                    <h2 className="text-[24px] text-[#515ddd] font-extrabold pt-[25px] relative left-[-20px] pb-[20px]">2</h2>
                    <h2 className="pl-[50px] relative top-[-30px]">HS/Lớp</h2>
                    <div>
                        <ul className="px-[30px] mb-[40px]">
                        <div className="flex items-start info-green">
                            <i className="fa-solid fa-circle pr-3 "></i>
                            <li className="leading-loose font-semibold">Các lớp hoàn thành xuất sắc</li>
                        </div>
                        <div className="flex items-start info-red">
                            <i className="fa-solid fa-circle pr-3"></i>
                            <li className="leading-loose font-semibold">Số học sinh vắng ở các lớp</li>
                        </div>
                        </ul>
                    </div>
                    <button className="border-solid border-1 border-sky-500  mt-auto px-4 py-2 rounded-[30px] text-[#515ddd] font-bold">Xem ngay</button>
                </div>
                
            </div>
        </div>
    ) 
}

export default index;

