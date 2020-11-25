import {
    GET_HOME_SUCCESS,
    HOME_DASHBOARD_DETAILS,
    GET_HOME_FAILED
} from './types';

export function getData() {
    return {
        type: HOME_DASHBOARD_DETAILS
    };
}
export function getHOMEDETAILS(homeDetails) {
    return {
        type: GET_HOME_SUCCESS,
        payload: { homeDetails }
    };
}
export function getHOMEDetailsFailed(errorData) {
    return {
        type: GET_HOME_FAILED,
        payload: { errorData }
    };
}

