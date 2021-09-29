import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';

import Colors from '../constants/Colors';
import Card from './Card';

export default function CustomCard(props) {
  const [checked, setChecked] = useState(false);

  return (
    <Card style={{...styles.container, ...props.style}}>
      <View>
        <CheckBox
          containerStyle={{backgroundColor: 'white', borderWidth: 0}}
          title={
            <View>
              <Text
                style={{
                  ...styles.content,
                  textDecorationLine: checked ? 'line-through' : 'none',
                }}>
                {props.title}
              </Text>
              <Text
                style={{
                  ...styles.content,
                  color: '#9B9B9B',
                  textDecorationLine: checked ? 'line-through' : 'none',
                }}>
                {props.time}
              </Text>
            </View>
          }
          checked={checked}
          checkedIcon="check-circle"
          uncheckedIcon="circle-o"
          onPress={() => {
            setChecked(!checked);
          }}
          checkedColor={Colors.primary}
          uncheckedColor="#6074F9"
        />
      </View>
      <View
        style={{
          ...styles.status,
          backgroundColor: checked ? Colors.primary : '#6074F9',
        }}></View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    fontSize: 16,
    marginLeft: 23,
  },

  status: {
    width: 4,
    height: 21,
    justifyContent: 'flex-end',
  },
});
