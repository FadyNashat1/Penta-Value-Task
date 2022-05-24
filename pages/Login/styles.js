import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import colors from '../../constant/colors';
import i18n from '../../i18n/index';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C373D',
  },
  image: {
    transform: [{scaleX: i18n.language == 'ar' ? -1 : 1}],
    left: width * 0.26,
    bottom: height * 0.08,
  },
  centerView: {
    top: height * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  forgetPasswordText: {
    fontSize: 14,
    color: 'white',
    paddingTop: 10,
  },
  forgotPasswordBtn: {
    marginTop: 10,
  },
  indicatorView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    // position: 'absolute',
  },
  customIndicator: {
    bottom: height * 0.02,
    alignItems: 'center',
  },
});
export default styles;
