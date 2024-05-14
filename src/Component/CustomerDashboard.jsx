import React from 'react'
import CustomerLayout from './CustomerLayout'

export default function CustomerDashboard() {
  return (
    <>
    <CustomerLayout/>
    
    <div className='das-content'>
    <h2>Welcome to Customer</h2>
	
    <>
        {/* Begin Page Content */}
        <div className="container-fluid dashboard">
          {/* Page Heading */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        
          </div>
          {/* Content Row */}
          <div className="row">
			
            {/* Area Chart */}
            
            {/* Pie Chart */}
            <div className="col-xl-4 col-lg-5">
              <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
               
                {/* Card Body */}
                <div className="card-body">
                  <div className="chart-pie pt-4 pb-2">
                    <canvas id="myPieChart" />
                  </div>
                  <div className="mt-4 text-center small">
                    <span className="mr-2">
                      <i className="fas fa-circle text-primary" /> Direct
                    </span>
                    <span className="mr-2">
                      <i className="fas fa-circle text-success" /> Social
                    </span>
                    <span className="mr-2">
                      <i className="fas fa-circle text-info" /> Referral
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Content Row */}
          <div className="row">
            {/* Content Column */}
            <div className="col-lg-6 mb-4">
              {/* Project Card Example */}
              
              
              {/* Approach */}
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Development Approach
                  </h6>
                </div>
                <div className="card-body">
                  <p>
                    SB Admin 2 makes extensive use of Bootstrap 4 utility
                    classes in order to reduce CSS bloat and poor page
                    performance. Custom CSS classes are used to create custom
                    components and custom utility classes.
                  </p>
                  <p className="mb-0">
                    Before working with this theme, you should become familiar
                    with the Bootstrap framework, especially the utility
                    classes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    
      {/* End of Main Content */}
      {/* Footer */}
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright © Your Website 2020</span>
          </div>
        </div>
      </footer>
      {/* End of Footer */}
    
  {/* End of Page Wrapper */}
  {/* Scroll to Top Button*/}
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" />
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
            <span aria-hidden="true">×</span>
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
          </button>
          <a className="btn btn-primary" href="login.html">
            Logout
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Bootstrap core JavaScript*/}
  {/* Core plugin JavaScript*/}
  {/* Custom scripts for all pages*/}
  {/* Page level plugins */}
  {/* Page level custom scripts */}
</>


    </div>
    
    </>
  )
}
