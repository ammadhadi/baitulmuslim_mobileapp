import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const ButtonWhatsapp = ({ onPress, text, style }) => {
  const textStyle = style ? style : styles.textStyle;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.auth_button_text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonWhatsapp;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginleft:0,
  },
  buttonContainer: {
    justifyContent: 'center',
    //height: 0.06 * Device.height,
    overflow: 'hidden',
    paddingHorizontal: 10,
    backgroundcolor:'#E8E1D9',
    borderRadius: 10,
    height:35,
  },
  textStyle: {
    textAlign: 'center',
    color: '#64BC46',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  auth_button_text: {
    color: '#64BC46',
    fontSize: 15,
  },
});
