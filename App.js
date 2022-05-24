import React, {useEffect, useState} from 'react';
import {AsyncStorage} from 'react-native';
import Routes from './navigation/index';
import thunk from 'redux-thunk';
// import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import SyncStorage from 'sync-storage';
import {createStore, applyMiddleware} from 'redux';
import {PersistGate} from 'redux-persist/integration/react';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import firebase from '@react-native-firebase/app';
import rootReducer from './redux/reducers/index'; ///newwwwww saga
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'; // this is for debugging with React-Native-Debugger, you may leave it out
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas/index';
import {persistStore, persistReducer} from 'redux-persist';
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persist_reducer = persistReducer(persistConfig, rootReducer);
export default function App() {
  const credentials = {
    apiKey: 'AIzaSyAOC6gE44_xkMmIQTSYwHkjX_XonRj2qOo',
    authDomain: 'authentication-4a2e8.firebaseapp.com',
    projectId: 'authentication-4a2e8',
    storageBucket: 'authentication-4a2e8.appspot.com',
    messagingSenderId: '428998504912',
    appId: '1:428998504912:web:06410ad56012391693c9d5',
    measurementId: 'G-8V82R78756',
  };

  const config = {
    name: 'SECONDARY_APP',
  };

  firebase.initializeApp(credentials, config);
  const apps = firebase.apps;

  apps.forEach(app => {
    console.log('App name: ', app.name);
  });

  const initiateSyncStorage = async () => {
    await SyncStorage.init();
  };
  useEffect(() => {
    initiateSyncStorage();
  }, []);
  // const store = createStore(persist_reducer, applyMiddleware(thunk));
  // const persistor = persistStore(store);
  console.disableYellowBox = true;
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);
  let persistor = persistStore(store);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaProvider>
  );
}
