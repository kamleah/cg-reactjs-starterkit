import { call, put } from 'redux-saga/effects';
import {
    homeRequest
} from '../../../services/api/Home';

// import { auth } from '@util/firebaseAuth';
// import { currentMobileNumber, accountType } from '../redux/selectors';
import {
  getHOMEDETAILS,getHOMEDetailsFailed
} from '../redux/actions';





export function* homeDashboardDetails(actions) {
    console.log('come to SAGA FILE');
    try {
        const { sharingMode } = actions;
        console.log('switchSharingPlanMode API', JSON.stringify(sharingMode));
      //  const { firebaseToken, headers } = yield call(extractState);
        const body = { sharingMode };
        const responseResult = yield call(homeRequest,  body);
        console.log('come to SAGA responseResult',JSON.stringify(responseResult));
        if (responseResult) {
            console.log('result', JSON.stringify(responseResult));
            // update redux
            yield put(getHOMEDETAILS(responseResult));
        } else {
            yield put(getHOMEDetailsFailed(responseResult));
        }
        /**
         * Notes for testing
         */
        // yield put(saveSharingMode(sharingMode));
    } catch (error) {
        console.log('come to SAGA error',JSON.stringify(error));
        yield put(getHOMEDetailsFailed(error));
    }
}


