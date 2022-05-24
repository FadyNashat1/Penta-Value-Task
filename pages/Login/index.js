import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Alert,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import SyncStorage from 'sync-storage';
import Login from '../../store/actions/login/login';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {compose} from 'redux';
const {width, height} = Dimensions.get('window');
import colors from '../../constant/colors';
import BackButton from '../../components/Back/index';
import Button from '../../components/Button';
import Input from '../../components/Input/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({LoginMethod, navigation}) => {
  const {t} = useTranslation();
  const [isloading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = () => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(userCredential => {
        const user = userCredential.user._user;
        SyncStorage.set('userData', user);
        LoginMethod();
      })
      .catch(error => {
        setLoading(false);
        const errorMessage = error.message;
        Alert.alert(errorMessage);
      });
  };
  const handleLoginMethod = () => {
    if (data.email == '') {
      Alert.alert('Please enter email field');
      return false;
    }
    if (data.password == '') {
      Alert.alert('Please enter password field');
      return false;
    } else {
      handleLogin();
    }
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid={false} style={styles.container}>
      <BackButton loginn backStyle={{left: width * 0.03}} title={t('Login')} />
      <View style={styles.centerView}>
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
        <View style={{top: height * 0.02, alignItems: 'center'}}>
          {isloading ? (
            <View style={styles.indicatorView}>
              <ActivityIndicator size="large" color={colors.white} />
            </View>
          ) : (
            <View style={{alignItems: 'center'}}>
              <Button onPress={handleLoginMethod} title="Login" />
              <Button
                onPress={() => navigation.navigate('SignUp')}
                title="Sign up"
              />
              <TouchableOpacity
                style={styles.forgotPasswordBtn}
                onPress={() => navigation.navigate('ForgetPassword')}>
                <Text style={styles.forgetPasswordText}>
                  {t('Forgot Password?')}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    LoginMethod: _ => {
      dispatch(Login());
    },
  };
};
export default compose(connect(null, mapDispatchToProps))(LoginScreen);
