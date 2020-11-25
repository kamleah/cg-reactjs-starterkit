import Api from '..';

//import { ApiEndpoint,Method } from '../../constants/ApiConstants';
import { ApiEndpoint,Method } from '../../constants/ApiConstants';
import { HomeConstants } from '../../pages/Home/mockjson/home_details';
/**
  API request signature (URL, method, token, params, data)
 */

export function homeRequest() {
 // console.log('HOME_REQUEST_IST',ApiEndpoint.HOME_DETAILS);
    return Api(HomeConstants.ApiEndpoint.HOME_DETAILS,Method.GET,null,null,null,null)
    //return Api(`${HomeConstants.ApiEndpoint.HOME_DETAILS}`, HomeConstants.Method.GET, null, null, null, null);
}
