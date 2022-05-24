import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constant/colors';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 18,
    marginBottom: height * 0.2,
  },
  input: {
    width: '93%',
    borderColor: '#F3D742',
    borderWidth: 2,
    padding: 15,
    borderRadius: 3,
  },
  Back: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    marginLeft: 20,
  },
  back_Text: {
    color: colors.primary,
    fontSize: 16,
  },
  addCrypto_Text: {
    color: colors.darkblack,
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 15,
  },
  add_Button: {
    backgroundColor: '#F3D742',
    width: 120,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginTop: 10,
    alignSelf: 'flex-end',
    right: 25,
  },
  add_Text: {
    color: colors.primary,
    fontWeight: '700',
    fontSize: 16,
  },
  arrowBack: {
    width: 12,
    height: 12,
  },
});
export default styles;
