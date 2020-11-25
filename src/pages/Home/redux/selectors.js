export const token = state => state.appReducer.firebaseToken;
export const currentMobileNumber = state => state.appReducer.selectedConnection.mobileNumber;
export const activePlanName = state => state.appReducer.selectedConnection.plan; // current number active plan
export const userData = state => state.appReducer.selectedConnection;
export const accountType = state => state.appReducer.userData.accountType;
