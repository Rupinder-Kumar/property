import React,{ useState, useEffect } from 'react';
import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";
import './global.css';


export default function Layout() {
const [name, setName] = useState(null);
 const navigate = useNavigate();
	useEffect(()=>{
		const storedValue = sessionStorage.getItem('phoneNumber');
		const userType = sessionStorage.getItem('userType');
		const username = sessionStorage.getItem('username');
			console.log('Stored value:', userType);
			setName(username);
			 if (userType !== 'admin') {
      navigate('/login');
    }
	},[])
const logout = () => {
  sessionStorage.clear();
  navigate('/login');
};
  return (
    <>
   <>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <link rel="stylesheet" href="form1.css" />
  <title>SB Admin 2 - customer-form</title>
  <meta charSet="utf-8" />
  {/* Custom fonts for this template*/}
  <link
    href="vendor/fontawesome-free/css/all.min.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
    rel="stylesheet"
  />
  {/* Custom styles for this template*/}
  <link href="css/sb-admin-2.min.css" rel="stylesheet" />
  {/* Page Wrapper */}
  <div id="wrapper">
    {/* Sidebar */}
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon">
          <img src="img/logo-bio.png" />
        </div>
        {/* <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div> */}
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      
      {/* Nav Item - Dashboard */}
      <li className="nav-item">
        <a className="nav-link" href="/Dashboard">
          {" "}
          <i className="fas fa-fw fa-tachometer-alt" /> <span>Dashboard</span>
        </a>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item active">
        <a
          className="nav-link"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          {" "}
          <i
            className="fa fa-user"
            aria-hidden="true"
          /> <span>Customer</span>{" "}
        </a>
        <div
          id="collapseTwo"
          className="collapse show"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            {" "}
            <a className="collapse-item active" href="/Propertyinsert">
              Add Property
            </a>{" "}
            <a className="collapse-item" href="/Propertylist">
              Property List
            </a>{" "}
			<a className="collapse-item" href="/VendorPropertyadd">
              Vendor Property Add
            </a>{" "}
			<a className="collapse-item" href="/VendorProperties">
              Vendor Property List
            </a>{" "}
			<a className="collapse-item" href="/AdsProperties">
              Ads Properties
            </a>{" "}
			
          </div>
        </div>
      </li>
      {/* Nav Item - Utilities Collapse Menu */}
     
      {/* Divider */}
      <hr className="sidebar-divider" />
     
 
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>
    {/* End of Sidebar */}
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        {/* Topbar */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          {/* Sidebar Toggle (Topbar) */}
          <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle mr-3"
          >
            {" "}
            <i className="fa fa-bars" />{" "}
          </button>
          {/* Topbar Search */}
          <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input
                type="text"
                className="form-control bg-light border-0 small"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  {" "}
                  <i className="fas fa-search fa-sm" />{" "}
                </button>
              </div>
            </div>
          </form>
          {/* Topbar Navbar */}
          <ul className="navbar-nav ml-auto">
            {/* Nav Item - Search Dropdown (Visible Only XS) */}
            <li className="nav-item dropdown no-arrow d-sm-none">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="searchDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {" "}
                <i className="fas fa-search fa-fw" />{" "}
              </a>
              {/* Dropdown - Messages */}
              <div
                className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown"
              >
                <form className="form-inline mr-auto w-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        {" "}
                        <i className="fas fa-search fa-sm" />{" "}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            {/* Nav Item - Alerts */}
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {" "}
                <i className="fas fa-bell fa-fw" />
                {/* Counter - Alerts */}
                <span className="badge badge-danger badge-counter">
                  3+
                </span>{" "}
              </a>
              {/* Dropdown - Alerts */}
              <div
                className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown"
              >
                <h6 className="dropdown-header">Alerts Center</h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-primary">
                      {" "}
                      <i className="fas fa-file-alt text-white" />{" "}
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 12, 2019</div>{" "}
                    <span className="font-weight-bold">
                      A new monthly report is ready to download!
                    </span>{" "}
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-success">
                      {" "}
                      <i className="fas fa-donate text-white" />{" "}
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 7, 2019</div>{" "}
                    $290.29 has been deposited into your account!{" "}
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="mr-3">
                    <div className="icon-circle bg-warning">
                      {" "}
                      <i className="fas fa-exclamation-triangle text-white" />{" "}
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">December 2, 2019</div>{" "}
                    Spending Alert: We've noticed unusually high spending for
                    your account.{" "}
                  </div>
                </a>{" "}
                <a
                  className="dropdown-item text-center small text-gray-500"
                  href="#"
                >
                  Show All Alerts
                </a>{" "}
              </div>
            </li>
            {/* Nav Item - Messages */}
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="messagesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {" "}
                <i className="fas fa-envelope fa-fw" />
                {/* Counter - Messages */}
                <span className="badge badge-danger badge-counter">7</span>{" "}
              </a>
              {/* Dropdown - Messages */}
              <div
                className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="messagesDropdown"
              >
                <h6 className="dropdown-header">Message Center</h6>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    {" "}
                    <img
                      className="rounded-circle"
                      src="https://source.unsplash.com/fn_BT9fwg_E/60x60"
                      alt=""
                    />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">
                      Hi there! I am wondering if you can help me with a problem
                      I've been having.
                    </div>
                    <div className="small text-gray-500">
                      Emily Fowler · 58m
                    </div>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    {" "}
                    <img
                      className="rounded-circle"
                      src="https://source.unsplash.com/AU4VPcFN4LE/60x60"
                      alt=""
                    />
                    <div className="status-indicator" />
                  </div>
                  <div>
                    <div className="text-truncate">
                      I have the photos that you ordered last month, how would
                      you like them sent to you?
                    </div>
                    <div className="small text-gray-500">Jae Chun · 1d</div>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    {" "}
                    <img
                      className="rounded-circle"
                      src="https://source.unsplash.com/CS2uCrpNzJY/60x60"
                      alt=""
                    />
                    <div className="status-indicator bg-warning" />
                  </div>
                  <div>
                    <div className="text-truncate">
                      Last month's report looks great, I am very happy with the
                      progress so far, keep up the good work!
                    </div>
                    <div className="small text-gray-500">
                      Morgan Alvarez · 2d
                    </div>
                  </div>
                </a>
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <div className="dropdown-list-image mr-3">
                    {" "}
                    <img
                      className="rounded-circle"
                      src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                      alt=""
                    />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div>
                    <div className="text-truncate">
                      Am I a good boy? The reason I ask is because someone told
                      me that people say this to all dogs, even if they aren't
                      good...
                    </div>
                    <div className="small text-gray-500">
                      Chicken the Dog · 2w
                    </div>
                  </div>
                </a>{" "}
                <a
                  className="dropdown-item text-center small text-gray-500"
                  href="#"
                >
                  Read More Messages
                </a>{" "}
              </div>
            </li>
            <div className="topbar-divider d-none d-sm-block" />
            {/* Nav Item - User Information */}
			<li class="logout-button" onClick={logout}>
			Logout
			</li>
            <li className="nav-item dropdown no-arrow">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {" "}
                <span className="mr-2 d-none d-lg-inline text-gray-600 small user-name">
				{name}
                </span>{" "}
                <img
                  className="img-profile rounded-circle"
                  src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
                />{" "}
              </a>
              {/* Dropdown - User Information */}
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <a className="dropdown-item" href="#">
                  {" "}
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />{" "}
                  Profile{" "}
                </a>
                <a className="dropdown-item" href="#">
                  {" "}
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />{" "}
                  Settings{" "}
                </a>
                <a className="dropdown-item" href="#">
                  {" "}
                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />{" "}
                  Activity Log{" "}
                </a>
                <div className="dropdown-divider" />
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  {" "}
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />{" "}
                  Logout{" "}
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</>




      
    </>
  )
}
