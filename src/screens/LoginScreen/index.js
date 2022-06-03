import { Formik } from "formik";
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
import * as Yup from "yup";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-simple-toast";
import { useDispatch } from "react-redux";

import { CustomButton, CustomForm } from "../../components";
import { stackName } from "../../configs/NavigationContants";
import { navigate, replace } from "../../navigation/NavigationWithoutProp";
import { COLORS } from "../../themes";
import { requestGetuser } from "../../redux/thunk/UserActionThunk";

const validationSchema = Yup.object().shape({
   email: Yup.string()
      .required("Không được bỏ trống")
      .email("Email không hợp lệ"),
   password: Yup.string().required("Không được bỏ trống"),
});

const LoginScreen = (props) => {
   const dispatch = useDispatch();
   const [secureTextEntry, setSecureTextEntry] = useState(true);

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

   const changeScreenHandle = () => {
      navigate(stackName.forgotPasswordStack);
   };

   const handleSubmit = ({ email, password }) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            const user = userCredential.user;
            Toast.show("Login Succesful!", Toast.LONG);
            dispatch(requestGetuser(user.uid));
            replace(stackName.homeStack);
         })
         .catch((error) => {
            alert(error.message);
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
               <Text style={styles.mainTitle}>Welcome back</Text>
               <Text style={styles.subTitle}>Sign in to continue</Text>
            </View>
            <Formik
               initialValues={{
                  email: "",
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
                           <TouchableOpacity
                              style={styles.buttonForgot}
                              onPress={changeScreenHandle}
                           >
                              <Text style={{ fontSize: 18 }}>
                                 Forgot password
                              </Text>
                           </TouchableOpacity>
                        </View>
                        <View style={styles.containerButton}>
                           <CustomButton
                              styleTitle={{ fontSize: 18, color: "white" }}
                              style={styles.button}
                              title="Log In"
                              onPress={handleSubmit}
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

export default LoginScreen;
