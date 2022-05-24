import React from 'react';
import { TouchableOpacity, Image, Text, View, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { useTranslation } from 'react-i18next';
export default function BackButton({
  onPress,
  title,
  backStyle,
  home,
  loginn,
  TextStyle,
}) {
  const { t, i18n } = useTranslation();

  return (
    <View
      style={{
        backgroundColor: home ? 'white' : null,
        flexDirection: home ? 'row' : 'column',
        alignItems: home ? 'center' : null,
        alignSelf: 'flex-start',
        width: width,
        height: 60,
        marginVertical: 10,
        top: home ? null : height * 0.05,
        ...backStyle,
      }}>
      {loginn ? null : (
        <TouchableOpacity
          style={{ left: 15 }}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          onPress={onPress}>
          <Image
            style={{
              transform: [
                { rotate: i18n.language == 'ar' ? '180deg' : '1deg' },
              ],
            }}
            source={require('../../assets/white-Arrow.png')}
          />
        </TouchableOpacity>
      )}
      <Text
        style={{
          fontSize: 20,
          color: 'white',
          fontWeight: '700',
          textAlign: 'left',
          top: home ? null : height * 0.03,
          left: home ? width * 0.07 : width * 0.04,
          ...TextStyle,
        }}>
        {title}
      </Text>
    </View>
  );
}
