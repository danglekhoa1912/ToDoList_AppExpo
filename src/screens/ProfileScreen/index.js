import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import CircularProgress from "react-native-circular-progress-indicator";

import { Card, CustomText } from "../../components";

const height = Dimensions.get("screen").height;
console.log(height);

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
               <CustomText main>Stephen Chow</CustomText>
               <CustomText sub>pangcheo1210@gmail.com</CustomText>
            </View>
         </View>
         <View style={styles.containerTask}>
            <View>
               <CustomText main>120</CustomText>
               <CustomText sub>Create Tasks</CustomText>
            </View>
            <View>
               <CustomText main>80</CustomText>
               <CustomText sub>Completed Tasks</CustomText>
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
         <CustomText main style={{ color: "white" }}>
            {props.title}
         </CustomText>
         <CustomText sub style={{ fontSize: 14, color: "white" }}>
            12 Tasks
         </CustomText>
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
         <CustomText main>{props.title}</CustomText>
      </View>
   );
};

const ProfileScreen = () => {
   return (
      <View style={styles.container}>
         <Information />
         <View style={styles.containerCard}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
               <CardQuanlitytask title="Events" color="#F96060" />
               <CardQuanlitytask title="To do Task" color="#6074F9" />
               <CardQuanlitytask title="Quick Notes" color="#8560F9" />
            </ScrollView>
         </View>
         <Card
            style={{
               marginBottom: 30,
               marginHorizontal: 20,
            }}
         >
            <CustomText main style={{ marginLeft: 24, marginTop: 16 }}>
               Statistic
            </CustomText>
            <View
               style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginVertical: 20,
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
      padding: 24,
      marginHorizontal: 10,
   },
   containerCard: {
      marginHorizontal: 10,
      height: 100,
      marginBottom: 20,
   },
});

export default ProfileScreen;
