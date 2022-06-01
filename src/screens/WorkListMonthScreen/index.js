import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";

import WorkListDayScreen from "../WorkListDayScreen";
import TASK from "../../../data/task-data";
import { COLORS } from "../../themes";

export default function WorkListMonthScreen() {
   const listMark = TASK.map((task) => ({
      date: moment(task.date, "DD-MM-YYYY"),
      dots: [
         {
            color: COLORS.primary,
            selectedColor: COLORS.primary,
         },
      ],
   }));

   return (
      <View style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
         <CalendarStrip
            markedDates={listMark}
            scrollable
            scrollerPaging
            calendarAnimation={{ type: "sequence", duration: 30 }}
            selectedDate={new Date()}
            daySelectionAnimation={{
               type: "background",
               duration: 200,
               borderWidth: 1,
               borderHighlightColor: COLORS.primary,
            }}
            style={styles.calender}
            calendarColor={"white"}
            highlightDateNumberStyle={{ color: COLORS.primary }}
            highlightDateNameStyle={{ color: COLORS.primary }}
            disabledDateNameStyle={{ color: "grey" }}
            disabledDateNumberStyle={{ color: "grey" }}
            iconContainer={{ flex: 0.1 }}
         />
         <WorkListDayScreen />
      </View>
   );
}

const styles = StyleSheet.create({
   calender: {
      height: 100,
      paddingTop: 20,
      paddingBottom: 10,
   },
});
