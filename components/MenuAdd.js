import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Overlay} from 'react-native-elements';

const ButtonAdd = props => {
  return (
    <TouchableOpacity style={styles.containerButton}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default function MenuAdd(props) {
  return (
    <Overlay
      overlayStyle={styles.container}
      isVisible={props.visible}
      onBackdropPress={props.toggleOverlay}>
      <ButtonAdd title="Add Task" />
      <ButtonAdd title="Add Quick Note" />
      <ButtonAdd title="Add Check List" />
    </Overlay>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 222,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
  },
  containerButton: {
    width: 250,
    height: 74,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
  },
  title: {
    fontSize: 18,
  },
});
