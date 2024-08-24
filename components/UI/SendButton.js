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

const SendButton = (props) => {
  const { onPress, text } = props;

  return (
    <TouchableOpacity style={styles.auth_button_container} onPress={onPress}>
      <Text style={styles.auth_button_text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  auth_button_container: {
    //marginVertical: Platform.OS === 'ios' ? 30 : 0,
    marginTop: Platform.OS === 'ios' ? 25 : 80,
    paddingTop:0,
    padding:0,
    //paddingLeft: 20,
    //paddingRight: 15,
    flexDirection: 'row',
    width: 120,
    height:35,
    //height: Platform.OS === 'ios' ? 44 : 0.06 * Device.height,
    backgroundColor:'#F1F1F1',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  auth_button_text: {
    color: '#519259',
    fontSize:25,
  },
});
