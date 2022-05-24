import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constant/colors';
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },

  centerView: {
    alignItems: 'center',
    top: height * 0.1,
  },
});
export default styles;
