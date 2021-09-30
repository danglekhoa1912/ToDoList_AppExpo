import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import Colors from "../../constants/Colors";

const WelcomeScreen = (props) => {
  const switchScreenHandle = () => {
    props.navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={require("../../assets/undraw_events_2p66.png")} />
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
    backgroundColor: Colors.primary,
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
