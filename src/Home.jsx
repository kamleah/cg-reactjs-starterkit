import React from "react";
import { Link,NavLink } from "react-router-dom";

const Home = () =>{
    return (
        <div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-7">
                        <div className="card-header bg-white text-secondary border-dark">
                            <h6 className="text-secondary cs">Customer Service</h6>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card bg-primary ece" >
                                    <div className="card-body ">
                                        <h5 className="ec">Existing Customer Search</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card bg-primary ece">
                                    <div className="card-body">
                                        <h5 className="ec" >View Customer Activities</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card bg-primary ece" >
                                    <div className="card-body">
                                        <h5 className="ec">Intensive Summary report</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card bg-primary ece" >
                                    <div className="card-body">
                                        <h5 className="ec">GST SELF BILL</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="card bg-primary ece" >
                                    <div className="card-body">
                                        <h5 className="ec">Invoic & DO</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="card">
                            <div className="card-header bg-dark">
                                <span className="text-uppercase text-white ">summary of transaction -Personal</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-sm-8">
                        <div className="card" >
                            <div className="card-header bg-dark">
                                <span className="text-white text-uppercase">HIGHLIGHTS AND ANNOUNCEMENTS</span>
                            </div>
                            <div className="card-body height-4" >                   
                                <div className=" container card-header bg-white border-dark " ></div>                    
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        )
};

export default Home;
