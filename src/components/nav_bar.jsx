import logo from './../assets/images/logo-mini.svg'

function NavBar(){
    return(

        <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-stretch">
    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
      <span className="mdi mdi-chevron-double-left"></span>
    </button>
    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <a className="navbar-brand brand-logo-mini" href="index.html">
        <img src="{logo}" alt="logo" /></a>
    </div>
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <a className="nav-link" id="messageDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="mdi mdi-email-outline"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-left navbar-dropdown preview-list" aria-labelledby="messageDropdown">
          <h6 className="p-3 mb-0 font-weight-semibold">Messages</h6>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <img src="assets/images/faces/face1.jpg" alt="image" className="profile-pic" />
            </div>
            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Mark send you a message</h6>
              <p className="text-gray mb-0"> 1 Minutes ago </p>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <img src="assets/images/faces/face6.jpg" alt="image" className="profile-pic" />
            </div>
            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Cregh send you a message</h6>
              <p className="text-gray mb-0"> 15 Minutes ago </p>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <img src="assets/images/faces/face7.jpg" alt="image" className="profile-pic" />
            </div>
            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 className="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
              <p className="text-gray mb-0"> 18 Minutes ago </p>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <h6 className="p-3 mb-0 text-center text-primary font-13">4 new messages</h6>
        </div>
      </li>
      <li className="nav-item dropdown ms-3">
        <a className="nav-link" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
          <i className="mdi mdi-bell-outline"></i>
        </a>
        <div className="dropdown-menu dropdown-menu-left navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
          <h6 className="px-3 py-3 font-weight-semibold mb-0">Notifications</h6>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-success">
                <i className="mdi mdi-calendar"></i>
              </div>
            </div>
            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 className="preview-subject font-weight-normal mb-0">New order recieved</h6>
              <p className="text-gray ellipsis mb-0"> 45 sec ago </p>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-warning">
                <i className="mdi mdi-settings"></i>
              </div>
            </div>
            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 className="preview-subject font-weight-normal mb-0">Server limit reached</h6>
              <p className="text-gray ellipsis mb-0"> 55 sec ago </p>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <div className="preview-icon bg-info">
                <i className="mdi mdi-link-variant"></i>
              </div>
            </div>
            <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 className="preview-subject font-weight-normal mb-0">Kevin karvelle</h6>
              <p className="text-gray ellipsis mb-0"> 11:09 PM </p>
            </div>
          </a>
          <div className="dropdown-divider"></div>
          <h6 className="p-3 font-13 mb-0 text-primary text-center">View all notifications</h6>
        </div>
      </li>
    </ul>
    <ul className="navbar-nav navbar-nav-right">
      <li className="nav-item nav-logout d-none d-md-block me-3">
        <a className="nav-link" href="#">Status</a>
      </li>
      <li className="nav-item nav-logout d-none d-md-block">
        <button className="btn btn-sm btn-danger">Trailing</button>
      </li>
      <li className="nav-item nav-profile dropdown d-none d-md-block">
        <a className="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
          <div className="nav-profile-text">English </div>
        </a>
        <div className="dropdown-menu center navbar-dropdown" aria-labelledby="profileDropdown">
          <a className="dropdown-item" href="#">
            <i className="flag-icon flag-icon-bl me-3"></i> French </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">
            <i className="flag-icon flag-icon-cn me-3"></i> Chinese </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">
            <i className="flag-icon flag-icon-de me-3"></i> German </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">
            <i className="flag-icon flag-icon-ru me-3"></i>Russian </a>
        </div>
      </li>
      <li className="nav-item nav-logout d-none d-lg-block">
        <a className="nav-link" href="index.html">
          <i className="mdi mdi-home-circle"></i>
        </a>
      </li>
    </ul>
    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
      <span className="mdi mdi-menu"></span>
    </button>
  </div>
</nav>
    );

}

export default NavBar;