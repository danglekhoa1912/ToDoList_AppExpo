import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

import CustomButton from '../../components/CustomButton';
import Colors from '../../constants/Colors';
import CustomForm from '../../components/CustomForm';

const LoginScreen = props => {
  const changeScreenHandle = () => {
    props.navigation.navigate('ForgotPass');
  };

  const loginHandle = () => {
    props.navigation.replace('HomeScreen');
  };

  return (
    <TouchableWithoutFeedback
      style={{flex: 1}}
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
        <View style={styles.containerTitle}>
          <Text style={styles.mainTitle}>Welcome back</Text>
          <Text style={styles.subTitle}>Sign in to continue</Text>
        </View>
        <View style={styles.containerForm}>
          <CustomForm title="Username" placeholder="Enter your username" />
          <CustomForm
            title="Password"
            placeholder="Enter your password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.buttonForgot}
            onPress={changeScreenHandle}>
            <Text style={{fontSize: 18}}>Forgot password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerButton}>
          <CustomButton
            styleTitle={{fontSize: 18, color: 'white'}}
            style={styles.button}
            title="Log In"
            onPress={loginHandle}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  containerTitle: {
    marginTop: 100,
    marginLeft: 20,
  },
  mainTitle: {
    fontSize: 32,
  },
  subTitle: {
    fontSize: 16,
    color: '#9B9B9B',
    marginTop: 10,
  },
  containerForm: {
    marginHorizontal: 25,
    marginTop: 50,
    marginBottom: 80,
  },
  buttonForgot: {
    alignSelf: 'flex-end',
  },
  containerButton: {
    marginHorizontal: 50,
  },

  button: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default LoginScreen;
