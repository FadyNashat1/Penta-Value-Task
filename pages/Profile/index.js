import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Header from '../../components/Header/index';
import Syncstorage from 'sync-storage';
export default function ProfileScreen({navigation}) {
  const UserData = Syncstorage.get('userData');
  console.log('.dsjhdf', UserData);
  return (
    <View style={styles.container}>
      <Header
        pressCancel={() => navigation.goBack()}
        favourite
        centerText="Profile"
      />
      <View style={{padding: 10}}>
        <Text style={styles.name}>Email</Text>
        <Text style={styles.subName}>{UserData?.email}</Text>
        <Text style={styles.name}>User ID</Text>
        <Text style={styles.subName}>{UserData?.uid}</Text>
      </View>
    </View>
  );
}
