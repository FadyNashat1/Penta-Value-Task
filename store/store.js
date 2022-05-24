import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./reducers/rootReducer";
import storage from 'redux-persist/lib/storage'
import { AsyncStorage } from 'react-native';

const persistConfig = {
    key: "root",
    storage: storage,

};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(persistedReducer, applyMiddleware(thunk));
export let persistor = persistStore(store);