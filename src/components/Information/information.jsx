function information(props) {
    return (
      <div className="border-1 border-[#e0d0d0] py-[30px] rounded-lg flex items-center flex-col">
          <h2 className="text-xl font-extrabold">Top</h2>
          <p>{props.desc}</p>
          <h2 className="text-[24px] text-[#515ddd] font-extrabold pt-[25px] relative left-[-20px] pb-[20px]">{props.percent}</h2>
          <h2 className="pl-[80px] relative top-[-30px]">{props.explain}</h2>
          <div >
              <ul className="px-[30px] mb-[30px]">
                <div className={props.classInfo1}>
                    <i className="fa-solid fa-circle pr-3 "></i>
                    <li className="leading-loose font-semibold">{props.detail1}</li>
                </div>
                <div className={props.classInfo2}>
                    <i className="fa-solid fa-circle pr-3"></i>
                    <li className="leading-loose font-semibold">{props.detail2}</li>
                </div>
                <div className={props.classInfo3}>
                    <i className="fa-solid fa-circle pr-3"></i>
                    <li className="leading-loose font-semibold">{props.detail3}</li>
                </div>
              </ul>
          </div>
          <button className="border-solid border-1 border-sky-500  mt-auto px-4 py-2 rounded-[30px] text-[#515ddd] font-bold">Xem ngay</button>
      </div>
    )
  }
  
  export default information
  