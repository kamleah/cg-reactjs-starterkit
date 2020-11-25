import createReducer from '../../../helper/createReducer';
import {
    GET_HOME_SUCCESS,
    HOME_DASHBOARD_DETAILS,
    GET_HOME_FAILED
} from './types';

const initialState = {
    recallGBShareAPI: false,
    switchModeError: '',
    isFetchingGBSharing: false, // while fetching the details
    isSavingAllocatedData: false,
    sharedPlanDetails: {}, // GB share response
    sharedPlanError: {}, // GB share error,
    saveAllocatedResult: {}, // save allocated response
    savedDataError: {},
    switchingNote: ''
};
export const homeReducer = createReducer(initialState, {
    [HOME_DASHBOARD_DETAILS](state) {
        return {
            ...state,
            saveAllocatedResult: {}
        };
    },
    [GET_HOME_SUCCESS](state, action) {
        return {
            ...state,
            sharedPlanDetails: action.payload.homeDetails,
        };
    },
    [GET_HOME_FAILED](state, action) {
        return {
            ...state,
            savedDataError: action.payload.failData
        };
    }
});
