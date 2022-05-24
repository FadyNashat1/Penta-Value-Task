import React, {useState} from 'react';
import {View, Alert, Dimensions, ActivityIndicator} from 'react-native';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BackButton from '../../components/Back/index';
import colors from '../../constant/colors';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import auth from '@react-native-firebase/auth';
import SyncStorage from 'sync-storage';
import Login from '../../store/actions/login/login';
import {connect} from 'react-redux';
import {compose} from 'redux';

function SignUpScreen({LoginMethod, navigation}) {
  const {t, i18n} = useTranslation();
  const [isloading, setLoading] = useState(false);
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleSignup = () => {
    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(userCredential => {
        const user = userCredential.user._user;
        SyncStorage.set('userData', user);
        setData('');
        LoginMethod();
      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };
  const SignUpMethod = () => {
    if (data.username == '') {
      Alert.alert('Please enter username field');
      return false;
    }
    if (data.email == '') {
      Alert.alert('Please enter email field');
      return false;
    }
    if (data.password == '') {
      Alert.alert('Please enter password field');
      return false;
    }
    if (data.confirmPassword == '') {
      Alert.alert('Please enter confirm password field');
      return false;
    }
    delete data.username;
    delete data.confirmPassword;
    handleSignup();
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid={false} style={styles.container}>
      <BackButton
        backStyle={{left: 10}}
        title={t('Sign up')}
        onPress={() => navigation.goBack()}
      />

      <View style={styles.centerView}>
        <Input
          onChangeText={username =>
            setData({
              ...data,
              username: username,
            })
          }
          value={data.username}
          title="Username"
        />
        <Input
          onChangeText={email =>
            setData({
              ...data,
              email: email,
            })
          }
          value={data.email}
          title="Email"
        />
        <Input
          onChangeText={password =>
            setData({
              ...data,
              password: password,
            })
          }
          value={data.password}
          secureTextEntry={true}
          title="Password"
        />
        <Input
          onChangeText={confirmPassword =>
            setData({
              ...data,
              confirmPassword: confirmPassword,
            })
          }
          value={data.confirmPassword}
          secureTextEntry={true}
          title="Confirm Password"
        />
        {isloading ? (
          <View style={styles.indicatorView}>
            <ActivityIndicator size="large" color={colors.white} />
          </View>
        ) : null}
        <Button onPress={() => SignUpMethod()} title=" Sign up" />
      </View>
    </KeyboardAwareScrollView>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    LoginMethod: _ => {
      dispatch(Login());
    },
  };
};
export default compose(connect(null, mapDispatchToProps))(SignUpScreen);
