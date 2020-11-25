
// Date Formats
const CURRENT_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const REQUIRED_DATE_FORMAT = 'DD/MM/YYYY';
const REQUIRED_TIME_FORMAT = 'hh:mm A';

// REGEX PATTERNS

const NUMBER_FORMAT_MALAYSIA = /^(\+?6?01)[0-46-9]-*[0-9]{7,8}$/g;

export function addParamsToURL(url, params) {
    // if (params && Object.entries(params).length !== 0 && params.constructor === Object) {
    //     let temp = url;
    //     let count = 0;
    //     for (const [key, value] of Object.entries(params)) {
    //         temp += `${count === 0 ? '?' : '&'}${key}=${value}`;
    //         count++;
    //     }
    //     return temp;
    // }
    return url;
}


