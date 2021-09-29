import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const CustomButton = props => {
  return (
    <TouchableOpacity style={{...props.style}} onPress={props.onPress}>
      <Text style={{...props.styleTitle}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
