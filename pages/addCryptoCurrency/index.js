import React from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './styles';
import object from '../../dummyObject';
export default function AddCryptoCurrency({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.Back}>
        <Image
          style={styles.arrowBack}
          source={require('../../assets/ios-arrow-back.png')}
        />
        <Text style={styles.back_Text}>Back to list</Text>
      </TouchableOpacity>
      <View style={styles.centerView}>
        <Text style={styles.addCrypto_Text}>Add a Cryptocurrency</Text>
        <TextInput style={styles.input} />
        <TouchableOpacity
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'HomePageScreen',
                  params: {
                    newCurrency: object,
                  },
                },
              ],
            })
          }
          style={styles.add_Button}>
          <Text style={styles.add_Text}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
