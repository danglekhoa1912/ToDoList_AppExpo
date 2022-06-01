import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Screens from "../../screens";
import { tabName } from "../../configs/NavigationContants";
import { COLORS } from "../../themes";

const TabTop = createMaterialTopTabNavigator();

export default function WorkListTab() {
   return (
      <TabTop.Navigator
         screenOptions={{
            tabBarStyle: { backgroundColor: COLORS.primary },
            tabBarActiveTintColor: "white",
            tabBarLabelStyle: { fontSize: 16 },
         }}
      >
         <TabTop.Screen
            options={{
               title: "Today",
            }}
            name={tabName.workListDayTab}
            component={Screens.WorkListDayScreen}
         />
         <TabTop.Screen
            options={{
               title: "Month",
            }}
            name={tabName.workListMonthTab}
            component={Screens.WorkListMonthScreen}
         />
      </TabTop.Navigator>
   );
}
