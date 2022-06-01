import React, { useState } from "react";
import { FAB, Icon as IconElement } from "react-native-elements";

import { COLORS } from "../../themes";
import MenuAdd from "../MenuAdd";

export default function FabCustom(props) {
   const [visible, setVisible] = useState(false);

   const toggleOverlay = () => {
      setVisible(!visible);
   };

   return (
      <>
         <FAB
            icon={<IconElement name="plus" type="entypo" color="white" />}
            color={COLORS.primary}
            onPress={toggleOverlay}
         />
         <MenuAdd visible={visible} toggleOverlay={toggleOverlay} />
      </>
   );
}
