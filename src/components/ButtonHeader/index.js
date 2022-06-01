import { Icon, MenuItem, OverflowMenu } from "@ui-kitten/components";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ButtonHeader(props) {
   const [visible, setVisible] = useState(false);
   const [selectedIndex, setSelectedIndex] = useState(null);

   const onItemSelect = (index) => {
      setSelectedIndex(index);
   };

   const renderIcon = () => (
      <TouchableOpacity onPress={() => setVisible(true)}>
         <Icon
            style={{ width: 20, height: 20, marginRight: 10 }}
            fill="white"
            name={props.name}
         />
      </TouchableOpacity>
   );

   return (
      <OverflowMenu
         anchor={renderIcon}
         visible={visible}
         selectedIndex={selectedIndex}
         onSelect={onItemSelect}
         backdropStyle={styles.backdrop}
         onBackdropPress={() => setVisible(false)}
      >
         <MenuItem title="Incomplete Tasks" />
         <MenuItem title="Completed Tasks" />
         <MenuItem title="All Tasks" />
      </OverflowMenu>
   );
}

const styles = StyleSheet.create({
   backdrop: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
   },
});
