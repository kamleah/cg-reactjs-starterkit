import React , { Component } from "react";
import { Link,NavLink } from "react-router-dom";

import { debounceTime } from "lodash";
import Menu from './Menu'
import Header from './stories/Header';
import DataTable from './stories/components/DataTable';
import Button from './stories/Button';

    class InventoryMgmt extends Component {
        constructor(props) {
            super(props);

   // this.search.debounceTime(500);

            this.state = {
              error: null,
              isLoaded: false,
              items: [],
              searchStatus: false,
              ID:String,
              category:String,
              brand:String,
              name:String,
              username:String,
              afterFliter:[]
            };
          }
          componentDidMount() {
            fetch("http://jsonplaceholder.typicode.com/users")
              .then(res => res.json())
              .then(
                (result) => {

                   // console.log('Getting_DATA is ',JSON.stringify(result));
                  this.setState({
                    isLoaded: true,
                    items: result
                  });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                  this.setState({
                    isLoaded: true,
                    error
                  });
                }
              )
          }
          Clear(){
            this.setState({searchStatus:false})
          }
          Search(){
            this.state.afterFliter=[]

            let getcategory = this.state.items.filter(e => e.name === this.state.category)
            let getBrand = this.state.items.filter(e => e.phone === this.state.brand)
            let getName = this.state.items.filter(e => e.website === this.state.name)
            
            this.state.afterFliter.push((getcategory[0]) ? getcategory[0] : []);
            this.state.afterFliter.push((getBrand[0]) ? getBrand[0] : []);
            this.state.afterFliter.push((getName[0]) ? getName[0] : []);
            this.setState({searchStatus:true})
          }
          handleChange = name => values => {
            
            let options = values.target.options;
            for (var i = 0, l = options.length; i < l; i++) {
              if (options[i].selected) {
                switch(name) {
                    case 'ID':
                        this.setState({ID:options[i].value})
                        break;
                    case 'category':
                            this.setState({category:options[i].value})
                            break;
                    case 'brand':
                                this.setState({brand:options[i].value})
                                break;
                    case 'name':
                        this.setState({name:options[i].value})
                        break;
                    case 'username':
                            this.setState({username:options[i].value})
                            break;
                        
                    default:
                        break;
                  }
              }
            }
            console.log('Getting_DATA is _value',JSON.stringify(this.state));
            
          };
        render() {
            let custmerInfo;
            if(this.state.searchStatus){
                custmerInfo = this.state.afterFliter;
                
            }else{
                custmerInfo = this.state.items
            }

             
           // console.log('Getting_DATA is _custmerInfo',JSON.stringify(custmerInfo));
            return (
                <div>
                    <Menu></Menu>
                    <div className="container">
                       
                        <Header
                            onCreateAccount={() => {}}
                            onLogin={function noRefCheck() {}}
                            onLogout={function noRefCheck() {}}
                            subHeader
                            title="Inventory Managements"
                            user={null}
                        />
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
                                    <Header
                                        onCreateAccount={() => {}}
                                        onLogin={function noRefCheck() {}}
                                        onLogout={function noRefCheck() {}}
                                        subHeader
                                        title="Search"
                                        user={null}
                                    />
                                        <h4 className=" text-primary card-header">Search</h4>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <label htmlFor="">Store ID</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <select className="" id="" className="form-control" onChange={this.handleChange('ID')} >
                                                        <option value="">Please selecte ID</option>
                                                        {custmerInfo.map(name => (
                                                           <option value={name.id}>{name.id}</option>
                                                    ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-sm-4">
                                                    <label htmlFor="">Product Category</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <select name="" id="" className="form-control" onChange={this.handleChange('category')}>
                                                    <option value="">Please selecte product category</option>
                                                        {custmerInfo.map(name => (
                                                           <option value={name.name}>{name.name}</option>
                                                    ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-sm-4">
                                                    <label htmlFor="">Brand</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <select name="" id="" className="form-control" onChange={this.handleChange('brand')}>
                                                    <option value="">Please selecte Brand</option>
                                                        {custmerInfo.map(name => (
                                                           <option value={name.phone}>{name.phone}</option>
                                                    ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-sm-4">
                                                    <label htmlFor="">Item Name</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <select name="" id="" className="form-control" onChange={this.handleChange('name')}>
                                                    <option value="">Please selecte item</option>
                                                        {custmerInfo.map(name => (
                                                           <option value={name.website}>{name.website}</option>
                                                    ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-sm-4">
                                                    <label htmlFor="">SAP Material Code</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <select name="" id="" className="form-control" onChange={this.handleChange('username')}>
                                                    <option value="">Please selecte SAP material</option>
                                                        {custmerInfo.map(name => (
                                                           <option value={name.username}>{name.username}</option>
                                                    ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>                   
                                    </div>                
                                </div>
                                
                                    <Button
                                     className="btn btn-primary float-right"
                                    backgroundColor="rgba(31,77,25,1)"
                                    label="Click now"
                                    onClick={() => {}}
                                    primary
                                    size="large"
                                    />
                                <div className="col-sm-1">
                                                    <button className="btn btn-primary" onClick={() => this.Clear()}>Clear</button>
                                                </div>
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
                                            <DataTable
                                                dataFields={custmerInfo}
                                                dataFieldsKeys={[
                                                    'name',
                                                    'email',
                                                    'phone',
                                                    'website',
                                                    'username'
                                                ]}
                                                headingFields={[
                                                    'Category',
                                                    'SAP Material Code',
                                                    'Brand',
                                                    'Item Name',
                                                    'Quantity'
                                                ]}
                                            />
                                            {/* Commtented Pavans code */}
                                            {/* <table className="table">
                                                <thead className="text-center">
                                                    <tr>
                                                        <th>Category</th>
                                                        <th>SAP Material Code</th>
                                                        <th>Brand</th>
                                                        <th>Item Name</th>
                                                        <th>Quantity</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-center">
                                                    
                                                    {custmerInfo.map(name => (
                                                        <tr>
                                                            <td>{name.name}</td>
                                                            <td>{name.email}</td>
                                                            <td>{name.phone}</td>
                                                            <td>{name.website}</td>
                                                            <td>{name.username}</td>
                                                        </tr>
                                                    ))} 
                                                   
                                                </tbody>
                                            </table> */}
                                        </div>                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
        
                )
        }
    }
   


export default InventoryMgmt;
