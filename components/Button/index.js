import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import colors from '../../constant/colors';
export default function Button({ onPress, title }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: colors.primary,
        alignSelf: 'center',
        width: width * 0.8,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: height * 0.03,
      }}>
      <Text style={{ color: colors.white, fontWeight: '700' }}>{title}</Text>
    </TouchableOpacity>
  );
}
