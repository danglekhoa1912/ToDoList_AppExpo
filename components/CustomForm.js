import {Input} from '@ui-kitten/components';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CustomForm = props => {
  return (
    <View style={{marginVertical: 15}}>
      <Text style={{fontSize: 20, marginBottom: 15}}>{props.title}</Text>
      <Input
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={() => {}}
        secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F2F2F2',
    color: 'black',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#CFCFCF',
  },
});

export default CustomForm;
