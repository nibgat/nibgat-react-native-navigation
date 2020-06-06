import React, {
    createContext,
    useReducer,
    useEffect
} from 'react';
import {
    SafeAreaView,
    StyleSheet
} from 'react-native';
import {
    getNavState,
    setNavState,
    updateNavState
} from './store';
const NavigationContext = createContext({
    navigationState: {}
});
const NavigationContainer = ({
    navigationState,
    navigation
}) => {
    const [state, setState] = useReducer((state, action) => {
        return {
            ...state,
            ...action
        };
    }, {});
    useEffect(() => {
        updateNavState({
            setFunc: e => setState(e),
            getFunc: state
        });
    }, []);
    const navigationSystem = () => {
        const currentNav = navigation.find(nav => nav.name === state);
        if(currentNav) {
            const component = currentNav.component;
            return <SafeAreaView
                style={styles.safeAreaView}
            >
                {component}
            </SafeAreaView>
        }
    }
    return <NavigationContext.Provider
        value={{
            navigationState: navigationState
        }}
    >
        {navigationSystem()}
    </NavigationContext.Provider>
};
const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    container: {

    }
});
export const getNavParams = getNavState;
export const setNavParams = setNavState;
export default NavigationContainer;