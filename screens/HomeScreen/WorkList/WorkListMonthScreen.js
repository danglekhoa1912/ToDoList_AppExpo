import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";

import WorkListDayScreen from "./WorkListDayScreen";
import TASK from "../../../data/task-data";
import Colors from "../../../constants/Colors";

export default function WorkListMonthScreen() {
  const listMark = TASK.map((task) => ({
    date: moment(task.date, "DD-MM-YYYY"),
    dots: [
      {
        color: Colors.primary,
        selectedColor: Colors.primary,
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
          borderHighlightColor: Colors.primary,
        }}
        style={styles.calender}
        calendarColor={"white"}
        highlightDateNumberStyle={{ color: Colors.primary }}
        highlightDateNameStyle={{ color: Colors.primary }}
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
