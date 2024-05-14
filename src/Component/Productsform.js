import React from 'react'
import Layout from './Layout'

export default function Productsform() {

  return (
    <>
    <Layout/>
    <div className="container product-page">
    <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
            <div id="flex" className="row">
                <div className="col-lg-10">
                    <div className="p-5" id="myGroup">
                        <div className="texheadding">
                            <div className="left">
                                <h1 className="h4 text-gray-900 mb-4">Create Product</h1>
                                <div className="upload142">
                                    <p> <a className="btn btn-primary panel" data-toggle="collapse" href="#collapseExample_csv" role="button" aria-expanded="true" aria-controls="collapseExample">
                                                Upload VIA CSV
                                        </a> 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="collapse" id="collapseExample_csv" data-parent="#myGroup">
                            <div className="card card-body">
                                <div id="row-1" className="form-group row">
                                    <div className="col-sm-12 mb-3 mb-sm-0 uploadcsvdiv">
                                        <div className="csv_file">
                                        <label className="tagname text_left" for="file_upload">File Upload</label>
                                            <input type="file" className="form-control form-control-user filepanel" name="fileupl" id="fileupl"/>							
                                        </div> 
                                        <div className="csv_submit">
                                            <div className="csvbtn">
                                            <input type="submit" name="btn_csv" id="btn_csv" className="btn btn-primary btn-user btn-block "/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="collapse show" id="collapseExample_csv" data-parent="#myGroup">
                            <div className="card card-body">
                                <form className="user">
                                    <div id="row-1" className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label className="tagname" for="part_no">Part No</label>
                                            <input type="text" className="form-control form-control-user" name="part_no" id="part_no" placeholder="Part No"/> </div>
                                        <div className="col-sm-6">
                                            <label className="tagname" for="suplier">Supplier Name</label>
                                            <input type="text" className="form-control form-control-user" name="Suplier" id="suplier" placeholder="Supplier Name"/> </div>
                                    </div>
                                    <div id="row-1" className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0 ">
                                            <label className="tagname" for="shortd">Short Description</label>
                                            <input type="text" className="form-control form-control-user" name="shortd" id="short" placeholder="Short Description"/> </div>
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label className="tagname" for="longd">Long Description</label>
                                            <input type="text" className="form-control form-control-user" name="longd" id="longd" placeholder="Long Description"/> </div>
                                    </div>
                                    <div id="row-1" className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label className="tagname" for="distributionp">Distribution Price</label>
                                            <input type="text" className="form-control form-control-user" name="distributionp" id="distributionp" placeholder="Distribution Price"/> </div>
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label className="tagname" for="msrp">MSRP Price</label>
                                            <input type="text" className="form-control form-control-user" name="msrp" id="msrp" placeholder="MSRP Price"/> </div>
                                    </div>
                                    <div id="row-1" className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label className="tagname" for="quantity">Quantity Per Case</label>
                                            <input type="text" className="form-control form-control-user" name="quantity" id="quantity" placeholder="Quantity Per Case"/> </div>
                                        <div className="col-sm-6 mb-3 mb-sm-0 ">
                                            <label className="tagname" for="unitm">Unit Measure</label>
                                            <input type="text" className="form-control form-control-user" name="unitm" id="unitm" placeholder="Unit Measure"/> </div>
                                    </div>
                                    <div id="row-1" className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <label className="tagname" for="image-url">Image URL</label>
                                            <input type="text" className="form-control form-control-user" name="image-url" id="image-url" placeholder="Image URL"/> </div>
                                        <div className="col-sm-6 mb-3 mb-sm-0 ">
                                        </div>	
                                    </div>
                                    
                                        <div className="btnsub12">
                                            <input type="submit" name="submit" className="btn btn-primary btn-user btn-block" id="submit"/>
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
    </>
  )
}
