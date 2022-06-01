import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { Page } from "../../assets";

export default function Splash() {
   return (
      <View style={styles.container}>
         <Image style={styles.image} source={Page} />
         <Text style={styles.title}>aking</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
   image: {
      width: 150,
      height: 150,
   },
   title: {
      fontSize: 48,
   },
});
