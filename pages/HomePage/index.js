import React, {useEffect, useState} from 'react';
import {getCurrencyRequest} from '../../redux/actions/getCurrency';
import Swipeout from 'react-native-swipeout';
import SyncStorage from 'sync-storage';
import {useDispatch, useSelector} from 'react-redux';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import ListItem from '../../components/ListItem/index';
import styles from './styles';
import Header from '../../components/Header/index';
export default function HomePageScreen({navigation, route}) {
  const dispatch = useDispatch();
  const {CurrencyList, loading} = useSelector(state => state.getCurrencyList);
  const Data = CurrencyList;
  const newCurrency = route?.params?.newCurrency;
  const [currency, setCurrency] = useState(CurrencyList);
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    if (newCurrency) {
      setCurrency(Data?.splice(0, 4).concat([newCurrency]));
      return;
    }
    setCurrency(Data?.splice(0, 4));
  }, [CurrencyList]);

  useEffect(() => {
    dispatch(getCurrencyRequest());
  }, []);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = () => {
    wait(1000).then(() => {
      setCurrency(currency);
      // dispatch(getCurrencyRequest());
    });
  };

  var swipeoutBtns = [
    {
      text: 'Delete',
      type: 'delete',
      onPress: () =>
        setCurrency(currency.filter(e => e != SyncStorage.get('item'))),
    },
  ];

  return (
    <View style={styles.container}>
      <Header centerText="CryptoTracker Pro" />
      {loading ? (
        <ActivityIndicator color="#385774" size="large" />
      ) : (
        <FlatList
          ListFooterComponent={
            <TouchableOpacity
              onPress={() => navigation.navigate('AddCryptoCurrency')}
              style={styles.addCurrencyButton}>
              <Text style={styles.addCurrency}>+ Add a Cryptocurrency</Text>
            </TouchableOpacity>
          }
          onRefresh={() => {
            onRefresh();
          }}
          refreshing={refreshing}
          keyExtractor={item => item.id}
          data={currency}
          renderItem={({item}) => (
            <Swipeout
              onOpen={() => SyncStorage.set('item', item)}
              style={styles.swipe}
              right={swipeoutBtns}>
              <ListItem
                name={item.name}
                symbol={item.symbol}
                currentPrice={item.current_price}
                priceChangePercentage7d={
                  item.price_change_percentage_7d_in_currency
                }
                logoUrl={item.image}
              />
            </Swipeout>
          )}
        />
      )}
    </View>
  );
}

// const mapStateToProps = state => ({
//   CurrencyList: state.CurrencyList,
// });
// const mapDispatchToProps = {
//   getCurrencyRequest: getCurrencyRequest,
// };
// export default connect(mapStateToProps, mapDispatchToProps)(HomePageScreen);

// const mapDispatchToProps = dispatch => {
//   return {
//     logOutMethod: _ => {
//       dispatch(logOut());
//     },
//   };
// };
// export default compose(connect(null, mapDispatchToProps))(HomePageScreen);

// import React, {useEffect, useState, useRef} from 'react';
// import {connect} from 'react-redux';
// import {compose} from 'redux';
// import logOut from '../../store/actions/login/logOut';
// import {
//   FlatList,
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   TextInput,
//   Alert,
// } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
// import AsyncStorage from '@react-native-community/async-storage';
// import Contacts from 'react-native-contacts';
// import styles from './styles';
// import Button from '../../components/Button/index';
// import Header from '../../components/Header/index';
// function HomePageScreen({logOutMethod}) {
//   const [contact, setContacts] = useState([]);
//   const [count, setCount] = useState(null);

//   useEffect(() => {
//     Contacts.getAll().then(contacts => {
//       setContacts(contacts);
//     });
//     Contacts.getCount().then(count => {
//       setCount(count);
//     });
//   }, []);

//   const [choised, setChoised] = useState([]);

//   const isChecked = (array, type) => {
//     return array?.includes(type);
//   };

//   const [data, setData] = useState({
//     searchText: '',
//   });
//   const isInitialMountProducts = useRef(true);

