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
  },
  subName: {
    color: colors.white,
    fontSize: 12,
    marginLeft: 10,
    width: '70%',
    textAlign: 'left',
    fontWeight: '200',
  },

  deleteIcon: {
    width: 15,
    height: 15,
  },
  contactView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.grey2,
    borderBottomWidth: 0.28,
    padding: 10,
    backgroundColor: '#252026',
  },
  userIcon: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  noContact: {
    color: colors.primary,
    fontSize: 16,
    marginLeft: 10,
    textAlign: 'left',
    fontWeight: '800',
    alignSelf: 'center',
  },
});
export default styles;
