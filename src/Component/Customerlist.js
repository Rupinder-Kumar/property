import React,{useState,useEffect} from 'react';
import Layout from './Layout'
import  Axios  from "axios"
export default function Customerlist() {
	  const [list, setList] = useState([]);
	 useEffect(() => {
   
    Axios.get("http://localhost:8000/list_data")
      .then(res => {
        console.log(res);
        if (res.status == 200) {
			console.log(res.data)
          setList(res.data)
        }
      })
      .catch(err => console.log(err));
  }, [])
	
	
	
	
	
	
	
	
  return (
    <>
    <Layout/>
    <div className="tabellist">
          <div className="p-5">
            <table
              id="example"
              className="table table-striped table-bordered"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email Address</th>
                  <th>Phone</th>
                  
                  
                  <th>City</th>
                  <th>Region</th>
                 
                </tr>
              </thead>
              <tbody>
               {list.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                  <td>{item.email}</td>
				  
				  <td>{item.phone}</td>
				  
				  <td>{item.city}</td>
				  <td><button>Delete</button></td>
				  <td><a href="">Edit</a></td>
                 
                </tr>
              );
            })}
              </tbody>
            </table>
          </div>
          {/* /.container-fluid */}
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
      
      {/* End of Content Wrapper */}
    
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
  

      
    </>
  )
}
