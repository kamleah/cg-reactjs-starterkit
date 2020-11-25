// import React, { Component } from 'react';
// import { StyleSheet, findNodeHandle, View, Platform } from 'react-native';
// import { BlurView } from '@react-native-community/blur';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import NavigationService from './NavigationService';
// import NavigationStack from './NavigationStack';
// import { storeViewRefs } from '../store/AppStore/actions';

// class AppNavigator extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             viewRef: null
//         };
//     }

//     onViewLoaded() {
//         this.setState({ viewRef: findNodeHandle(this.viewRef) });
//         this.props.storeRef(findNodeHandle(this.viewRef));
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <View
//                     ref={viewRef => {
//                         this.viewRef = viewRef;
//                     }}
//                     onLayout={() => {
//                         this.onViewLoaded();
//                     }}
//                     style={styles.container}>
//                     <NavigationStack
//                         ref={navigatorRef => {
//                             NavigationService.setTopLevelNavigator(navigatorRef);
//                         }}
//                     />
//                 </View>
//                 {this.state.viewRef && this.props.blurViewActive && (
//                     <BlurView
//                         style={styles.absolute}
//                         viewRef={this.state.viewRef}
//                         blurType="light"
//                         blurAmount={Platform.OS === 'ios' ? 6 : 4}
//                     />
//                 )}
//             </View>
//         );
//     }
// }

// AppNavigator.propTypes = {
//     blurViewActive: PropTypes.bool,
//     storeRef: PropTypes.func
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-start'
//     },
//     absolute: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         bottom: 0,
//         right: 0
//     }
// });

// function mapStateToProps(state) {
//     return {
//         blurViewActive: state.appReducer.blurViewActive
//     };
// }

// function mapDispatchToProps(dispatch) {
//     return {
//         storeRef: ref => dispatch(storeViewRefs(ref))
//     };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
