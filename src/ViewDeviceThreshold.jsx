import React from "react";
import { Link,NavLink } from "react-router-dom";

const ViewDeviceThreshold = () =>{
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        
                    <div className="col-sm-12 mt-2">
                            <NavLink exact activeClassName="activate" className="btn btn-secondary btn-block" to="/storemgmt">Password Management</NavLink>
                                                      
                        </div>
                        <div className="col-sm-12 mt-2">
                            <NavLink exact activeClassName="activate" className="btn btn-secondary btn-block" to="/storemgmt">View Store Threshold</NavLink>
                                                  
                        </div>
                        <div className="col-sm-12 mt-2">
                            <NavLink exact activeClassName="activate" className="btn btn-secondary btn-block" to="/viewdevicethewshold">View Device Threshold</NavLink>
                                                     
                        </div>
                        <div className="col-sm-12 mt-2">
                        <NavLink exact activeClassName="activate" className="btn btn-secondary btn-block" to="/viewdevicethewshold">View Payment History</NavLink>
                            
                        </div>
                        <div className="col-sm-12 mt-2">
                        <NavLink exact activeClassName="activate" className="btn btn-secondary btn-block" to="/viewdevicethewshold">Search Store Threshold request</NavLink>
                            
                        </div>
                        <div className="col-sm-12 mt-2">
                        <NavLink exact activeClassName="activate" className="btn btn-secondary btn-block" to="/viewdevicethewshold">Search Store Service Enquiry</NavLink>
                            
                        </div>
                        <div className="col-sm-12 mt-2">
                        <NavLink exact activeClassName="activate" className="btn btn-secondary btn-block" to="/viewdevicethewshold">Dealer Assist Contact Management</NavLink>
                            
                        </div>
                        <div className="col-sm-12 mt-2">
                        <NavLink exact activeClassName="activate" className="btn btn-secondary btn-block" to="/viewdevicethewshold">Prepaid Activation Report</NavLink>
                            
                        </div>
                    </div>
                    <div className="col-sm-8 mt-2">
                        <div className="card ">
                            <h4 className="text-secondary mt-2 ml-4 mr-4"> View Device Threshold  <hr className="border-secondary" /></h4> 
                            <div className="row">
                                <div className="card-body">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-2">Outlet</div>
                                                <div className="col-sm-8">
                                                    <select name="" id="" className="form-control">
                                                        <option value="abc">abc</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-2">
                                                    <button type="submit" className="btn btn-primary">Search</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card mt-3">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-6 float-right">Totla Device Threshold Units :</div>
                                                <div className="col-sm-6">
                                                <label htmlFor="">1</label>
                                                </div>                                    
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 float-right">Available Threshold : </div>
                                                <div className="col-sm-6">
                                                <label htmlFor="">(0.00%)</label>
                                                </div>                                    
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 float-right">Excess Threshold : </div>
                                                <div className="col-sm-6">
                                                <label htmlFor="">RM 0.00 </label>
                                                </div>                                    
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 float-right">Threshold Unit: </div>
                                                <div className="col-sm-6">
                                                <label htmlFor=""> sdrfg</label>
                                                </div>                                    
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 justify-content-right">Virtual Account : </div>
                                                <div className="col-sm-6">
                                                <label htmlFor="">fd</label>
                                                </div>                                    
                                            </div>
                                        </div>
                                    </div>                        
                                </div>
                            </div>               
                        </div>

                        <div className="card mt-3">
                            <h4 className="text-secondary mt-2 ml-4 mr-4"> Device Threshold Summary <hr className="border-secondary" /></h4> 
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6 justify-content-right">Device Security Deposite : </div>
                                    <div className="col-sm-6">
                                    <label htmlFor="">fd</label>
                                    </div>                                    
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 justify-content-right">Device Top Up Security : </div>
                                    <div className="col-sm-6">
                                    <label htmlFor="">fd</label>
                                    </div>                                    
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 justify-content-right">Payment Deu amount : </div>
                                    <div className="col-sm-6">
                                    <label htmlFor="">fd</label>
                                    </div>                                    
                                </div>
                            </div>
                        </div>

                        <div className="card mt-3">
                            <h4 className="text-secondary mt-2 ml-4 mr-4"> Payment Due Details : <hr className="border-secondary" /></h4> 
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-2 ">
                                        <button type="submit" className="btn btn-warning">View</button>
                                    </div> 
                                    <div className="col-sm-2 mlm" >
                                        <button type="submit" className="btn btn-primary">Export</button>
                                    </div>  
                                    <div className="col-sm-2 mlm-2">
                                        <button type="submit" className="btn btn-danger">Detach</button>
                                    </div>                                                          
                                </div> 
                                <table className="table mt-2">
                                    <thead>
                                        <tr>
                                            <th>SO#</th>
                                            <th>SO Amount</th>
                                            <th>Invoice#</th>
                                            <th>Invoice Date</th>
                                            <th>Delivery Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#1</td>
                                            <td>456</td>
                                            <td>dgdgkbbn32364</td>
                                            <td>12/4/2020</td>
                                            <td>15/4/2020</td>
                                        </tr>
                                    </tbody>
                                </table>                  
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-sm-12">
                                <button type="submit" className="btn btn-warning mt-4 float-right">View Transactions</button>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>
        </div>

        )
};

export default ViewDeviceThreshold;
