import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import Card from "../../components/Card";
import { MainText, SubText } from "../../components/CustomText";

const Projects = [
  {
    color: {
      mainColor: "#6074F9",
      subColor: "#DBDDEF",
    },
    title: "Personal",
    quantityTask: 10,
  },
  {
    color: {
      mainColor: "#E42B6A",
      subColor: "#E8C7D2",
    },
    title: "Teamworks",
    quantityTask: 5,
  },
  {
    color: {
      mainColor: "#5ABB56",
      subColor: "#D4F1D3",
    },
    title: "Home",
    quantityTask: 10,
  },
  {
    color: {
      mainColor: "#BC79C3",
      subColor: "#F9DFFB",
    },
    title: "Meet",
    quantityTask: 10,
  },
];

const Project = (props) => {
  return (
    <Card style={styles.containerProject}>
      <View
        style={{
          ...styles.colorProject,
          backgroundColor: props.color.subColor,
        }}
      >
        <View
          style={{
            ...styles.color,
            backgroundColor: props.color.mainColor,
          }}
        ></View>
      </View>
      <View style={styles.containerTitle}>
        <MainText style={styles.title}>{props.title}</MainText>
        <SubText>{props.quantityTask} Tasks</SubText>
      </View>
    </Card>
  );
};

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      {Projects.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          color={project.color}
          quantityTask={project.quantityTask}
        />
      ))}
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.containerIcon}>
          <Icon color="white" type="entypo" name="plus" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 28,
    flex: 1,
    backgroundColor: "#FDFDFD",
    justifyContent: "center",
  },
  containerProject: {
    width: 160,
    height: 180,
    marginHorizontal: 16,
    marginVertical: 12,
  },
  colorProject: {
    width: 26,
    height: 26,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    margin: 24,
  },
  color: {
    width: 14,
    height: 14,
    borderRadius: 25,
  },
  containerTitle: {
    marginLeft: 27,
    marginTop: 24,
  },
  title: {
    marginBottom: 14,
  },
  task: {
    fontSize: 16,
    color: "#9A9A9A",
  },
  containerButton: {
    width: 160,
    height: 180,
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 12,
  },
  containerIcon: {
    width: 80,
    height: 80,
    backgroundColor: "#6074F9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});

export default MenuScreen;
