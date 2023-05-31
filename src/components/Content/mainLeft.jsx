const mainLeft = () => {
  return (
    <div className="container content">
     <button className="content-button btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
      <ul className="content-menu">
        <li className="content-menu-item">
          <a href="#" className="content-menu-link"><i className="fa-sharp fa-solid fa-house"></i></a>
        </li>
        <li className="content-menu-item">
          <a href="#" className="content-menu-link"><i className="fa-solid fa-user"></i></a>
        </li>
        <li className="content-menu-item">
          <a href="#" className="content-menu-link"><i className="fa-solid fa-list"></i></a>
        </li>
        <li className="content-menu-item">
          <a href="#" className="content-menu-link"><i className="fa-solid fa-eye"></i></a>
        </li>
        <li className="content-menu-item">
          <a href="#" className="content-menu-link"><i className="fa-solid fa-list"></i></a>
        </li>
      </ul>
     
     </button>

      <div className="content-inner offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="content-header offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Danh sách</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="left content-body">
          <ul className="left-menu">
            <li className="left-menu-item">
              <a href="#" className="left-menu-link"><i className="fa-sharp fa-solid fa-house"></i>Dashboard</a>
            </li>
           
            <li className="left-menu-item">
              <a href="#" className="left-menu-link"><i className="fa-solid fa-user"></i> Thông tin tài khoản</a>
            </li>
            <li className="left-menu-item">
              <a href="#" className="left-menu-link"><i className="fa-solid fa-list"></i> Danh sách các lớp</a>
            </li>
            <li className="left-menu-item">
              <a href="#" className="left-menu-link"><i className="fa-solid fa-eye"></i>Xem lịch dạy</a>
            </li>
            <li className="left-menu-item">
              <a href="#" className="left-menu-link"><i className="fa-solid fa-list"></i>Lịch họp phụ huynh</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default mainLeft

