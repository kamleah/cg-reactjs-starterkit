import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import { Animated } from 'react-native';

import Home from '../pages/Home/screens/Home';
import Router from '../Router';
const MainNavigator = createStackNavigator(
    {
        Router: {
            screen: Router,
            navigationOptions: { header: null }
        },
        Home: {
            screen: Home,
            navigationOptions: { header: null }
        }
    },
    {
        initialRouteName: 'Router',
        defaultNavigationOptions: {
            gesturesEnabled: false
        },
        cardStyle: {
            shadowOpacity: 0
        },
        transitionConfig: props => ({
            transitionSpec: returnTransitionConfig(props),
            screenInterpolator: ({ layout, position, scene, scenes }) => {
                const sceneObj = getLatestScenes(scenes);
                if (
                    (sceneObj.from === 'Router' && sceneObj.to === 'Home') 
                ) {
                    const { index } = scene;
                    const opacity = position.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0, 1, 1]
                    });
                    return { opacity };
                }
                if (
                    sceneObj.from === 'SRIdentityVerificationScreen' &&
                    sceneObj.to === 'FullScreenSearch'
                ) {
                    const { index } = scene;
                    const { initHeight } = layout;
                    const translateY = position.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [initHeight, 0, -initHeight]
                    });

                    return {
                        transform: [{ translateY }]
                    };
                }
                const { index } = scene;
                const { initWidth } = layout;
                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [initWidth, 0, -initWidth]
                });
                return {
                    transform: [{ translateX }]
                };
            }
        })
    }
);

const getLatestScenes = scenes => {
    if (scenes.length >= 2) {
        const ln = scenes.length;
        return {
            from: scenes[ln - 2].route.routeName,
            to: scenes[ln - 1].route.routeName
        };
    }
    return { from: scenes[0].route.routeName, to: null };
};

const returnTransitionConfig = props => {
    const sceneObj = getLatestScenes(props.scenes);
    if (
        (sceneObj.from === 'SRIdentityVerificationScreen' && sceneObj.to === 'FullScreenSearch') ||
        (sceneObj.from === 'StatementList' && sceneObj.to === 'StatementDetails')
    ) {
        return slowScreenConfig;
    }
    return defaultScreenConfig;
};

const defaultScreenConfig = {
    duration: 250
};

const slowScreenConfig = {
    duration: 300
};

const App = createAppContainer(MainNavigator);

export default App;
