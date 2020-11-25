import React from "react";
import { Link,NavLink } from "react-router-dom";
import   Menu from './Menu'
import Button from './stories/Button';
import Header from "./stories/Header";
import Search from "./stories/components/Search/Search";
const ExistingCustomer = () =>{
    return (
        <div>
            <Menu></Menu> 
            <div className="container">
                <Header
                    onCreateAccount={() => {}}
                    onLogin={function noRefCheck() {}}
                    onLogout={function noRefCheck() {}}
                    subHeader
                    title="Existing Customer"
                    user={null}
                />
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card border-white">
                            <div className="card-header border-white bg-white">
                                <h2 className="text-primary ">Customer Search</h2>
                            </div>
                            <Search />
                        </div>
                    </div>
                </div>
            </div>            
        </div>

        )
};

export default ExistingCustomer;
