export function getData() {
   return {
        type: "GET_DATA"
    };
}
export function getSuccess(response) {
    return {
        type: "REQUEST_SUCCESS",
        payload: { response }
    };
}
export function getFailed(failData) {
    return {
        type: "REQUEST_FAILED",
        payload: { failData }
    };
}
