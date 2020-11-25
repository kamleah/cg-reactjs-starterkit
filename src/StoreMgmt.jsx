import React from "react";
import { Link,NavLink } from "react-router-dom";

const StoreMgmt = () =>{
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
                            <h4 className="text-secondary mt-2 ml-4 mr-4"> Password Management  <hr className="border-secondary" /></h4> 
                            <div className="row mr-1 ml-1 ">
                                <div className="col-sm-12 ">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Select User ID</th>
                                                <th>User ID</th>
                                                <th>Name</th>
                                                <th>Last Reset Date</th>
                                                <th>Last Login Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td><input type="checkbox" name="" id="" /></td>
                                                <td>R00125488</td>
                                                <td>ABC DEF</td>
                                                <td>10/01/2020</td>
                                                <td>10/01/2020</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td>2</td>
                                                <td><input type="checkbox" name="" id="" /></td>
                                                <td>R00125488</td>
                                                <td>ABC DEF</td>
                                                <td>10/01/2020</td>
                                                <td>10/01/2020</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>               
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <button type="submit" className="btn btn-warning mt-4 float-right">Reset Password</button>
                            </div>
                        </div>
                    </div>        
                </div>
            </div>            
        </div>

        )
};

export default StoreMgmt;
