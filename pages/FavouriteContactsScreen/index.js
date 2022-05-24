import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import Header from '../../components/Header/index';

export default function FavouriteContactsScreen({navigation}) {
  useEffect(() => {
    readFavouriteContacts();
  }, []);
  const [contacts, setContacts] = useState(false);

  const readFavouriteContacts = async () => {
    await AsyncStorage.getItem('FavContacts')
      .then(cart => {
        const cartfood = JSON.parse(cart);
        console.log('read data from cart', cartfood);
        setContacts(cartfood);
      })
      .catch(err => {
        console.error(err.response);
      })
      .finally(() => setLoading(falses));
  };

  return (
    <View style={styles.container}>
      <Header
        pressCancel={() => navigation.goBack()}
        favourite
        centerText="Favourite"
      />
      <FlatList
        ListEmptyComponent={<Text style={styles.noContact}>No Contacts</Text>}
        contentContainerStyle={{paddingTop: 20}}
        data={contacts}
        renderItem={({item, index}) => (
          <View>
            <View style={styles.contactView}>
              <Image
                source={require('../../assets/user-Icon.png')}
                style={styles.userIcon}
              />
              <View style={{width: '80%'}}>
                <Text style={styles.name}>{item.givenName}</Text>

                <Text style={styles.subName}>{item.givenName}</Text>
              </View>
              <TouchableOpacity>
                <Image
                  style={styles.deleteIcon}
                  source={require('../../assets/close-icon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
