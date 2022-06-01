import { Icon } from "@ui-kitten/components";
import moment from "moment";
import React from "react";
import { View, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { Card, CustomCard, CustomText } from "../../components";
import TASK from "../../../data/task-data";

const Option = (props) => (
   <TouchableOpacity
      onPress={props.onPress}
      style={{
         ...styles.option,
         ...props.style,
      }}
   >
      <Icon
         style={{ width: 20, height: 20 }}
         fill="#F96060"
         name={props.name}
      />
   </TouchableOpacity>
);

const WorkListDayScreen = (props) => {
   let date;
   const renderRight = (progress, dragX) => {
      return (
         <Card style={styles.containerOption}>
            <Option
               onPress={() => alert("edit")}
               name="edit-outline"
               style={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
            />
            <Option
               onPress={() => alert("delete")}
               name="trash-2-outline"
               style={{ borderTopRightRadius: 5, borderBottomRightRadius: 5 }}
            />
         </Card>
      );
   };

   const RenderItem = ({ item }) => (
      <Swipeable overshootRight={false} renderRightActions={renderRight}>
         <CustomCard
            style={{ marginVertical: 10 }}
            title={item.content}
            time={item.time}
         />
      </Swipeable>
   );

   const RenderDate = ({ item }) => {
      if (item.date != date) {
         date = item.date;
         return (
            <View style={{ marginVertical: 16 }}>
               <CustomText sub>
                  {moment(item.date, "DD-MM-YYYY").calendar({
                     sameDay: "[TODAY], MMM D/YYYY",
                     nextDay: "[TOMORROW], MMM D/YYYY",
                     nextWeek: "dddd, MMM D/YYYY",
                     sameElse: "dddd, MMM D/YYYY",
                  })}
               </CustomText>
            </View>
         );
      }
      return null;
   };

   return (
      <View style={{ ...styles.container, ...props.style }}>
         <FlatList
            showsVerticalScrollIndicator={false}
            data={TASK.sort(
               (a, b) =>
                  moment(a.date, "DD-MM-YYYY").format("YYYYMMDD") -
                  moment(b.date, "DD-MM-YYYY").format("YYYYMMDD")
            ).filter(
               (task) =>
                  moment(task.date, "DD-MM-YYYY").diff(new Date(), "day") >= 0
            )}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(task) => (
               <View>
                  <RenderDate item={task.item} />
                  <RenderItem item={task.item} />
               </View>
            )}
         />
      </View>
   );
};

export default WorkListDayScreen;

const styles = StyleSheet.create({
   container: {
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 10,
      backgroundColor: "#FDFDFD",
      flex: 1,
   },
   containerOption: {
      width: 124,
      flexDirection: "row",
      marginVertical: 10,
      backgroundColor: "#EDE9E5",
      marginLeft: 10,
      justifyContent: "space-between",
      alignItems: "center",
   },
   option: {
      width: 60,
      height: 70,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
   },
});
