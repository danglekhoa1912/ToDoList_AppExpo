import React from "react";
import { View } from "react-native";
import {
   BottomNavigation,
   BottomNavigationTab,
   Icon,
} from "@ui-kitten/components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { COLORS } from "../../themes";
import Screens from "../../screens";
import { tabName } from "../../configs/NavigationContants";
import WorkListTab from "./WorkListTab";
import { ButtonHeader, FabCustom } from "../../components";

const Tab = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }, props) => (
   <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
   >
      <BottomNavigationTab
         title="MyTask"
         icon={(props) => <Icon {...props} name="checkmark-circle-2" />}
      />
      <BottomNavigationTab
         title="Menu"
         icon={(props) => <Icon {...props} name="grid" />}
      />
      <BottomNavigationTab style={{ top: -20 }} title={<FabCustom />} />
      <BottomNavigationTab
         title="Quick"
         icon={(props) => <Icon {...props} name="calendar-outline" />}
      />
      <BottomNavigationTab
         title="Profile"
         icon={(props) => <Icon {...props} name="person" />}
      />
   </BottomNavigation>
);

const EmptyScreen = () => <View></View>;

export default function HomeTab() {
   return (
      <Tab.Navigator
         screenOptions={{
            headerTitleAlign: "center",
         }}
         tabBar={(props) => <BottomTabBar {...props} />}
      >
         <Tab.Screen
            options={{
               title: "Work List",
               headerStyle: {
                  backgroundColor: COLORS.primary,
               },
               headerTintColor: "#FFFFFF",
               headerTitleStyle: { fontSize: 20 },
               headerRight: () => <ButtonHeader name="options-2-outline" />,
            }}
            name={tabName.workListTab}
            component={WorkListTab}
         />
         <Tab.Screen
            options={{ title: "Projects" }}
            name={tabName.menuTab}
            component={Screens.MenuScreen}
         />
         <Tab.Screen name="Add" component={EmptyScreen} />
         <Tab.Screen
            options={{ title: "Quick Notes" }}
            name={tabName.quickTab}
            component={Screens.QuickScreen}
         />
         <Tab.Screen
            name={tabName.profileTab}
            component={Screens.ProfileScreen}
         />
      </Tab.Navigator>
   );
}
