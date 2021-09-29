import React, {useState} from 'react';
import {FAB, Icon as IconElement} from 'react-native-elements';
import Colors from '../constants/Colors';
import MenuAdd from './MenuAdd';

export default function FabCustom(props) {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <>
      <FAB
        icon={<IconElement name="plus" type="entypo" color="white" />}
        color={Colors.primary}
        onPress={toggleOverlay}
      />
      <MenuAdd visible={visible} toggleOverlay={toggleOverlay} />
    </>
  );
}
