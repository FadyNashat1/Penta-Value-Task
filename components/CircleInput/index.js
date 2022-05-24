import React from 'react';
import { View, Dimensions, TextInput } from 'react-native';
const { width, height } = Dimensions.get('window');
import colors from '../../constant/colors';
export default function CircleInput({
  value,
  onChangeText,
  secure,
  style,
  inputStyle,
  placeholder,
}) {
  return (
    <View style={{ alignItems: 'center' }}>
      <View
        style={{
          width: width * 0.85,
          backgroundColor: 'white',
          borderRadius: 6,
          flexDirection: 'row',
          alignItems: 'center',
          padding: 8,
          height: height * 0.07,
          marginVertical: 8,
          ...style,
        }}>
        <TextInput
          style={{
            width: width * 0.8,
            ...inputStyle,
          }}
          placeholder={placeholder}
          placeholderTextColor={colors.Grey}
          secureTextEntry={secure}
          value={value}
          onChangeText={onChangeText}></TextInput>
      </View>
    </View>
  );
}
