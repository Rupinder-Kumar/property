import React from 'react'

export default function Productslist() {
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
  <title>SB Admin 2 - create_product</title>
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
        <a className="nav-link" href="index.html">
          {" "}
          <i className="fas fa-fw fa-tachometer-alt" /> <span>Dashboard</span>
        </a>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading"> Interface </div>
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
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
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            {" "}
            <a className="collapse-item" href="customer-form.html">
              Create Customer
            </a>{" "}
            <a className="collapse-item" href="customer-list.html">
              Customer List
            </a>{" "}
          </div>
        </div>
      </li>
      {/* Nav Item - Utilities Collapse Menu */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          {" "}
          <i className="fa fa-industry" aria-hidden="true" />{" "}
          <span>Manufacturer</span>{" "}
        </a>
        <div
          id="collapseUtilities"
          className="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            {" "}
            <a className="collapse-item" href="manufacturer.html">
              Create Product
            </a>{" "}
            <a className="collapse-item" href="manufacturer-list.html">
              Manufacturer List
            </a>{" "}
          </div>
        </div>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          {" "}
          <i className="fas fa-fw fa-folder" /> <span>Product</span>{" "}
        </a>
        <div
          id="collapsePages"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            {" "}
            <a className="collapse-item" href="product-form.html">
              Create Product
            </a>{" "}
            <a className="collapse-item" href="product-list.html">
              Product List
            </a>{" "}
          </div>
        </div>
      </li>
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePages2"
          aria-expanded="true"
          aria-controls="collapsePages2"
        >
          {" "}
          <i className="fa fa-product-hunt" aria-hidden="true" />{" "}
          <span>Contracts</span>{" "}
        </a>
        <div
          id="collapsePages2"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <a className="collapse-item" href="create-contracts.html">
              Add New Contract
            </a>
            <a className="collapse-item" href="assing-rule.html">
              Assing Rule
            </a>
            <a className="collapse-item" href="contracts-list.html">
              Contract List
            </a>
          </div>
        </div>
      </li>
      {/* Nav Item - Charts */}
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          {" "}
          <i className="fas fa-fw fa-chart-area" /> <span>Charts</span>
        </a>
      </li>
      {/* Nav Item - Charts */}
      <li className="nav-item">
        <a className="nav-link" href="charts.html">
          {" "}
          <i className="fas fa-fw fa-chart-area" /> <span>Charts</span>
        </a>
      </li>
      {/* Nav Item - Tables */}
      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          {" "}
          <i className="fas fa-fw fa-table" /> <span>Tables</span>
        </a>
      </li>
      {/*--dev--*/}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePages2"
          aria-expanded="true"
          aria-controls="collapsePages2"
        >
          {" "}
          <i className="fa fa-product-hunt" aria-hidden="true" />{" "}
          <span>Dev</span>{" "}
        </a>
        <div
          id="collapsePages2"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded"> </div>
        </div>
      </li>
      {/* Divider */}
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
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  Valerie Luna
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
        {/* End of Topbar */}
        {/* Begin Page Content */}
        <div className="container">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div id="flex" className="row">
                <div className="col-lg-10">
                  <div className="p-5" id="myGroup">
                    <div className="texheadding">
                      <div className="left">
                        <h1 className="h4 text-gray-900 mb-4">
                          Create Product
                        </h1>
                        <div className="upload142">
                          <p>
                            {" "}
                            <a
                              className="btn btn-primary panel"
                              data-toggle="collapse"
                              href="#collapseExample_csv"
                              role="button"
                              aria-expanded="true"
                              aria-controls="collapseExample"
                            >
                              Upload VIA CSV
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="collapse"
                      id="collapseExample_csv"
                      data-parent="#myGroup"
                    >
                      <div className="card card-body">
                        <div id="row-1" className="form-group row">
                          <div className="col-sm-12 mb-3 mb-sm-0 uploadcsvdiv">
                            <div className="csv_file">
                              <label
                                className="tagname text_left"
                                htmlFor="file_upload"
                              >
                                File Upload
                              </label>
                              <input
                                type="file"
                                className="form-control form-control-user filepanel"
                                name="fileupl"
                                id="fileupl"
                              />
                            </div>
                            <div className="csv_submit">
                              <div className="csvbtn">
                                <input
                                  type="submit"
                                  name="btn_csv"
                                  id="btn_csv"
                                  className="btn btn-primary btn-user btn-block "
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="collapse show"
                      id="collapseExample_csv"
                      data-parent="#myGroup"
                    >
                      <div className="card card-body">
                        <form className="user">
                          <div id="row-1" className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <label className="tagname" htmlFor="part_no">
                                Part No
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-user"
                                name="part_no"
                                id="part_no"
                                placeholder="Part No"
                              />{" "}
                            </div>
                            <div className="col-sm-6">
                              <label className="tagname" htmlFor="suplier">
                                Supplier Name
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-user"
                                name="Suplier"
                                id="suplier"
                                placeholder="Supplier Name"
                              />{" "}
                            </div>
                          </div>
                          <div id="row-1" className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0 ">
                              <label className="tagname" htmlFor="shortd">
                                Short Description
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-user"
                                name="shortd"
                                id="short"
                                placeholder="Short Description"
                              />{" "}
                            </div>
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <label className="tagname" htmlFor="longd">
                                Long Description
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-user"
                                name="longd"
                                id="longd"
                                placeholder="Long Description"
                              />{" "}
                            </div>
                          </div>
                          <div id="row-1" className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <label
                                className="tagname"
                                htmlFor="distributionp"
                              >
                                Distribution Price
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-user"
                                name="distributionp"
                                id="distributionp"
                                placeholder="Distribution Price"
                              />{" "}
                            </div>
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <label className="tagname" htmlFor="msrp">
                                MSRP Price
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-user"
                                name="msrp"
                                id="msrp"
                                placeholder="MSRP Price"
                              />{" "}
                            </div>
                          </div>
                          <div id="row-1" className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <label className="tagname" htmlFor="quantity">
                                Quantity Per Case
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-user"
                                name="quantity"
                                id="quantity"
                                placeholder="Quantity Per Case"
                              />{" "}
                            </div>
                            <div className="col-sm-6 mb-3 mb-sm-0 ">
                              <label className="tagname" htmlFor="unitm">
                                Unit Measure
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-user"
                                name="unitm"
                                id="unitm"
                                placeholder="Unit Measure"
                              />{" "}
                            </div>
                          </div>
                          <div id="row-1" className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <label className="tagname" htmlFor="image-url">
                                Image URL
                              </label>
                              <input
                                type="text"
                                className="form-control form-control-user"
                                name="image-url"
                                id="image-url"
                                placeholder="Image URL"
                              />{" "}
                            </div>
                            <div className="col-sm-6 mb-3 mb-sm-0 "></div>
                          </div>
                          <div className="btnsub12">
                            <input
                              type="submit"
                              name="submit"
                              className="btn btn-primary btn-user btn-block"
                              id="submit"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /.container-fluid */}
  {/* End of Main Content */}
  {/* Footer */}
  <footer className="sticky-footer bg-white">
    <div className="container my-auto">
      <div className="copyright text-center my-auto">
        {" "}
        <span>Copyright © Your Website 2020</span>{" "}
      </div>
    </div>
  </footer>
  {/* End of Footer */}
  {/* End of Content Wrapper */}
  {/* End of Page Wrapper */}
  {/* Scroll to Top Button*/}
  <a className="scroll-to-top rounded" href="#page-top">
    {" "}
    <i className="fas fa-angle-up" />{" "}
  </a>
  {/* Logout Modal*/}
  <div
    className="modal fade"
    id="logoutModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Ready to Leave?
          </h5>
          <button
            className="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
          >
            {" "}
            <span aria-hidden="true">×</span>{" "}
          </button>
        </div>
        <div className="modal-body">
          Select "Logout" below if you are ready to end your current session.
        </div>
        <div className="modal-footer">
          <button
            className="btn btn-secondary"
            type="button"
            data-dismiss="modal"
          >
            Cancel
          </button>{" "}
          <a className="btn btn-primary" href="login.html">
            Logout
          </a>{" "}
        </div>
      </div>
    </div>
  </div>

</>

      
    </>
  )
}
