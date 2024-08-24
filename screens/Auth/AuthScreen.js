import React, { useEffect, useReducer, useCallback, useContext } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  Platform,
  Button,
  ActivityIndicator,
  KeyboardAvoidingView,
  Linking
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';

import ButtonAndroid from '../../components/UI/ButtonAndroid';
import ButtonWhatsapp from '../../components/UI/ButtonWhatsapp';
import AuthButton from '../../components/UI/AuthButton';
import ClickButton from '../../components/UI/ClickButton';
import RegButton from '../../components/UI/RegButton';
import LoginButton from '../../components/UI/LoginButton';
import AuthInput from '../../components/UI/AuthInput';
import Colors from '../../constants/Colors';
import Device from '../../theme/Device';
import * as c from '../../constants/requestTypes/auth';
import { Context } from '../../context/ContextProvider';
import { authenticate, login, register } from '../../store/actions/auth';
import { check400Error, checkServerError } from '../../utils/errors';
import styles from './styles';
//import ToggleButtonRow from 'react-native-paper/lib/typescript/components/ToggleButton/ToggleButtonRow';
//import { blue100 } from 'react-native-paper/lib/typescript/styles/colors';

const FORM_UPDATE = 'FORM_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_UPDATE) {
    const updatedValued = {
      ...state.inputValues, // old input value
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities, // old input validity
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      // if there are all true so the form is valid
      updatedFormIsValid = updatedValidities[key] && updatedFormIsValid;
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValued,
    };
  }
  return state;
};

