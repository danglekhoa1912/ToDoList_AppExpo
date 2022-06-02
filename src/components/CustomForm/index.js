import { Input } from "@ui-kitten/components";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CustomForm = (props) => {
   const { errorMsg, touched } = props;

   const isShowError = !!errorMsg && touched;
   return (
      <View style={{ marginVertical: 15 }}>
         <Text style={{ fontSize: 20, marginBottom: 15 }}>{props.title}</Text>
         <Input
            {...props}
            style={[styles.input, isShowError && styles.errorBackground]}
         />
         {isShowError && <Text style={styles.errorText}>* {errorMsg}</Text>}
      </View>
   );
};

const styles = StyleSheet.create({
   input: {
      backgroundColor: "#F2F2F2",
      color: "black",
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderColor: "#CFCFCF",
   },
   errorBackground: { backgroundColor: "#f9c8c8" },
   errorText: { color: "red" },
});

export default CustomForm;
