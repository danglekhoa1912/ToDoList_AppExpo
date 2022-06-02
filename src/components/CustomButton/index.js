import React from "react";
import { Text, TouchableOpacity, ActivityIndicator } from "react-native";

const CustomButton = (props) => {
   return (
      <TouchableOpacity style={{ ...props.style }} onPress={props.onPress}>
         {props.isloading ? (
            <ActivityIndicator size="small" color="#0000ff" />
         ) : (
            <Text style={{ ...props.styleTitle }}>{props.title}</Text>
         )}
      </TouchableOpacity>
   );
};

export default CustomButton;
