import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  Dimensions,
} from 'react-native';

const LoginButton = (props) => {
  const { onPress, text } = props;

  return (
    <TouchableOpacity style={styles.auth_button_container} onPress={onPress}>
      <Text style={styles.auth_button_text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  auth_button_container: {
   //marginTop: Platform.OS === 'ios' ? 5 : 5,
    padding: 0,
    marginleft:20,
    paddingbottom:10,
  
    backgroundColor:'#F7C112',
    flexDirection: 'row',
    height:30,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  auth_button_text: {
    paddingbottom:10,
    color: '#030000',
    fontSize: 18,
    
  },
});
