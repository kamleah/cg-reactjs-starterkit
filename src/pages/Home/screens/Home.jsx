import React  , { Component } from "react";
import { Link,NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import Card from "../components/card/Card";
import { HomeConstants } from '../mockjson/home_details';
import * as getData from '../redux/actions';
import '../../../../node_modules/bootstrap/scss/bootstrap.scss';
import  Menu  from '../../../Menu'
import Header from "../../../stories/Header";

// const Home = () =>{
//     const greeting = 'Welcome to ReactPavan';
//     const serviceName = HomeConstants.Packs
//     return (
//         <div>
//             <div className="container mt-3">
//                 <div className="row">
//                     <div className="col-sm-7">
//                         <div className="card-header bg-white text-secondary border-dark">
//                             <h6 className="text-secondary cs">Customer Service</h6>
//                         </div>
//                         <div className="row">
//                          {serviceName.map(name => (
//                              <Card greeting={name.value} />
//                         ))} 
//                         </div>
//                     </div>
//                     <div className="col-sm-5">
//                         <div className="card">
//                             <div className="card-header bg-dark">
//                                 <span className="text-uppercase text-white ">summary of transaction -Personal</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="row mt-3">
//                     <div className="col-sm-8">
//                         <div className="card" >
//                             <div className="card-header bg-dark">
//                                 <span className="text-white text-uppercase">HIGHLIGHTS AND ANNOUNCEMENTS</span>
//                             </div>
//                             <div className="card-body height-4" >                   
//                                 <div className=" container card-header bg-white border-dark " ></div>                    
                                
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>

//         )
// };

class Home extends Component {


    unserInfo = () => {
        
    }
    componentDidMount() {
        this.props.getData();
    }

    //let greeting = 'Welcome to ReactPavan';
   
    render() {
        let serviceName ;
        serviceName =(this.props && this.props.userData && this.props.userData.length) ? this.props.userData : [];
        console.log('Props_Details',JSON.stringify(this.props));
        return (
           
            <div>
                 <Menu></Menu> 
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-sm-7">
                            <Header
                                onCreateAccount={() => {}}
                                onLogin={function noRefCheck() {}}
                                onLogout={function noRefCheck() {}}
                                subHeader
                                title="Customer Service"
                                user={null}
                            />
                            <div className="row">
                             {serviceName.map(name => (
                                 <Card greeting={name.name} />
                            ))} 
                            </div>
                        </div>
                   
                    </div>
                </div>
            </div>
            
       )      
    }
}

/**
 * Map the actions to props.
 */
 const mapStateToProps = function (state) {
   console.log('Main State',JSON.stringify(state));
   return {
      userData: state.homeReducer.sharedPlanDetails
     }
 }


 const mapDispatchToProps = (dispatch) => {
   return {
       getData: () => dispatch(getData.getData())
   };
 }

export default connect(mapStateToProps, mapDispatchToProps)(Home);

