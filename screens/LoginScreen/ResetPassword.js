import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomForm from '../../components/CustomForm';
import Colors from '../../constants/Colors';

const ResetPassword = props => {
  const changePassHandle = () => {
    props.navigation.navigate('Successful');
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
          <Text style={styles.mainTitle}>Reset Password</Text>
          <Text style={styles.subTitle}>
            Reset code was sent to your email. Please enter the code and creae
            new password
          </Text>
        </View>
        <View style={styles.form}>
          <CustomForm
            title="Reset code"
            placeholder="Enter your number
"
          />
          <CustomForm
            title="New password"
            placeholder="Enter your password
"
          />
          <CustomForm
            title="Confirm password"
            placeholder="Enter your confirm password

"
          />
        </View>
        <View style={styles.containerButton}>
          <CustomButton
            style={styles.button}
            styleTitle={{fontSize: 18, color: 'white'}}
            title="Change password"
            onPress={changePassHandle}
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column'},
  containerTitle: {
    marginTop: 80,
    marginHorizontal: 24,
  },
  mainTitle: {
    fontSize: 36,
  },
  subTitle: {
    fontSize: 16,
    color: '#9B9B9B',
  },
  containerButton: {
    marginHorizontal: 24,
  },
  form: {
    marginHorizontal: 24,
    marginVertical: 30,
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

export default ResetPassword;
