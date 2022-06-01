import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { CustomButton } from "../../components";
import { COLORS } from "../../themes";
import { Event } from "../../assets";
import { stackName } from "../../configs/NavigationContants";

const WelcomeScreen = (props) => {
   const switchScreenHandle = () => {
      props.navigation.navigate(stackName.loginStack);
   };

   return (
      <View style={styles.container}>
         <View style={styles.containerImage}>
            <Image source={Event} />
         </View>
         <View style={styles.containerTitle}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
               Welcome to aking
            </Text>
            <Text style={{ fontSize: 18 }}>Whats going to happen tomorrow</Text>
         </View>
         <View style={styles.containerButton}>
            <CustomButton
               title="Get Started"
               onPress={switchScreenHandle}
               style={styles.button}
            />
            <CustomButton
               title="Log In"
               onPress={switchScreenHandle}
               style={{ color: "white" }}
            />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
   },
   containerImage: {
      width: "100%",
      height: 250,
      marginHorizontal: 35,
      marginTop: 100,
      marginBottom: 70,
      alignItems: "center",
   },
   containerTitle: {
      alignItems: "center",
      marginHorizontal: 35,
      marginBottom: 100,
   },
   containerButton: {
      width: "100%",
      flex: 1,
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: COLORS.primary,
      paddingHorizontal: 50,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      paddingVertical: 20,
   },
   button: {
      backgroundColor: "white",
      height: 50,
      borderRadius: 5,
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
   },
});

export default WelcomeScreen;