const AuthStartScreen = (props) => {
  const { updateProfileContext } = useContext(Context);
  const { registerMode } = props.route.params;

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      number: '',
      email: '',
      user_name: '',
      password: '',
      repeated_password: '',
    },
    inputValidities: {
      number: true,
      email: false,
      user_name: true,
      password: true,
      repeated_password: true,
    },
    formIsValid: false,
  });

  const { formIsValid, inputValues } = formState;
  const userRegisterReducer = useSelector((state) => state.userRegister);
  const {
    loading: registerLoading,
    data: registerData,
    error: registerError,
  } = userRegisterReducer;
  const userLoginReducer = useSelector((state) => state.userLogin);
  const {
    loading: loginLoading,
    data: loginData,
    success: loginSuccess,
    error: loginError,
  } = userLoginReducer;

  // REGISTER
  useEffect(() => {
    if (registerError) {
      if (registerError?.response?.status === 400) {
        check400Error(registerError);
      } else {
        checkServerError(registerError);
      }
      dispatch({ type: c.USER_REGISTER_RESET });
    }

    if (registerData) {
      props.navigation.navigate('Success', { registerMode: true });
      dispatch({ type: c.USER_REGISTER_RESET });
    }

    dispatch({ type: c.USER_REGISTER_RESET });
  }, [registerData, registerError]);

  // LOGIN
  useEffect(() => {
    if (loginError) {
      if (loginError?.response?.status === 400) {
        check400Error(loginError);
      } else if (loginError?.response?.status === 401) {
        Alert.alert(
          'Login Failed',
          'Your email or password is incorred. Please try again',
          [{ text: 'OK' }]
        );
      } else {
        checkServerError(loginError);
      }
      dispatch({ type: c.USER_LOGIN_RESET });
    }

    if (loginSuccess && loginData.has_account) {
      dispatch(authenticate(true));
      dispatch({ type: c.USER_LOGIN_RESET });
    }

    if (loginSuccess && !loginData.has_account) {
      props.navigation.navigate('Success', { registerMode: registerMode });
      dispatch({ type: c.USER_LOGIN_RESET });
    }

    dispatch({ type: c.USER_LOGIN_RESET });
  }, [loginError, loginSuccess]);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  const handleSwitch = () => {
    if (registerMode) {
      props.navigation.navigate('Auth', { registerMode: false });
    } else {
      props.navigation.navigate('Auth', { registerMode: true });
    }
  };

  const handleRegister = () => {
    if (formIsValid) {
      dispatch(
        register(
          inputValues.number,
          inputValues.email,
          inputValues.user_name,
          inputValues.password,
          inputValues.repeated_password
        )
      );
    }
  };

  const handleLogin = () => {
    if (formIsValid) {
      dispatch(login(inputValues.email, inputValues.password));
    }
  };

  handleSendWhatsApp = () => {
    let msg = "type something";
    let phoneWithCountryCode = "923132537173";
  
    let mobile =
      Platform.OS == "ios" ? phoneWithCountryCode : "+" + phoneWithCountryCode;
    if (mobile) {
      if (msg) {
        let url = "whatsapp://send?text=" + msg + "&phone=" + mobile;
        Linking.openURL(url)
          .then(data => {
            Alert.alert(
              'Whatsapp Opened!',
              'Ready to send message on Whatsapp',
              [{ text: 'OK' }]
            );
          })
          .catch(() => {
            Alert.alert(
              'Whatsapp Install!',
              'Make sure WhatsApp installed on your device',
              [{ text: 'OK' }]
            );
          });
      } else {
        Alert.alert(
          'No message is set!',
          'Please insert message to send',
          [{ text: 'OK' }]
        );
      }
    } else {
      Alert.alert(
        'Mobile is not set!',
        'Please insert mobile no',
        [{ text: 'OK' }]
      );
    }
  };

  return (

    <View style={[styles.screen, Platform.OS === 'ios' ? {} : { flex: 1}]}>
      <StatusBar style="light" />
      <View style={styles.auth_text_view}>
        <View style={styles.auth_text_container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/favicon3.png')}
              style={styles.image}
            />
          </View>
          <View style={{paddingTop:20}}>
          <Text style={styles.auth_text_big}>
            
              {registerMode ? 'Register' : 'Log in'}
            
          </Text>
          </View>
        </View>
        <View style={styles.auth_text_container}>
          <Text style={styles.auth_text_small}>
            {registerMode ? 'Register using social media:' : 'Log in using social media:'}
          </Text>
        </View>
       <View style={{paddingTop:0,width: '100%',marginVertical:0,paddingVertical:0,justifyContent: 'center',alignItems: 'center',flexDirection:'row',height:50}}>
          <View style={styles.auth_loader_container}>
          
            <Image
              source={require('../../assets/images/google-logo.png')}
              style={styles.image}
            />

            <ButtonAndroid
              title={registerMode ? 'Register with Google' : 'Log in with Google'}
              onPress={handleSwitch}
            />
            
          </View>
        </View>

      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        keyboardVerticalOffset={
          Platform.OS === 'ios' ? undefined : -0.3 * Device.height
        }
      >
        <ScrollView
          style={styles.scrollview_style}
          contentContainerStyle={styles.scrollview_content_container}
          automaticallyAdjustKeyboardInsets={
            Platform.OS === 'ios' ? false : true
          }
        >
          <View style={{flexDirection: 'row', alignItems: 'center',paddingTop:15 }}>
            <View style={{ flex: 1, height: 1, backgroundColor: '#64BC46',left:10 }} />
            <View style={{alignSelf:'center',paddingLeft:5,paddingRight:5}}>
              <Text style={styles.auth_text_small}>
                {registerMode ? '  or sign in with email  ' : '   or log in with email   '}

              </Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: '#64BC46',right:10 }} />
          </View>

          <View style={styles.auth_input_container}>
            {registerMode && (
              <AuthInput
                required
                autoCapitalize="none"
                id="number"
                keyboardType="number"
                errorText="Add a Telephone number"
                placeholder="Enter your Telephone number"
                placeholderTextColor="#D8D8D8"
                autoCorrect={false}
                onInputChange={inputChangeHandler}
              />
            )}
            <AuthInput
              id="email"
              textContentType="emailAddress"
              keyboardType="email-address"

              required
              autoComplete="email"
              autoCapitalize="none"
              errorText="Enter your email"
              placeholder="hello@gmail.com"
              placeholderTextColor="#D8D8D8"
              autoCorrect={false}
              onInputChange={inputChangeHandler}
            />
            {registerMode && (
              <AuthInput
                required
                autoCapitalize="none"
                id="user_name"
                keyboardType="default"
                errorText="Add username"
                placeholder="Enter Username"
                placeholderTextColor="#D8D8D8"
                autoCorrect={false}
                onInputChange={inputChangeHandler}
              />
            )}
            <AuthInput
              secureTextEntry
              textContentType={
                Platform.OS === 'ios' ? 'oneTimeCode' : 'newPassword'
              }
              id="password"
              keyboardType="default"
              required
              autoCapitalize="none"
              errorText="Enter your password"
              placeholder="Enter password"
              placeholderTextColor="#D8D8D8"
              autoCorrect={false}
              onInputChange={inputChangeHandler}
              autoComplete={'off'}
            />

            {registerMode && (
              <AuthInput
                secureTextEntry
                textContentType={
                  Platform.OS === 'ios' ? 'oneTimeCode' : 'newPassword'
                }
                required
                autoCapitalize="none"
                id="repeated_password"
                keyboardType="default"
                errorText="Enter your password"
                placeholder="Repeat your password"
                placeholderTextColor="#D8D8D8"
                autoCorrect={false}
                onInputChange={inputChangeHandler}
              />
            )}

            {registerLoading || loginLoading ? (
              <View style={styles.auth_loader_container}>
                <ActivityIndicator size="large" />
              </View>
            ) : (
              <AuthButton
                text={registerMode ? 'Create account' : 'Login'}
                onPress={registerMode ? handleRegister : handleLogin}
              />
            )}{!registerMode && (
              
                <View style={{ flexDirection: 'row', alignItems: 'center',paddingTop:10 }}>
                  <Text style={styles.auth_text_smallab}>
                    Forget username or password? 
                  </Text>
                  <ClickButton
                    style={{paddingTop:50, marginTop: Platform.OS === 'ios' ? 20 : 3}}
                    text={'Click here'}
                    onPress={() => props.navigation.navigate('Recovery')}
                  />
                </View>
              
            )}

            
              <View style={{ flexDirection: 'row', alignItems: 'center',paddingTop:0 }}>
                <Text style={styles.auth_text_smallab}>
                  {registerMode ? 'Already have an account?' : "Don't have an account yet?"}
                </Text>
                {registerMode && (
                  <RegButton
                    text={'Login Here'}
                    onPress={handleLogin}
                  />
                )}
                {!registerMode && (
                  <LoginButton
                    text={'Register Here'}
                    onPress={handleRegister}
                  />
                )}
              </View>
            
            <View style={{paddingRight:10,paddingLeft:10,paddingTop:5,paddingBottom:10}}>
            <View style={styles.auth_text_containerab}>
              <Text style={styles.auth_text_smallab}>

                Baitulmuslim.com is only for Malaysian citizens who are SINGLE,  WIDOWED AND WIDOWED only
              </Text>
            </View>
            </View>

            {!registerMode && (
              
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 70}}>

                  <Text style={styles.auth_text_smallab}>
                   If there is a problem, Yes 
                  </Text>

                  <View style={styles.whatsapp_loader_container}>
                    <Image
                      source={require('../../assets/images/whatsapp-logo.jpg')}
                      style={styles.image}
                    />
                    <ButtonWhatsapp
                      text={'Whatsapp Admin'}
                      onPress={handleSwitch}
                    />
                  </View>
                </View>
              

            )}

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AuthStartScreen;
