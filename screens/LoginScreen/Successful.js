import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Colors from "../../constants/Colors";
import CustomButton from "../../components/CustomButton";

export default function Successful(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={require("../../assets/undraw_confirmed_81ex.png")} />
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.mainTitle}>Succesful!</Text>
        <Text style={styles.subTitle}>
          You have succesfully change password. Please use your new passwords
          when logging in.
        </Text>
      </View>
      <View style={styles.containerButton}>
        <CustomButton
          styleTitle={{ fontSize: 18, color: "white" }}
          style={styles.button}
          title="Log In"
          onPress={() => {
            props.navigation.navigate("Login");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    marginTop: 170,
    marginHorizontal: 110,
    marginBottom: 40,
  },
  containerTitle: {
    marginHorizontal: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 32,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
  },
  containerButton: {
    marginHorizontal: 50,
    marginTop: 50,
  },

  button: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
