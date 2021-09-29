import React from "react";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { default as theme } from "./custom-theme.json"; // <-- Import app theme
import MainNavigator from "./navigation/AppNavigator";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <StatusBar style="dark" />
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </GestureHandlerRootView>
  );
};

export default App;
