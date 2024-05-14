import React,{ useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";
import './global.css';


export default function SidebarLayout() {
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
  </div>
</>
    </>
  )
}
