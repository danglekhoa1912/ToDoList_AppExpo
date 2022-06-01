import React from "react";
import { StyleSheet, Text } from "react-native";

export default function CustomText(props) {
   const { main, sub, style } = props;
   return (
      <Text style={[main && styles.main, sub && styles.sub, style]}>
         {props.children}
      </Text>
   );
}

const styles = StyleSheet.create({
   main: {
      fontSize: 18,
   },
   sub: {
      fontSize: 16,
      color: "#9A9A9A",
   },
});
