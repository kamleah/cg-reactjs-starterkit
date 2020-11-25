/*
 * combines all th existing reducers
 */
//import * as managePlanReducer from '../s  /ManagePlan/redux/reducers';
import * as homeReducer from '../../src/pages/Home/redux/reducers';


export default {
    ...homeReducer
   
};
