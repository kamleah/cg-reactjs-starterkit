import React from "react";
import { Link,NavLink } from "react-router-dom";

const ReturnStockRequest = () =>{
    return (
        <div>
                <div className="container">
                    <div className="card-header bg-white">
                        <h5 className="text-secondary">Inventory Management</h5>
                    </div>
                    <div className="card mt-4">
                        <div className="card-header ">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h4 className="text-primary btn-block">View Stock Store</h4>
                                        </div>
                                        <div className="col-sm-12 mt-2">
                                            <NavLink exact activeClassName="activate" className="btn btn-secondary btn-block" to="/inventorymgmt">Create Stock Request</NavLink>
                                                                    
                                        </div>
                                        <div className="col-sm-12 mt-2">
                                            <NavLink exact activeClassName="activate" className="btn btn-secondary btn-block" to="/returnstockrequest">Return Stock Request</NavLink>
                                                                    
                                        </div>
                                        <div className="col-sm-12 mt-2">
                                        <NavLink exact activeClassName="activate" className="btn btn-secondary btn-block" to="/tracestocktransfer">Track Stock Transfer</NavLink>
                                                    
                                        </div>
                                        <div className="col-sm-12 mt-2">
                                        <NavLink exact activeClassName="activate" className="btn btn-secondary btn-block" to="/unreservedstock">Unreserved stock History</NavLink>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="card mb-2">
                                        <div className="card-header">
                                            <h4 className="text-secondary bg-muted">Request Stock from Plant</h4>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <label htmlFor="">Outlet</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <select name="" id="" className="form-control">
                                                        <option value="asd">asd</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className=" text-primary card-header">Search Filter</h4>
                                    <div className="card-body">                        
                                        <div className="row mt-2">
                                            <div className="col-sm-4">
                                                <label htmlFor="">Product Category</label>
                                            </div>
                                            <div className="col-sm-8">
                                                <select name="" id="" className="form-control">
                                                    <option value="abc">AABC</option>
                                                    <option value="nht">NHT</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-sm-4">
                                                <label htmlFor="">Brand</label>
                                            </div>
                                            <div className="col-sm-8">
                                                <select name="" id="" className="form-control">
                                                    <option value="abc">AABC</option>
                                                    <option value="nht">NHT</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-sm-4">
                                                <label htmlFor="">Item Name</label>
                                            </div>
                                            <div className="col-sm-8">
                                                <select name="" id="" className="form-control">
                                                    <option value="abc">AABC</option>
                                                    <option value="nht">NHT</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-sm-4">
                                                <label htmlFor="">SAP Material Code</label>
                                            </div>
                                            <div className="col-sm-8">
                                                <select name="" id="" className="form-control">
                                                    <option value="abc">AABC</option>
                                                    <option value="nht">NHT</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>                   
                                </div>                
                            </div>
                            <button className="btn btn-primary float-right">Search</button>
                        </div>
                        <div className="row bg-muted">
                            <div className="col-sm-12">
                                <div className="">
                                    <div className="card-header">
                                        <h5 className="text-primary">Results</h5>
                                    </div>
                                    <div className="card-body bg-white">
                                        <div className="row mb-2">
                                            <div className="col-sm-1">
                                                <button className="btn btn-primary">View</button>
                                            </div>
                                            <div className="col-sm-1">
                                                <button className="btn btn-warning">Export</button>
                                            </div>
                                            <div className="col-sm-1">
                                                <button className="btn btn-danger">Detach</button>
                                            </div>
                                        </div>
                                        <table className="table">
                                            <thead className="text-center">
                                                <tr>
                                                    <th>Item Name</th>
                                                    <th>SAP Material Code</th>
                                                    <th>Price Per Unit (RM)</th>
                                                    <th>Min Quantity</th>
                                                    <th>Max Quantity</th>
                                                    <th>Request Quantity</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-center">
                                                <tr>
                                                    <td>sap</td>
                                                    <td>15874</td>
                                                    <td>45</td>
                                                    <td>20</td>
                                                    <td>25</td>
                                                    <td>23</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button className="btn btn-primary float-right mb-4">ADD</button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>        
                    </div>
                    <div className="row bg-muted mt-4">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="text-primary">Request Summary</h5>
                                    </div>
                                    <div className="card-body bg-white">
                                        <div className="row mb-2">
                                            <div className="col-sm-1">
                                                <button className="btn btn-primary">View</button>
                                            </div>
                                            <div className="col-sm-1">
                                                <button className="btn btn-warning">Export</button>
                                            </div>
                                            <div className="col-sm-1">
                                                <button className="btn btn-danger">Detach</button>
                                            </div>
                                        </div>
                                        <table className="table">
                                            <thead className="text-center">
                                                <tr>
                                                    <th>Item Name</th>
                                                    <th>SAP Material Code</th>
                                                    <th>Price Per Unit (RM)</th>                                
                                                    <th>Request Quantity</th>
                                                    <th>Total Price Before Service Tax 6% (RM)</th>
                                                    <th>Service Tax 6%</th>
                                                    <th>Total Price with Service Tax 6% (RM)</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-center">
                                                <tr>
                                                    <td>sap</td>
                                                    <td>15874</td>
                                                    <td>20</td>
                                                    <td>45</td>
                                                    <td>900</td>
                                                    <td>54</td>
                                                    <td>954</td> 
                                                    <td><button className="btn btn-primary mb-2">Edit</button>
                                                        <button className="btn btn-danger">Delete</button>
                                                    </td> 
                                                </tr>                              
                                            </tbody>
                                        </table>
                                    </div>  
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-sm-6"></div>
                                            <div className="col-sm-6">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <label htmlFor="">Total (Not Including Service Tax) :</label>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        0.00
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <label htmlFor="">Service Tax</label>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        0.00
                                                    </div>
                                                    <hr className="border-secondary" />
                                                </div>
                                                <div className="card-header bg-white border-secondary"></div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <h4 className="text-primary bolder">Grand Total</h4>                                        
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <h4 className="text-primary bolder">0.00</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                  
                                </div>
                            </div>
                        </div>
                    <div className="card mt-4">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5 className="text-primary">Delivery Address</h5>
                                </div>
                                <div className="col-sm-6">
                                    <h6 className="text-danger float-right">*Required Information</h6>
                                </div>
                            </div>   
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5 className="text-dark font-weight-bold">Store ID</h5>
                                </div>
                                <div className="col-sm-6">
                                    <h5 className="text-primary font-weight-bold">ABC</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5 className="text-dark font-weight-bold">Store Name</h5>
                                </div>
                                <div className="col-sm-6">
                                    <h5 className="text-primary font-weight-bold">WAT TESTING</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5 className="text-dark font-weight-bold">Dealer Purchase Order ID</h5>
                                </div>
                                <div className="col-sm-5">
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                                <div className="col-sm-1">
                                    <h2 className="text-danger mr-5">*</h2>                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5 className="text-dark font-weight-bold">Contact Name</h5>
                                </div>
                                <div className="col-sm-5">
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                                <div className="col-sm-1">
                                    <h2 className="text-danger mr-5">*</h2>                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5 className="text-dark font-weight-bold">Contact Number</h5>
                                </div>
                                <div className="col-sm-6">
                                    <h5 className="text-primary font-weight-bold">9637199927</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5 className="text-dark font-weight-bold">Contact Email</h5>
                                </div>
                                <div className="col-sm-5">
                                    <input type="email" name="" id="" className="form-control" />
                                </div>
                                <div className="col-sm-1">
                                    <h2 className="text-danger mr-5">*</h2>                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5 className="text-dark font-weight-bold">Residance Type</h5>
                                </div>
                                <div className="col-sm-5">
                                    <select name="" id="" className="form-control">
                                        <option value="landed">Landed</option>
                                    </select>
                                </div>
                                <div className="col-sm-1">
                                    <h2 className="text-danger mr-5">*</h2>                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5 className="text-dark font-weight-bold">House/Unit/Lot</h5>
                                </div>
                                <div className="col-sm-5">
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                                <div className="col-sm-1">
                                    <h2 className="text-danger mr-5">*</h2>                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5 className="text-dark font-weight-bold">Street Name</h5>
                                </div>
                                <div className="col-sm-5">
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                                <div className="col-sm-1">
                                    <h2 className="text-danger mr-5">*</h2>                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5 className="text-dark font-weight-bold">Street Name 2</h5>
                                </div>
                                <div className="col-sm-5">
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                                <div className="col-sm-1">
                                    <h2 className="text-danger mr-5">*</h2>                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5 className="text-dark font-weight-bold">Postcode No</h5>
                                </div>
                                <div className="col-sm-5">
                                    <input type="number" name="" id="" className="form-control" />
                                </div>
                                <div className="col-sm-1">
                                    <h2 className="text-danger mr-5">*</h2>                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5 className="text-dark font-weight-bold">City</h5>
                                </div>
                                <div className="col-sm-5">
                                    <select name="" id="" className="form-control">
                                        <option value="bhiwandi">Bhiwandi</option>
                                    </select>
                                </div>
                                <div className="col-sm-1">
                                    <h2 className="text-danger mr-5">*</h2>                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5 className="text-dark font-weight-bold">State</h5>
                                </div>
                                <div className="col-sm-5">
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                                <div className="col-sm-1">
                                    <h2 className="text-danger mr-5">*</h2>                    
                                </div>
                            </div>
                            <button type="submit" className="btn btn-warning float-right">Confirm</button>
                        </div>
                        
                    </div>
                </div>
        </div>

        )
};

export default ReturnStockRequest;
