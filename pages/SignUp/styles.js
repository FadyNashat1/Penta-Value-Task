import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import colors from '../../constant/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C373D',
  },

  centerView: {
    alignItems: 'center',
    marginTop: height * 0.1,
  },
  forgetpasswordText: {
    fontSize: 14,
    color: '#5C5C5C',
    margin: height * 0.02,
  },
  loginwithFacebookText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.black,
    textDecorationLine: 'underline',
    margin: 20,
  },
  rowSection: {
    flexDirection: 'row',
    width: width,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  indicatorView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    position: 'absolute',
  },
});
export default styles;
