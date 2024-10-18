import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Platform, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import SendButton from '../../components/UI/SendButton';
import RecoveryInput from '../../components/UI/RecoveryInput';
import ActivityModal from '../../components/UI/ActivityModal';
import * as c from '../../constants/requestTypes/user';
import { sendRecoveryCode } from '../../store/actions/user';
import { check400Error, checkServerError } from '../../utils/errors';
import { color } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

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
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.auth_text_big}>BAITULMUSLIM</Text>
        </View>
      </View>
      <View style={styles.screenLeft}>
       

        <View style={styles.auth_input_email}>
          <Text style={styles.auth_text_small}>New Password:</Text>
          <RecoveryInput
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

          <View style={styles.button_container}>
            <SendButton text="Send" onPress={handlePress} />

          </View>
          <LinearGradient
          colors={['#537B45', '#A5F58A']}
          style={styles.gradinet} />
        </View>
      </View>
    </View>
  );
};

export default RecoveryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#A4F489',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  linearCircle: {
    // position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.1,
    borderRadius: 10,
    transform: [{ scaleX: 10 }],
  },
  screenLeft: {
    // flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    //flexDirection: 'column',
    height: '100%',
  },
  auth_text_big: {
    color: '#111111',
    fontSize: 35,
    //fontWeight: 'bold',
  },

  auth_text_small: {
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
  },
  auth_text_container: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    //border: 2,
    width: '100%',
    paddingBottom: 50,

    paddingTop: 50,
    borderBottomRightRadius: 80,
    // fixes styling for Android and should be default for iOS
  },
  auth_input_email: {
    //width: '90%',
    marginBottom: 0,
    //zIndex:1000,
    //elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#A5F58A',
    paddingTop: 60,
    paddingBottom: 150,
    paddingHorizontal: 40,
    borderTopLeftRadius: 80,

  },
  gradinet: {
    //width: '90%',
    hight:'50%',
    marginBottom: 0,
    //zIndex:1000,
    //elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    //backgroundColor: '#A5F58A',
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 100,
    borderTopLeftRadius: 80,
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
    backgroundColor: color.white,
    fontSize: 30,

    width: '90%',
    //padding: Platform.OS === 'ios' ? 20 : 0,
    // paddingHorizontal: Platform.OS === 'ios' ? 0 : 20,
    // paddingVertical: Platform.OS === 'ios' ? '7%' : 0,
    paddingBottom: 40,
  },
});
