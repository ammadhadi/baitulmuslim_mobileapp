import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import Device from '../../theme/Device';
import { Platform } from 'react-native';
import { color } from 'react-native-reanimated';

// ---------------------- AUTH SCREEN -----------------------

export default StyleSheet.create({
  screen: {
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
  },


  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  auth_text_view: {
    marginTop: Platform.OS === 'ios' ? 20 : 10,
    padding: 0,
    minHeight: '5%',
  },

  auth_text_container: {
    width: '100%',
    marginVertical: 5,
    paddingTop:5,
    paddingVertical: 0, // fixes styling for Android and should be default for iOS
    justifyContent: 'center',
    alignItems: 'center',
  },
  whatsapp_text_container: {
    width: '100%',
    color: '#64BC46',
    fontSize: 15,
    paddingVertical: 0, // fixes styling for Android and should be default for iOS
    justifyContent: 'center',
    alignItems: 'center',
  },
  auth_text_containerab: {
    backgroundColor: '#E4B86D',
    width: '100%',
    borderRadius: 20,
    //paddingVertical: 0, // fixes styling for Android and should be default for iOS
    justifyContent: 'center',
    alignItems: 'center',
    //paddingBottom:30,
  },


  auth_text_big: {
    color: '#111111',
    fontSize: 47,
   
  },

  auth_text_small: {
    color: '#64BC46',
    fontSize: 15,
  },
  auth_text_smallab: {
    color: '#111111',
    fontSize: 18,
    textAlignVertical: "center",
    textAlign: "center",
    paddingRight:10,
    paddingLeft:10,
    paddingTop:10,
    paddingBottom:10,



  },

  scrollview_style: {
    flexGrow: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 0,
  },

  scrollview_content_container: {
    flexDirection: 'column', // inner items will be added vertically
    flexGrow: 1, // all the available vertical space will be occupied by it
    justifyContent: 'space-between', // will create the gutter between body and footer
  },

  auth_input_container: {
    borderRadius: 10, //for android (ios has borderRadius by default)
    backgroundColor: '#FFFFFF',
    paddingTop:0,
    marginVertical:0,
    paddingVertical:5,
    justifyContent: 'center',
    //paddingBottom: 20,
    alignItems: 'center',
    width: '100%',
    //padding: 10,
    //paddingVertical: Platform.OS === 'ios' ? '7%' : '0%',
  },

  auth_loader_container: {
    backgroundColor: '#337AB7',
    marginVertical: 20,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 30,
    //width: '80%',
  },
  whatsapp_loader_container: {
    backgroundColor: '#E8E1D9',
    marginVertical: 20,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 35,
    //width: '80%',
  },

  auth_button_container: {
    marginVertical: 30,
    padding: 3,
    flexDirection: 'row',
    width: '100%',
    height: 44,
    backgroundColor: '#337AB7',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 7,
   
    borderRadius: 2,
  },

  auth_text_button: {
    color: '#337AB7',
    fontSize: Platform.OS === 'ios' ? 15 : 18,
  },
});
