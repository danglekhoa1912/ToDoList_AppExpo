import React, { useState } from "react";
import {
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
   KeyboardAvoidingView,
   Keyboard,
   TouchableWithoutFeedback,
   Platform,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-root-toast";

import { CustomButton, CustomForm } from "../../components";
import { stackName } from "../../configs/NavigationContants";
import { COLORS } from "../../themes";
import { replace } from "../../navigation/NavigationWithoutProp";

const validationSchema = Yup.object().shape({
   email: Yup.string()
      .required("Không được bỏ trống")
      .email("Email không hợp lệ"),
   password: Yup.string().required("Không được bỏ trống"),
   name: Yup.string().required("Không được bỏ trống"),
});

const RegisterScreen = () => {
   const auth = getAuth();
   const [secureTextEntry, setSecureTextEntry] = useState(true);
   const [isloading, setIsLoading] = useState(false);

   const toggleSecureEntry = () => {
      setSecureTextEntry(!secureTextEntry);
   };

   const renderIconSecure = () => (
      <TouchableOpacity>
         <Ionicons
            onPress={toggleSecureEntry}
            color={COLORS.primary}
            name={secureTextEntry ? "eye-off" : "eye"}
            size={25}
         />
      </TouchableOpacity>
   );

   const renderIconLeft = (name) => (
      <Ionicons size={25} color={COLORS.secondary} name={name} />
   );

   const handleSubmit = ({ email, password }) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
         .then((userCrendential) => {
            let toast = Toast.show("Register Succesful", {
               duration: Toast.durations.LONG,
               backgroundColor: "gray",
            });

            // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
            setTimeout(() => {
               Toast.hide(toast);
            }, 2000);
            replace(stackName.loginStack, {});
         })
         .catch((error) => {
            alert(error.message);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   return (
      <TouchableWithoutFeedback
         style={{ flex: 1 }}
         onPress={() => {
            Keyboard.dismiss();
         }}
      >
         <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "position"}
         >
            <View style={styles.containerTitle}>
               <Text style={styles.mainTitle}>Welcome</Text>
               <Text style={styles.subTitle}>Register to continue</Text>
            </View>
            <Formik
               initialValues={{
                  email: "",
                  name: "",
                  password: "",
               }}
               onSubmit={handleSubmit}
               validationSchema={validationSchema}
            >
               {({
                  errors,
                  values,
                  touched,
                  handleChange,
                  handleSubmit,
                  handleBlur,
               }) => {
                  return (
                     <View>
                        <View style={styles.containerForm}>
                           <CustomForm
                              keyboardType="email-address"
                              value={values.email}
                              onChangeText={handleChange("email")}
                              accessoryLeft={() => renderIconLeft("mail")}
                              onBlur={handleBlur("email")}
                              errorMsg={errors.email}
                              touched={touched.email}
                              title="Username"
                              placeholder="Enter your email"
                           />
                           <CustomForm
                              title="Name"
                              placeholder="Enter your name"
                              accessoryLeft={() => renderIconLeft("person")}
                              value={values.name}
                              onChangeText={handleChange("name")}
                              onBlur={handleBlur("name")}
                              errorMsg={errors.name}
                              touched={touched.name}
                           />
                           <CustomForm
                              title="Password"
                              placeholder="Enter your password"
                              accessoryRight={renderIconSecure}
                              secureTextEntry={secureTextEntry}
                              accessoryLeft={() =>
                                 renderIconLeft("lock-closed")
                              }
                              value={values.password}
                              onChangeText={handleChange("password")}
                              onBlur={handleBlur("password")}
                              errorMsg={errors.password}
                              touched={touched.password}
                           />
                        </View>
                        <View style={styles.containerButton}>
                           <CustomButton
                              isloading={isloading}
                              onPress={handleSubmit}
                              styleTitle={{ fontSize: 18, color: "white" }}
                              style={styles.button}
                              title="Log In"
                           />
                        </View>
                     </View>
                  );
               }}
            </Formik>
         </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
   );
};

export default RegisterScreen;

const styles = StyleSheet.create({
   container: {
      flexDirection: "column",
   },
   containerTitle: {
      marginTop: 100,
      marginLeft: 20,
   },
   mainTitle: {
      fontSize: 32,
   },
   subTitle: {
      fontSize: 16,
      color: "#9B9B9B",
      marginTop: 10,
   },
   containerForm: {
      marginHorizontal: 25,
      marginTop: 50,
      marginBottom: 80,
   },
   buttonForgot: {
      alignSelf: "flex-end",
   },
   containerButton: {
      marginHorizontal: 50,
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
