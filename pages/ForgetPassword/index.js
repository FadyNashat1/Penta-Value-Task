import React, { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import BackButton from '../../components/Back/index';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function ForgotPasswordScreen({ navigation }) {
  const { t } = useTranslation();
  const [data, setData] = useState({
    email: '',
  });
  return (
    <KeyboardAwareScrollView enableOnAndroid={false} style={styles.container}>
      <BackButton
        backStyle={{ left: 10 }}
        title={t('Forgot Password')}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.centerView}>
        <Input
          onChangeText={(email) =>
            setData({
              ...data,
              email: email,
            })
          }
          value={data.email}
          title='Email'
        />
        <Button title='Reset Password' />
      </View>
    </KeyboardAwareScrollView>
  );
}
