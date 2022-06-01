import React from "react";
import {
   View,
   Text,
   StyleSheet,
   TouchableWithoutFeedback,
   Keyboard,
} from "react-native";

import { CustomButton, CustomForm } from "../../components";
import { stackName } from "../../configs/NavigationContants";
import { COLORS } from "../../themes";

const ForgotPasswordScreen = (props) => {
   const sendRequestHandle = () => {
      props.navigation.navigate(stackName.resetPasswordStack);
   };

   return (
      <TouchableWithoutFeedback
         style={{ flex: 1 }}
         onPress={() => {
            Keyboard.dismiss();
         }}
      >
         <View style={styles.container}>
            <View style={styles.containerTitle}>
               <Text style={styles.mainTitle}>Forgot Password</Text>
               <Text style={styles.subTitle}>
                  Please enter your email below to recevie your password reset
                  instructions
               </Text>
            </View>
            <View style={styles.form}>
               <CustomForm title="Username" placeholder="Enter your username" />
            </View>
            <View style={styles.containerButton}>
               <CustomButton
                  style={styles.button}
                  styleTitle={{ fontSize: 18, color: "white" }}
                  title="Send Request"
                  onPress={sendRequestHandle}
               />
            </View>
         </View>
      </TouchableWithoutFeedback>
   );
};

const styles = StyleSheet.create({
   container: { flex: 1, flexDirection: "column" },
   containerTitle: {
      marginTop: 80,
      marginHorizontal: 24,
   },
   mainTitle: {
      fontSize: 36,
   },
   subTitle: {
      fontSize: 16,
      color: "#9B9B9B",
   },
   containerButton: {
      marginHorizontal: 24,
   },
   form: {
      marginHorizontal: 24,
      marginVertical: 30,
   },
   button: {
      width: "100%",
      height: 50,
      backgroundColor: COLORS.primary,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
   },
});

export default ForgotPasswordScreen;
