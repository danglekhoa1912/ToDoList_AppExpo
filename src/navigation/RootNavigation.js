import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screens from "../screens";
import { stackName } from "../configs/NavigationContants";
import HomeTab from "./Tab/HomeTab";

const Stack = createNativeStackNavigator();

const defaultOption = {
   headerShown: false,
};

export default function RootNavigation() {
   return (
      <Stack.Navigator screenOptions={defaultOption}>
         <Stack.Screen
            name={stackName.welcomeStack}
            component={Screens.WelcomeScreen}
         />
         <Stack.Screen
            name={stackName.loginStack}
            component={Screens.LoginScreen}
         />
         <Stack.Screen
            name={stackName.forgotPasswordStack}
            component={Screens.ForgotPasswordScreen}
         />
         <Stack.Screen
            name={stackName.resetPasswordStack}
            component={Screens.ResetPasswordScreen}
         />
         <Stack.Screen
            name={stackName.successfulStack}
            component={Screens.SuccessfulScreen}
         />
         <Stack.Screen name={stackName.homeStack} component={HomeTab} />
      </Stack.Navigator>
   );
}
