import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card(props) {
   return (
      <View style={{ ...styles.container, ...props.style }}>
         {props.children}
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      borderRadius: 5,
      shadowColor: "black",
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      backgroundColor: "white",
   },
});
