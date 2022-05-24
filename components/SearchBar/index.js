import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import { colors } from 'react-native-elements';
import { useTranslation } from 'react-i18next';
const { width, height } = Dimensions.get('window');
export default function SearchBar({
  ViewStyle,
  value,
  onChangeText,
  onPress,
  pressClear,
}) {
  const { t, i18n } = useTranslation();

  return (
    <View
      style={{
        flexDirection: 'row',
        width: width * 0.9,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
        padding: 12,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5.51,
        elevation: 15,
        ...ViewStyle,
      }}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{
          width: width * 0.7,
          textAlign: i18n.language == 'ar' ? 'right' : 'left',
        }}
        placeholder={t('Search..')}
        placeholderTextColor={colors.black}
      />
      {value?.length > 0 ? (
        <TouchableOpacity style={{ left: 25 }} onPress={pressClear}>
          <Image
            style={{ width: 17.5, height: 17.5 }}
            source={require('../../assets/cross.png')}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{ position: 'absolute', right: 20, top: 10 }}
          onPress={onPress}>
          <Image source={require('../../assets/search-Bar-Icon.png')} />
        </TouchableOpacity>
      )}
    </View>
  );
}
