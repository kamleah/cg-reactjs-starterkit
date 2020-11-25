import React from "react";
import { Link,NavLink } from "react-router-dom";
import   Menu from './Menu'
const TrackStockTransfer = () =>{
    return (
        <div>
            <Menu></Menu>
            <div className="container">
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
                                    <h4 className="text-secondary bg-muted">Track Stock Transfer</h4>
                                    <h6 className="text-primary">Search Request</h6>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <label htmlFor="">Store ID</label>
                                        </div>
                                        <div className="col-sm-8">
                                            <select name="" id="" className="form-control">
                                                <option value="asd">asd</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-sm-4">
                                            <label htmlFor="">Bulk Transaction ID</label>
                                        </div>
                                        <div className="col-sm-8">
                                            <input type="text" name="" id="" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-sm-4">
                                            <label htmlFor="">Request ID</label>
                                        </div>
                                        <div className="col-sm-8">
                                            <input type="text" name="" id="" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-sm-4">
                                            <label htmlFor="">Request Status</label>
                                        </div>
                                        <div className="col-sm-8">
                                            <select name="" id="" className="form-control" >
                                                <option value="">Please Select</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-sm-4">
                                            <label htmlFor="">Date Created</label>
                                        </div>
                                        <div className="col-sm-4">
                                            <input type="date" name="" id="" className="form-control" />
                                        </div>
                                        
                                            <h4 className="text-primary">To</h4>
                                    
                                        <div className="col-sm">
                                            <input type="date" name="" id="" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-sm-4">
                                            <label htmlFor="">Distributer Code</label>
                                        </div>
                                        <div className="col-sm-8">
                                            <input type="text" name="" id="" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-sm-12">
                                            <button type="submit" className="btn btn-primary float-right">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <h4 className="text-primary mt-2 ml-4 mr-4"> Results <hr className="border-secondary" /></h4> 
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-2 " >
                                            <button type="submit" className="btn btn-warning">View</button>
                                        </div> 
                                        <div className="col-sm-2 mlm" >
                                            <button type="submit" className="btn btn-primary">Export</button>
                                        </div>  
                                        <div className="col-sm-2 mlm-2">
                                            <button type="submit" className="btn btn-danger">Detach</button>
                                        </div>                                                          
                                    </div> 
                                    <div className="table-responsive">
                                        <table className="table mt-2 ">
                                            <thead>
                                                <tr>
                                                    <th>SO#</th>
                                                    <th>Requst Status</th>
                                                    <th>Date Created</th>
                                                    <th>Origin Store ID</th>
                                                    <th>Origin Store Name</th>
                                                    <th>Destination Store ID</th>
                                                    <th>Destination Store Name</th>
                                                    <th>Distributor Code</th>
                                                    <th>Remark</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>#1</td>
                                                    <td>456</td>
                                                    <td>dgdgkbbn32364</td>
                                                    <td>12/4/2020</td>
                                                    <td>15/4/2020</td>
                                                    <td>4565</td>
                                                    <td>ndnd</td>
                                                    <td>454dd</td>
                                                    <td>good</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                                    
                                </div>
                            </div>
                                            
                        </div>                
                    </div>
                    
                </div>
                
            </div>
        </div>

        )
};

export default TrackStockTransfer;
