// General api to access data

//import * as Sentry from '@sentry/react-native';
// import moment from 'moment'
//import i18n from 'i18n-js'
import { addParamsToURL } from '../util';
//import Env from '../constants/EnvConstants';
// customBaseURL = Env.BASE_URL,
export default function api(
    URL,
    method,
    params,
    body,
    headers = {},
    
    timeoutInterval = 30000,
    ignoreSSL = false
) {
    //const local = i18n.locale || 'en';
  //  const UTLWithOutLan = `${customBaseURL}${URL}`; if its SIT or PVT
  const UTLWithOutLan = `${URL}`;
  //  const URlWithLang = `${UTLWithOutLan}${UTLWithOutLan.includes('?') ? '&' : '?'}lang=${local}`;
    const customURL = addParamsToURL(UTLWithOutLan, params);
    // const reqStartTime = moment();


    

    const options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...headers
        },
        ...(body && { body: JSON.stringify(body) })
    };

    return new Promise((resolve, reject) => {
        let response = {};
        fetch('https://api.github.com/users/hacktivist123/repos')
        .then(response => response.json())
        .then(data => {
            if(data){
                console.log('Selected_data',data)
                resolve(data)
            }
        }).catch(error =>{
            reject(error)
        });
    });
}
