import React, { useCallback, useEffect, useState } from "react";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { getAuth } from "firebase/auth";
import { initializeApp, getApp, getApps } from "firebase/app";
import { RootSiblingParent } from "react-native-root-siblings";

import { default as theme } from "./custom-theme.json"; // <-- Import app theme
import RootNavigation from "./src/navigation/RootNavigation";
import { Splash } from "./src/components";
import { navigationRef } from "./src/navigation/NavigationWithoutProp";

const App = () => {
   const firebaseConfig = {
      apiKey: "AIzaSyBPRDbFWKqMlQyLoxExviZ8C-s4zum0Vc8",
      authDomain: "todo-app-446be.firebaseapp.com",
      projectId: "todo-app-446be",
      storageBucket: "todo-app-446be.appspot.com",
      messagingSenderId: "605619539",
      appId: "1:605619539:web:84a78f7014b75aa3940da6",
      measurementId: "G-TDJJ8V6ST6",
   };

   const [appIsReady, setAppIsReady] = useState(false);

   useEffect(() => {
      async function prepare() {
         try {
            // Keep the splash screen visible while we fetch resources
            // await SplashScreen.preventAutoHideAsync();
            // Artificially delay for two seconds to simulate a slow loading
            // experience. Please remove this if you copy and paste the code!
            await new Promise((resolve) => setTimeout(resolve, 1000));
            // let app;
            // if (firebase.apps.length === 0) {
            //    app = firebase.initializeApp(firebaseConfig);
            // } else {
            //    app = firebase.app();
            // }
         } catch (e) {
            console.warn(e);
         } finally {
            const auth = getAuth();
            // Tell the application to render
            setAppIsReady(true);
            if (getApps().length === 0) initializeApp(firebaseConfig);
            else {
               getApp();
            }
         }
      }

      prepare();
   }, []);

   const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
         // This tells the splash screen to hide immediately! If we call this after
         // `setAppIsReady`, then we may see a blank screen while the app is
         // loading its initial state and rendering its first pixels. So instead,
         // we hide the splash screen once we know the root view has already
         // performed layout.
         await SplashScreen.hideAsync();
      }
   }, [appIsReady]);

   if (!appIsReady) {
      return <Splash />;
   }

   return (
      <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
         <IconRegistry icons={EvaIconsPack} />
         <RootSiblingParent>
            <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
               <StatusBar style="dark" />
               <NavigationContainer ref={navigationRef}>
                  <RootNavigation />
               </NavigationContainer>
            </ApplicationProvider>
         </RootSiblingParent>
      </GestureHandlerRootView>
   );
};

export default App;
