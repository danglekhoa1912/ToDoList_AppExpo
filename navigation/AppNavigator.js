import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ButtonHeader from "../components/ButtonHeader";
import Colors from "../constants/Colors";

import WelcomeScreen from "../screens/LoginScreen/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import ForgotScreen from "../screens/LoginScreen/ForgotPasswordScreen";
import ResetPassword from "../screens/LoginScreen/ResetPassword";
import Successful from "../screens/LoginScreen/Successful";
import MenuScreen from "../screens/HomeScreen/MenuScreen";
import QuickScreen from "../screens/HomeScreen/QuickScreen";
import ProfileScreen from "../screens/HomeScreen/ProfileScreen";
import WorkListDayScreen from "../screens/HomeScreen/WorkList/WorkListDayScreen";
import WorkListMonthScreen from "../screens/HomeScreen/WorkList/WorkListMonthScreen";
import FabCustom from "../components/FabCustom";
import EmtyScreen from "../screens/HomeScreen/EmtyScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();

const defaultOption = {
  headerShown: false,
};

const WorkList = () => (
  <TabTop.Navigator
    screenOptions={{
      tabBarStyle: { backgroundColor: Colors.primary },
      tabBarActiveTintColor: "white",
      tabBarLabelStyle: { fontSize: 16 },
    }}
  >
    <TabTop.Screen
      options={{
        title: "Today",
      }}
      name="Worklist-D"
      component={WorkListDayScreen}
    />
    <TabTop.Screen
      options={{
        title: "Month",
      }}
      name="Worklist-M"
      component={WorkListMonthScreen}
    />
  </TabTop.Navigator>
);

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

const HomeNavigator = () => {
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
            backgroundColor: Colors.primary,
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: { fontSize: 20 },
          headerRight: () => <ButtonHeader name="options-2-outline" />,
        }}
        name="MyTask"
        component={WorkList}
      />
      <Tab.Screen
        options={{ title: "Projects" }}
        name="Menu"
        component={MenuScreen}
      />
      <Tab.Screen name="Add" component={EmtyScreen} />
      <Tab.Screen
        options={{ title: "Quick Notes" }}
        name="Quick"
        component={QuickScreen}
      />
      <Tab.Screen name="Profiles" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const LoginNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultOption}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPass" component={ForgotScreen} />
      <Stack.Screen name="ResetPass" component={ResetPassword} />
      <Stack.Screen name="Successful" component={Successful} />
    </Stack.Navigator>
  );
};

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={defaultOption}>
      <Stack.Screen name="LoginScreen" component={LoginNavigator} />
      <Stack.Screen name="HomeScreen" component={HomeNavigator} />
    </Stack.Navigator>
  );
}
