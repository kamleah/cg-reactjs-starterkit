  let initialState = {
     userData: {
        userInfo : {}
        } 
}
  export default function mainStore(state = initialState, action) {
    switch (action.type) {
      case 'GET_DATA':
        return  {  ...state,
                                userData: {
                                 userInfo : {},
                }}
      case 'REQUEST_SUCCESS':
        return  {  ...state,
            userData: {
             userInfo : action.payload.response,
        }}
       case 'REQUEST_FAILED': 
       return  {  ...state,
        userData: {
         userInfo : action.payload.failData,
    }}
                default:
        return state;
    }
  }