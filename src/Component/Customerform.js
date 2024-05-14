import React,{useState} from 'react';
import Layout from './Layout';

export default function Customerform() {
	
	const [fname,setName]=useState("");
	
	const [lname,setLname]=useState("");
	
	const [email,setEmail]=useState("");
	
	const   show =(e)=>
	{
		alert(fname)
	//  print  all  form  data 
//   data  sent  to  node  server   	
		
		
	}
	
	
	
  return (
    <>
    <Layout/>

    
    <div className='customer-form'>
    {/*-form---*/}
    <div className="container">
    <div className="card o-hidden border-0 shadow-lg my-5">
      <div className="card-body p-0">
        {/* Nested Row within Card Body */}
        <div id="flex" className="row">
          <div className="col-lg-10" id="myGroup">
            <div className="p-5">
              <div className="texheadding">
                <div className="left">
                  <h1 className="h4 text-gray-900 mb-4">
                    Customer Form!
                  </h1>
                
                </div>
              </div>
            </div>
            {/*two*/}
            <div className="p-5">
              <div
                className="collapse"
                id="collapseExample_csv"
                data-parent="#myGroup"
              >
                <div className="card card-body">
                  <div id="row-1" className="form-group row">
                    <div className="col-sm-12 mb-3 mb-sm-0 uploadcsvdiv">
                      <div className="csv_file">
                        <div className="Upload32">
                          <label
                            className="tagname text_left"
                            htmlFor="file_upload"
                          >
                            File Upload
                          </label>
                          <input
                            type="file"
                            className="form-control 	form-control-user filepanel"
                            name="fileupl"
                            id="fileupl"
                          />{" "}
                        </div>
                      </div>
                      <div className="csv_submit">
                        <div className="csvbtn">
                          <input
                            type="submit"
                            name="btn_csv"
                            id="btn_csv"
                            className="btn btn-primary btn-user btn-block "
                          />{" "}
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
                        <label className="tagname" htmlFor="cname">
                          Customer Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-user"
                          name="cname"
                          id="cname"
                          placeholder="Customer Name"
						  
						  onChange={(e)=>setName(e.target.value)}
                        />{" "}
                      </div>
                      <div className="col-sm-6">
                        <label className="tagname" htmlFor="cntact-per">
                          Last  Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-user"
                          name="cntact-per"
                          id="cntact-per"
                          placeholder="Contact Person"
						  
						  onChange={(e)=>setLname(e.target.value)}
                        />{" "}
                      </div>
                    </div>
                    <div id="row-1" className="form-group row">
                      <div className="col-sm-6">
                        <label className="tagname" htmlFor="email">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-user"
                          name="email"
                          id="email-1"
                          placeholder="Email Address"
                        />{" "}
                      </div>
                      <div className="col-sm-6">
                        <label className="tagname" htmlFor="phone">
                          Phone
                        </label>
                        <input
                          type="phone"
                          className="form-control form-control-user"
                          name="phone"
                          id="phone-1"
                          placeholder="Phone"
                        />{" "}
                      </div>
                    </div>
                    <div id="row-1" className="form-group row">
                      <div className="col-sm-6">
                        <label className="tagname" htmlFor="website">
                          Website
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-user"
                          name="website"
                          id="website"
                          placeholder="website"
                        />{" "}
                      </div>
                      <div className="col-sm-6">
                        <label className="tagname" htmlFor="Fax No">
                          Fax No
                        </label>
                        <input
                          type="faxno"
                          className="form-control form-control-user"
                          name="faxno"
                          id="faxno"
                          placeholder="Fax No"
                        />{" "}
                      </div>
                    </div>
                    <p>Person Contact Address</p>
                    <div id="row-1" className="form-group row">
                      <div className="col-sm-6">
                        <label className="tagname" htmlFor="email">
                          Email Address
                        </label>
                        <input
                          type="pemail"
                          className="form-control form-control-user"
                          name="pemail"
                          id="pemail"
                          placeholder="Email Address"
                        />{" "}
                      </div>
                      <div className="col-sm-6">
                        <label className="tagname" htmlFor="phone">
                          Phone
                        </label>
                        <input
                          type="pphone"
                          className="form-control form-control-user"
                          name="pphone"
                          id="pphone"
                          placeholder="Phone"
                        />{" "}
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <label className="tagname" htmlFor="city">
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-user"
                          name="city"
                          id="city-city"
                          placeholder="City"
                        />{" "}
                      </div>
                      <div className="col-sm-6">
                        <label className="tagname" htmlFor="region">
                          Region
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-user"
                          name="region"
                          id="region-re"
                          placeholder="Region"
                        />{" "}
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <label className="tagname" htmlFor="postalzc">
                          Postal code
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-user"
                          name="postalzc"
                          id="postalzc"
                          placeholder="Postal code"
                        />{" "}
                      </div>
                      <div className="col-sm-6">
                        <label className="tagname" htmlFor="Country">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          className="country form user dropdown1"
                        >
                          <option value="">Country</option>
                          <option value={1}>Russia</option>
                          <option value={2}>Germany</option>
                          <option value={3}>France</option>
                          <option value={4}>Armenia</option>
                          <option value={5}>USA</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <label className="tagname" htmlFor="street">
                          Street address
                        </label>
                        <input
                          type="street address"
                          className="form-control form-control-user"
                          name="street"
                          id="street-add"
                          placeholder="Street address"
                        />
                      </div>
                      <div className="col-sm-6 mb-3 mb-sm-0"></div>
                    </div>
                    <div className="btnsub12">
                      <input
                        type="submit"
                        name="submit"
                        className="btn btn-primary btn-user btn-block"
                        id="submit"
						
						onClick={(e)=>show()} 
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
    
    
    
    </>
      
    
  )
}
