import {StyleSheet, Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
import colors from '../../constant/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    textAlign: 'left',
    fontWeight: '800',
  },
  subTitle: {
    color: 'white',
    fontSize: 12,
    marginLeft: 10,
    width: '70%',
    textAlign: 'left',
    fontWeight: '200',
  },
  swipe: {
    backgroundColor: colors.white,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.2,
  },
  addCurrency: {
    fontSize: 16,
    color: '#385774',
  },
  addCurrencyButton: {
    alignSelf: 'center',
    marginTop: height * 0.06,
  },
});
export default styles;
