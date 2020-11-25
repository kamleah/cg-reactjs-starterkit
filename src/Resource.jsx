import React from "react";
import { Link,NavLink } from "react-router-dom";
import   Menu from './Menu'
const Resource = () =>{
    return (
        <div>
            <Menu></Menu>
            <div className="container  bg-secondary card mt-4">
                <div className="row m-4">
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-sm-12">
                            <h6><NavLink exact activeClassName="active" className="text-primary" to="/resource">Resources</NavLink></h6>
                                
                            </div>
                            <div className="col-sm-12">
                            <h6><NavLink exact activeClassName="activate" className="text-dark" to="/announcements">Announcements</NavLink></h6>
                               
                            </div>
                            <div className="col-sm-12">
                            <h6><NavLink exact activeClassName="activate" className="text-dark" to="/documents">Documents</NavLink></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 card">
                        <div className="cards ">
                            <div className="row mt-4">
                                <div className="col-sm-2">
                                    <label for="">Search</label>
                                </div>
                                <div className="col-sm-8">
                                    <input type="text" name="search" id="" class="form-control" />
                                </div>
                                <div className="col-sm-2">
                                    <button type="submit" class="btn btn-primary">Search</button>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-12">
                                    <h4 className="text-primary">Search Results</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="container ml-4">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <NavLink  to="/resources">Dealer Alert Colcome Home Wireless Trace Programe</NavLink>
                                            
                                        </div>
                                        <div className="col-sm-4">Others</div>
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

export default Resource;
