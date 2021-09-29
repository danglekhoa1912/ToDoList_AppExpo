import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function MainText(props) {
  return (
    <View>
      <Text style={{...styles.main, ...props.style}}>{props.children}</Text>
    </View>
  );
}

export function SubText(props) {
  return (
    <View>
      <Text style={{...styles.sub, ...props.style}}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    fontSize: 18,
  },
  sub: {
    fontSize: 16,
    color: '#9A9A9A',
  },
});
