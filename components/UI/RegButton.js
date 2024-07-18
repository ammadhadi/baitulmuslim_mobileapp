import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  Dimensions,
} from 'react-native';
import Colors from '../../constants/Colors';
import Device from '../../theme/Device';

const RegButton = (props) => {
  const { onPress, text } = props;

  return (
    <TouchableOpacity style={styles.auth_button_container} onPress={onPress}>
      <Text style={styles.auth_button_text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default RegButton;

const styles = StyleSheet.create({
  auth_button_container: {
   //marginTop: Platform.OS === 'ios' ? 5 : 5,
    padding: 0,
    paddingLeft: 15,
    paddingRight: 15,
    marginleft:20,
    paddingbottom:10,
    flexDirection: 'row',
    height:30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  auth_button_text: {
    paddingbottom:10,
    color: '#64BC46',
    fontSize: 18,
  },
});
