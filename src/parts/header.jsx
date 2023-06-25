const index = () => {
  return (
    <header className="container">
      <div className="header row col-lg-12">
        <div className="header-container">
          <img src="./images/logo.png 2x" alt="" className="header-logo" />
          <ul className="header-menu">
            <li className="header-menu-item">
              <a href="#" className="header-menu-link">Khoa hoc</a>
            </li>
            <li className="header-menu-item">
              <a href="#" className="header-menu-link">Thong bao</a>
            </li>
            <li className="header-menu-item">
              <a href="#" className="header-menu-link">Lien he</a>
            </li>
            <li className="header-menu-item">
              <a href="#" className="header-menu-link">Tin tuc</a>
            </li>
          </ul>
          
          <div className="header-auth">
            <a href="#" className="header-signin">Signin</a>
            <a href="#" className="button button--outline">Signup</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default index
