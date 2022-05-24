import React from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
const {height} = Dimensions.get('window');
export default function Header({centerText, favourite}) {
  return (
    <View style={styles.headerView}>
      <Text style={styles.centerText}>{centerText}</Text>
      <TouchableOpacity>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/girls.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#385774',
    height: height * 0.14,
  },
  centerText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 20,
    right: 0,
    top: 10,
  },
  imageStyle: {
    top: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
