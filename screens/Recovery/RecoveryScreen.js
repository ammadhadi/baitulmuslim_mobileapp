import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Platform, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import AuthButton from '../../components/UI/AuthButton';
import AuthInput from '../../components/UI/AuthInput';
import Device from '../../theme/Device';
import Colors from '../../constants/Colors';
import ActivityModal from '../../components/UI/ActivityModal';
import * as c from '../../constants/requestTypes/user';
import { sendRecoveryCode } from '../../store/actions/user';
import { check400Error, checkServerError } from '../../utils/errors';
import { color } from 'react-native-reanimated';

const RecoveryScreen = (props) => {
  const { data, error, loading } = useSelector(
    (state) => state.sendRecoveryCode
  );

  const [email, SetEmail] = useState('');

  const dispatch = useDispatch();

  const handlerEmail = (inputIdentifier, inputValue) => {
    SetEmail(inputValue);
  };

  useEffect(() => {
    if (error) {
      if (error?.response?.status === 400) {
        if (error?.response?.data?.detail) {
          check400Error(error);
        }
      } else {
        checkServerError(error);
      }
    }

    if (data) {
      props.navigation.navigate('ValidateCode', { email: email });
    }

    dispatch({ type: c.RECOVERY_CODE_RESET });
  }, [dispatch, error, data]);

  const handlePress = () => {
    if (email) {
      dispatch(sendRecoveryCode(email));
    } else {
      Alert.alert('Error', 'Email field is required to send recovery code', [
        { text: 'OK' },
      ]);
    }
  };

  if (loading) {
    return (
      <View style={styles.screen}>
        <ActivityModal
          loading
          title="Loading"
          size="small"
          activityColor="white"
          titleColor="white"
          activityWrapperStyle={{
            backgroundColor: 'transparent',
          }}
        />
      </View>
    );
  }


  return (

    <View style={styles.screen}>

      <View style={styles.auth_text_container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/favicon3.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.auth_text_big}>BAITULMUSLIM</Text>

      </View>
      <View style={styles.auth_input_email}>
        <Text style={styles.auth_text_small}>New Password</Text>
        <AuthInput
          id="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          required
          email
          autoComplete="email"
          autoCapitalize="none"
          errorText="Enter your email"
          placeholder="Enter your email or user name"
          placeholderTextColor="#B0B3B8"
          autoCorrect={false}
          border-radius="10"
          onInputChange={handlerEmail}
          initialValue={email}
        />
      </View>
      <View style={styles.button_container}>
        <AuthButton text="Send" onPress={handlePress} />
      </View>
    </View>
  );
};

export default RecoveryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  auth_text_big: {
    color: '#111111',
    fontSize: 35,
    fontWeight: 'bold',
  },

  auth_text_small: {
    color: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
  },
  auth_text_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: 2,
    width: '95%',
    padding: 10,
    // fixes styling for Android and should be default for iOS
  },
  auth_input_email: {
    width: '90%',
    flexDirection: 'column',
  },

  input: {
    height: 40,
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#494863',
    paddingHorizontal: 10,
    marginBottom: 20,
    // otros estilos para el campo de entrada
  },
  button_container: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:color.white,
    fontSize:30,
    
    width: '90%',
    //padding: Platform.OS === 'ios' ? 20 : 0,
   // paddingHorizontal: Platform.OS === 'ios' ? 0 : 20,
   // paddingVertical: Platform.OS === 'ios' ? '7%' : 0,
    paddingBottom: 40,
  },
});
