import React from 'react';
import {Text, View, Dimensions, TextInput} from 'react-native';
const {width} = Dimensions.get('window');
import colors from '../../constant/colors';
import {useTranslation} from 'react-i18next';
export default function Input({
  style,
  placeholder,
  ref,
  inputStyle,
  value,
  onChangeText,
  inputTextStyle,
  onBlur,
  onSubmitEditing,
  autoFocus,
  blurOnSubmit,
  secureTextEntry,
  keyboardType,
  title,
}) {
  const {t, i18n} = useTranslation();

  return (
    <View
      style={{
        width: width * 0.85,
        borderBottomWidth: 0.6,
        borderBottomColor: colors.primary,
        marginVertical: 10,
        padding: 2,
        ...style,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 12,
          color: colors.white,
          marginVertical: 10,
          textAlign: 'left',
        }}>
        {t(title)}
      </Text>
      <TextInput
        textAlign={i18n.language == 'ar' ? 'right' : null}
        style={{
          width: width * 0.8,
          top: 10,
          padding: 10,
          ...inputStyle,
        }}
        secureTextEntry={secureTextEntry}
        blurOnSubmit={blurOnSubmit}
        autoFocus={autoFocus}
        returnKeyType="done"
        blurOnSubmit={true}
        onSubmitEditing={onSubmitEditing}
        onBlur={onBlur}
        ref={ref}
        autoCapitalize="none"
        textAlignVertical={'center'}
        placeholder={placeholder}
        keyboardType={keyboardType}
        placeholderTextColor={'#9B9B9B'}
        value={value}
        onChangeText={onChangeText}
        style={{
          color: '#9B9B9B',
          fontSize: 15,
          ...inputTextStyle,
        }}></TextInput>
    </View>
  );
}