//   useEffect(async () => {
//     if (!isInitialMountProducts.current) {
//       isInitialMountProducts.current = false;
//     } else {
//       Contacts.getContactsMatchingString(data.searchText).then(res => {
//         setContacts(res);
//       });
//       if (data.searchText == '') {
//         Contacts.getAll().then(contacts => {
//           setContacts(contacts);
//         });
//       }
//     }
//   }, [data]);

//   let contactsArray = [];
//   const checkExist = item => {
//     if (contactsArray.includes(item)) {
//       contactsArray.splice(contactsArray.indexOf(item), 1);
//       setChoised([...choised, contactsArray]);
//       return false;
//     }
//     contactsArray.push(item);
//     setChoised([...choised, ...contactsArray]);
//   };

//   const deleteContact = index => {
//     console.log;
//     choised.splice(index, 1);
//     setChoised([...choised]);
//   };

//   const addContactToFavourite = data => {
//     AsyncStorage.getItem('FavContacts')
//       .then(favContacts => {
//         if (favContacts !== null) {
//           const contacts = JSON.parse(favContacts);
//           contacts.push(data);
//           AsyncStorage.setItem('FavContacts', JSON.stringify(contacts));
//         } else {
//           const contacts = [];
//           contacts?.push(data);
//           AsyncStorage.setItem('FavContacts', JSON.stringify(contacts));
//         }
//         setTimeout(() => {
//           Alert.alert('Added to favourite');
//         }, 1000);
//       })
//       .catch(err => {
//         console.error(err.response);
//         alert(err);
//       });
//   };
//   return (
//     <View style={styles.container}>
//       <Header
//         centerText="Add Participants"
//         pressCancel={() => {
//           setChoised('');
//         }}
//         subText={count}
//         centerSubText={choised?.length}
//       />
//       <View>
//         <View style={styles.serachBarView}>
//           <Image
//             style={styles.searchIcon}
//             source={require('../../assets/search.png')}
//           />
//           <TextInput
//             value={data.searchText}
//             onChangeText={searchText =>
//               setData({
//                 ...data,
//                 searchText: searchText,
//               })
//             }
//             style={{left: 10, color: '#928D93'}}
//             placeholder="Search"
//             placeholderTextColor="#928D93"
//           />
//         </View>
//       </View>
//       <View style={{backgroundColor: '#252026'}}>
//         <FlatList
//           horizontal
//           data={choised}
//           renderItem={({item, index}) => (
//             <View
//               style={{
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 margin: 10,
//               }}>
//               <Image
//                 source={require('../../assets/user-Icon.png')}
//                 style={{width: 60, height: 60, borderRadius: 40}}
//               />
//               <TouchableOpacity
//                 onPress={() => deleteContact(index)}
//                 style={styles.removeContactView}>
//                 <Text style={styles.closeText}>x</Text>
//               </TouchableOpacity>
//               <Text style={styles.contactName}>{item}</Text>
//             </View>
//           )}
//         />
//       </View>
//       <FlatList
//         ListFooterComponent={
//           <Button onPress={() => logOutMethod()} title="Logut" />
//         }
//         data={contact}
//         renderItem={({item, index}) => (
//           <View>
//             <View style={styles.rowSection}>
//               <Image
//                 source={require('../../assets/user-Icon.png')}
//                 style={styles.userIcon}
//               />

//               <View style={{width: '80%'}}>
//                 <Text style={styles.title}>{item.givenName}</Text>
//                 <Text style={styles.subTitle}>{item.givenName}</Text>
//               </View>

//               <CheckBox
//                 style={styles.checkBox}
//                 boxType={'circle'}
//                 lineWidth={1.5}
//                 onFillColor={'#176C9A'}
//                 tintColors={{true: '#FFFFFF'}}
//                 onTintColor={'#176C9A'}
//                 onCheckColor={'#FFFFFF'}
//                 value={isChecked(contactsArray, item)}
//                 onValueChange={() => {
//                   checkExist(item.givenName);
//                 }}
//               />
//               <TouchableOpacity
//                 onPress={() => {
//                   addContactToFavourite(item);
//                 }}
//                 style={{right: 30}}>
//                 <Image
//                   style={{width: 20, height: 20}}
//                   source={require('../../assets/fav2.png')}
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     logOutMethod: _ => {
//       dispatch(logOut());
//     },
//   };
// };
// export default compose(connect(null, mapDispatchToProps))(HomePageScreen);
