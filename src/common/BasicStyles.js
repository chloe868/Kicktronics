import Color from './Color';
import { Dimensions, Platform } from 'react-native';
const width = Math.round(Dimensions.get('window').width);
const borderRadius = 12
export default {
  formControl: {
    height: 50,
    borderColor: Color.lightGray,
    borderWidth: 1,
    width: width - 40,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 25
  },
  formControlModal: {
    height: 50,
    borderColor: Color.gray,
    borderWidth: 1,
    width: '90%',
    marginLeft: '5%',
    marginBottom: 20,
    borderRadius: 5,
    paddingLeft: 10
  },
  formControlCreate: {
    height: 50,
    borderColor: Color.gray,
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    borderRadius: 25,
    paddingLeft: 10
  },
  pickerStyle: {
    height: 50,
    borderBottomColor: Color.gray,
    borderBottomWidth: 1,
    width: '90%'
  },
  pickerStyleCreate: {
    height: 50,
    borderColor: Color.lightGray,
    borderWidth: 1,
    width: '100%',
    paddingLeft: 10,
    borderRadius: 5,
    fontSize: 12
  },
  pickerStyleIOS: {
    inputIOS: {
      borderWidth: 1,
      borderColor: Color.gray,
      borderRadius: 5,
      color: '#000',
      paddingRight: 30,
      marginRight: 18,
      marginLeft: 10,
      height: 50,
      paddingLeft: 10,
      fontSize: 12
    }
  },
  pickerStyleIOSNoMargin: {
    inputIOS: {
      borderWidth: 1,
      borderColor: Color.gray,
      borderRadius: 5,
      color: '#000',
      height: 50,
      width: '100%',
      paddingLeft: 10,
      fontSize: 12
    }
  },
  btn: {
    height: 50,
    backgroundColor: Color.primary,
    width: width - 40,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  btnPrimary: {
    backgroundColor: Color.primary
  },
  btnSecondary: {
    backgroundColor: Color.secondary
  },
  btnWarning: {
    backgroundColor: Color.warning
  },
  btnDanger: {
    backgroundColor: Color.danger
  },
  textWhite: {
    color: Color.white
  },
  iconSize: 22,
  headerBackIconSize: 22,
  iconStyle: {
    color: Color.primary,
    paddingLeft: 20,
    paddingRight: 20
  },
  titleText: {
    fontSize: 13,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 20,
    paddingRight: 20
  },
  normalText: {
    fontSize: 12,
    color: Color.gray,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 20,
    paddingRight: 20
  },
  Separator: {
    height: 0.5,
    width: width - 40,
    backgroundColor: Color.lightGray,
    marginLeft: 20
  },
  badge: {
    backgroundColor: Color.danger,
    color: Color.white,
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    marginRight: 10
  },
  profileImageSize: {
    height: 30,
    width: 30,
    borderRadius: 15
  },
  profileIconSize: 22,
  standardFontSize: 12,
  standardTitleFontSize: 16,
  standardTitle2FontSize: 14,
  standardSubTitleFontSize: 14,
  standardHeaderFontSize: 18,
  standardBorderRadius: borderRadius,
  headerDrawerStyle: {
    headerStyle: {
      backgroundColor: Color.white,
      height: 60,
      fontSize: 18
    },
    headerTitleContainerStyle: {
      backgroundColor: Color.white,
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: Platform.OS == 'ios' ? 0 : 50
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },  
  },
  headerDrawerStyleStandard: {
    headerStyle: {
      elevation: 10,
      backgroundColor: Color.white,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 18
    },
    headerTitleContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 64
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },  
  },
  standardDivider: {
    width: '90%',
    height: 0.5,
    marginLeft: '5%',
    marginRight: '5%',
  },
  standardContainer: {
    width: '90%',
    marginRight: '5%',
    marginLeft: '5%'
  },
  standardButton: {
    height: 50,
    backgroundColor: Color.primary,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25
  },
  standardTextInput: {
    height: 50,
    borderColor: Color.lightGray,
    borderWidth: 1,
    width: '100%',
    borderRadius: 25,
    paddingLeft: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Color.gray
  },
  standardTextInputNotCentered: {
    height: 50,
    borderColor: Color.lightGray,
    borderWidth: 1,
    width: '100%',
    borderRadius: 25,
    paddingLeft: 10,
  },
  standardTextInputMultiline: {
    borderColor: Color.lightGray,
    borderWidth: 1,
    width: '100%',
    borderRadius: 25,
    paddingLeft: 10
  },
  standardShadow: {
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.23, // 0.23
    shadowRadius: 10, // 2.62
    elevation: 2, // 2
  },
  loginShadow: {
    shadowColor: Color.white,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.23, // 0.23
    shadowRadius: 10, // 2.62
    elevation: 15, // 2
  },
  standardFormControl: {
    height: 50,
    borderColor: Color.lightGray,
    borderWidth: 1,
    width: '100%',
    borderRadius: 25,
    paddingLeft: 10
  },
  inputBorderRadius: 25,
}