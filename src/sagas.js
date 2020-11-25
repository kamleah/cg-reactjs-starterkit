// import { put, takeLatest, all } from 'redux-saga/effects';
// import { getSuccess, getFailed } from './action';
// function* fetchNews() {
//     let response = {};
//     //alert('testing is')

// try {
//    response = yield fetch('http://jsonplaceholder.typicode.com/users').then(response => response.json(), );
//     if (response && response.length) {
//         console.log('SUCESS');

//         yield put(getSuccess(response));
//     } else {
//         console.log('FAIL');
//          yield put(getFailed(response));
//     }
// } catch (error) {
//     console.log('COMMON FAIL', error);
//     yield put(getFailed(response));
// }
// }
// function* actionWatcher() {
//      yield takeLatest('GET_DATA', fetchNews)
// }
// export default function* rootSaga() {
//    yield all([
//    actionWatcher(),
//    ]);
// }
/**
 *  Redux saga class init
 * Import every feature saga here
 *
 */
import { all } from 'redux-saga/effects';
//import { homeDetailsSaga } from '../src/pages/Home/sagas';
import { homeDetailsSaga} from '../src/pages/Home/sagas'

export default function* rootSaga() {
    yield all([
      
        ...homeDetailsSaga
    ]);
}
