import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { CheckBox } from "react-native-elements";
import Card from "../../components/Card";

const notes = [
  {
    color: "#6074F9",
    title: "Meeting with Jessica in Central Park at 10:30PM",
    type: "note",
  },
  {
    color: "#E42B6A",
    title: "Replace dashboard icon with more colorfull ones",
    type: "note",
  },
  {
    color: "#5ABB56",
    title: "Home work today",
    type: "checkbox",
    listCheckBox: ["Buy a milk", "Buy a shampoo", "Buy a toothbrush"],
  },
  {
    color: "#6074F9",
    title: "Meeting with Jessica in Central Park at 10:30PM",
    type: "note",
  },
  {
    color: "#E42B6A",
    title: "Replace dashboard icon with more colorfull ones",
    type: "note",
  },
  {
    color: "#5ABB56",
    title: "Home work today",
    type: "checkbox",
    listCheckBox: ["Buy a milk", "Buy a shampoo", "Buy a toothbrush"],
  },
];

const CustomCheckBox = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckBox
      checked={checked}
      checkedIcon="square"
      checkedColor="#979797"
      onPress={() => {
        setChecked(!checked);
      }}
      containerStyle={styles.checkBox}
      title={props.title}
      textStyle={{
        fontSize: 16,
        fontWeight: "normal",
        textDecorationLine: checked ? "line-through" : "none",
      }}
    />
  );
};

const CardNote = (props) => {
  return (
    <Card style={styles.containerCard}>
      <View style={{ ...styles.color, backgroundColor: props.color }}></View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{props.title}</Text>
        {props.type === "checkbox" ? (
          <ScrollView style={styles.containerCheckBox}>
            {props.listCheckBox.map((item, index) => (
              <CustomCheckBox key={index} title={item} />
            ))}
          </ScrollView>
        ) : null}
      </View>
    </Card>
  );
};

const QuickScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CardNote
            color={item.color}
            title={item.title}
            type={item.type}
            listCheckBox={item.listCheckBox ? item.listCheckBox : ""}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDFDFD",
    flex: 1,
    paddingTop: 24,
  },
  containerCard: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  containerTitle: {
    marginHorizontal: 25,
    marginVertical: 20,
  },
  title: {
    fontSize: 16,
    lineHeight: 30,
  },
  color: {
    width: 120,
    height: 3,
    marginLeft: 25,
  },
  containerCheckBox: {
    marginTop: 16,
  },
  checkBox: {
    backgroundColor: "#FFFFFF",
    borderWidth: 0,
    marginLeft: 0,
  },
});

export default QuickScreen;
