import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial89519Navigator from '../features/Tutorial89519/navigator';
import NotificationList89491Navigator from '../features/NotificationList89491/navigator';
import Settings89490Navigator from '../features/Settings89490/navigator';
import Settings89482Navigator from '../features/Settings89482/navigator';
import UserProfile89480Navigator from '../features/UserProfile89480/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial89519: { screen: Tutorial89519Navigator },
NotificationList89491: { screen: NotificationList89491Navigator },
Settings89490: { screen: Settings89490Navigator },
Settings89482: { screen: Settings89482Navigator },
UserProfile89480: { screen: UserProfile89480Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
