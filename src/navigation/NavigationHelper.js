import React , { Component } from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/screens/Home';
import Login from '../pages/Login/Login';
import ExistingCustomer from '../ExistingCustomer';
import  DealerInvtMgmt from '../DealerInvtMgmt';
import  TrackStockTransfer from '../TrackStockTransfer';
import  Resource from '../Resource'
import  InventoryMgmt from '../InventoryMgmt'

class NavigationHelper extends Component {
  render() {
    return <Switch>
    <Route exact path='/screens' component={Home} />
    <Route exact path='/' component={Login} />
    <Route exact path='/existing-customer' component={ExistingCustomer} />
    <Route exact path='/dealerinvtmgmt' component={DealerInvtMgmt} /> 
    <Route exact path='/storemgmt' component={TrackStockTransfer} />
    <Route exact path='/resource' component={Resource} />
    <Route exact path='/inventorymgmt' component={InventoryMgmt} />
</Switch>
  }
}
export default NavigationHelper;

