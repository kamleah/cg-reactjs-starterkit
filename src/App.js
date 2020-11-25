import React,{Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import { connect } from 'react-redux';
import { Link,NavLink } from "react-router-dom";
import  Home  from '../src/pages/Home/screens/Home'
import Login from "../src/pages/Login/Login";
import '../node_modules/bootstrap/scss/bootstrap.scss';

 // where reducers is a object of reducers
//import sagas from './store/sagas';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      id: '',
      Category: '',
      Brand: '',
      Name:'',
      Code:''
    // this.handleID = this.handleID.bind(this)

      
    }
    }
//  const onRefresh(() =>){
   onRefresh = () => {
   // alert('USERINFO')
    // this.props.getData();
  }
  handleID(e) {
   // console.log('After e',JSON.stringify(e));
    this.setState({ id: e.target.value });
  }
  handleCategory(e) {
    console.log('After e',JSON.stringify(e));
    this.setState({ Category: e.target.value });
  }
  handleBrand(e) {
    console.log('After e',JSON.stringify(e));
    this.setState({ Brand: e.target.value });
  }
  handleName(e) {
    console.log('After e',JSON.stringify(e));
    this.setState({ Name: e.target.value });
  }
  handleCode(e) {
    console.log('After e',JSON.stringify(e));
    this.setState({ Code: e.target.value });
  }
  Search = () => {
    const styleInfo = {
      paddingRight:'10px'
    }

    // <td>{name.name}</td>
    // <td>{name.email}</td>
    // <td>{name.phone}</td>
    // <td>{name.website}</td>
    // <td>{name.username}</td>
  console.log('Main Props',JSON.stringify(this.props));
    let Information = this.props.userData;
    let items = Information.filter((data)=>{
       if(data.name.includes('Glenna Reichert') || data.email.includes('Shanna@melissa.tv')){
          return data
      }
    }).map(data=>{
      console.log('After Fliater',JSON.stringify(data));
      return(
      <div>
        <ul>
          <li style={{position:'relative',left:'10vh'}}>
            <span style={styleInfo}>{data.phone}</span>
            <span style={styleInfo}>{data.website}</span>
            <span style={styleInfo}>{data.username}</span>
          </li>
        </ul>
      </div>
      )
    })
    this.setState({
      items: items
    });
    console.log('Main items',JSON.stringify(items));
}

  render() {
    let custmerInfo = [];
    const items  = this.state.items;
    // this.setState({
    //   items: this.props
    // });
    custmerInfo = (this.props && this.props.userData && this.props.userData.length) ? this.props.userData : []
    
    console.log('Main state',JSON.stringify(this.state));
     //custmerInfo = this.state.items
    return (
      <div className="App">
        <div>
        <Login />
    </div>
         {/* <div>
           {items}
                    <div className="container">
                        <div className="card-header bg-white">
                            <h5 className="text-secondary">Inventory Management</h5>
                        </div>
                        <div className="card mt-4">
                            <div className="card-header ">
                                <div className="row">
                                    <div className="col-sm-3">
                                       
                                    </div>
                                    <div className="col-sm-9">
                                        <h4 className=" text-primary card-header">Search</h4>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <label htmlFor="">Store ID</label>
                                                </div>
                                                <div className="col-sm-8">
                                                    <select className="" id="" className="form-control" onChange={this.handleID}>
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
                                                    <select name="" id="" className="form-control" onChange={this.handleCategory}>
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
                                                    <select name="" id="" className="form-control" onChange={this.handleBrand}>
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
                                                    <select name="" id="" className="form-control" onChange={this.handleName}>
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
                                                    <select name="" id="" className="form-control" onChange={this.handleCode}>
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
                                <button className="btn btn-primary float-right" onClick={() => this.Search()}> Search</button>
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
                                                    <button className="btn btn-primary" onClick={() => this.onRefresh()}>View</button>
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
                                            </table>
                                        </div>                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                */}
      </div>
    );
  }


}

/**
 * Map the actions to props.
 */
// const mapStateToProps = function (state) {
//   //console.log('Main State',JSON.stringify(this.props));
//   return {
//      userData: state.userData.userInfo 
//     }
// }


// const mapDispatchToProps = (dispatch) => {
//   return {
//       getData: () => dispatch(getData())
//   };
// }

export default App // connect(mapStateToProps, mapDispatchToProps)(App);



