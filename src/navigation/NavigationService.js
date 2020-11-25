import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}

// function getCurrentRoute() {
//     let route = { routeName: '' };
//     try {
//         route = _navigator.state.nav;
//         while (route.routes) {
//             route = route.routes[route.index];
//             /**
//              * Before returning this object route,
//              * will check if it is a valid route object with below code.
//              * If it is invalid, will return a default object { routeName: '' }
//              * */
//             route.routeName;
//         }
//     } catch (err) {
//         route = { routeName: '' };
//     }
//     return route;
// }

function goBack(key) {
    _navigator.dispatch(
        NavigationActions.back({
            key
        })
    );
}

function fullReset(routeName) {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })]
    });
    _navigator.dispatch(resetAction);
}

// add other navigation functions that you need and export them

export default {
    navigate,
    goBack,
    setTopLevelNavigator,
    fullReset
};
