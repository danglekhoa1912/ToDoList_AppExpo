import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import CircularProgress from "react-native-circular-progress-indicator";

import { MainText, SubText } from "../../components/CustomText";
import Card from "../../components/Card";

const Information = (props) => (
  <Card style={styles.containerProfile}>
    <View style={styles.information}>
      <View style={styles.informationUser}>
        <Avatar
          size="medium"
          rounded
          avatarStyle={{ backgroundColor: "gray" }}
        />
        <View style={styles.user}>
          <MainText>Stephen Chow</MainText>
          <SubText>pangcheo1210@gmail.com</SubText>
        </View>
      </View>
      <View style={styles.containerTask}>
        <View>
          <MainText>120</MainText>
          <SubText>Create Tasks</SubText>
        </View>
        <View>
          <MainText>80</MainText>
          <SubText>Completed Tasks</SubText>
        </View>
      </View>
    </View>
    <Icon
      containerStyle={{ margin: 10 }}
      type="ionicon"
      name="settings-sharp"
    />
  </Card>
);

const CardQuanlitytask = (props) => {
  return (
    <Card
      style={{
        ...styles.card,
        backgroundColor: props.color,
      }}
    >
      <MainText style={{ color: "white" }}>{props.title}</MainText>
      <Text style={{ fontSize: 14, color: "white" }}>12 Tasks</Text>
    </Card>
  );
};

const Progress = (props) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress
        activeStrokeWidth={4}
        inActiveStrokeWidth={4}
        value={props.value}
        radius={50}
        activeStrokeColor={props.color}
        inActiveStrokeColor={"#D8D8D8"}
        inActiveStrokeOpacity={0.2}
        textColor={"#313131"}
        valueSuffix={"%"}
      />
      <MainText>{props.title}</MainText>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Information />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.containerCard}
      >
        <CardQuanlitytask title="Events" color="#F96060" />
        <CardQuanlitytask title="To do Task" color="#6074F9" />
        <CardQuanlitytask title="Quick Notes" color="#8560F9" />
      </ScrollView>
      <Card
        style={{
          height: 200,
          marginBottom: 48,
          marginHorizontal: 20,
        }}
      >
        <MainText style={{ marginLeft: 24, marginTop: 16 }}>Statistic</MainText>
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 20,
            marginTop: 20,
            marginBottom: 30,
            justifyContent: "space-around",
          }}
        >
          <Progress value={60} color="#F96060" title="Events" />
          <Progress value={40} color="#6074F9" title="To do" />
          <Progress value={80} color="#8560F9" title="Quick Notes" />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDFDFD",
    flex: 1,
  },
  containerProfile: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 22,
  },
  information: {
    marginVertical: 30,
    marginLeft: 24,
  },
  informationUser: {
    flexDirection: "row",
  },
  user: {
    marginLeft: 10,
  },
  containerTask: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    width: 160,
    height: 100,
    justifyContent: "space-around",
    padding: 24,
    marginHorizontal: 10,
  },
  containerCard: {
    marginHorizontal: 10,
  },
});

export default ProfileScreen;
