import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

const NavigationWithoutProp = {
  navigate: (screenName, param) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(screenName, param);
    }
  },
  goBack: () => {
    if (navigationRef.isReady()) {
      navigationRef.goBack();
    }
  },
  replace: (screenName, param) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.replace(screenName, param));
    }
  },
};

export const navigate = NavigationWithoutProp.navigate;
export const goBack = NavigationWithoutProp.goBack;
export const replace = NavigationWithoutProp.replace;
