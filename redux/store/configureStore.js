import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import {persistStore, persistReducer} from 'redux-persist';
import rootSaga from '../sagas';
import saga from 'redux-saga';
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// export let store = createStore(persistedReducer,applyMiddleware(sagaMiddleware))
runSaga: sagaMiddleware.run(rootSaga);
// const configureStore = () => {
// const sagaMiddleware = createSagaMiddleware();

//   return {
//     ...createStore(persistedReducer, applyMiddleware(sagaMiddleware)),
//     runSaga: sagaMiddleware.run(rootSaga)

//     //saga.run(rootSaga)
//   }
// };
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default configureStore;
