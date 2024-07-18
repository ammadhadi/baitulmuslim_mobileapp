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

const ClickButton = (props) => {
  const { onPress, text } = props;

  return (
    <TouchableOpacity style={styles.auth_button_container} onPress={onPress}>
      <Text style={styles.auth_button_text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ClickButton;

const styles = StyleSheet.create({
  auth_button_container: {
    //marginVertical: Platform.OS === 'ios' ? 30 : 0,
    marginTop: Platform.OS === 'ios' ? 10 : 3,
    paddingTop:0,
    padding:0,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    //width: 100,
    height:30,
    //height: Platform.OS === 'ios' ? 44 : 0.06 * Device.height,
    backgroundColor:'#337AB7',
    borderRadius: 10,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  auth_button_text: {
    color: Colors.white,
    fontSize: 20,
  },
});
