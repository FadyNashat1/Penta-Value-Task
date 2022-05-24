import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constant/colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C373D',
  },
  name: {
    color: colors.white,
    fontSize: 16,
    marginLeft: 10,
    textAlign: 'left',
    fontWeight: '800',
    marginVertical: 3,
  },
  subName: {
    color: colors.white,
    fontSize: 12,
    marginLeft: 10,
    width: '70%',
    textAlign: 'left',
    fontWeight: '200',
    marginVertical: 3,
  },
});
export default styles;
