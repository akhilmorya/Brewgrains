import { combineReducers } from 'redux';
import configureStore from '../stores/createStore';
import rootSaga from '../sagas';
import UserLoginReducer from './userLoginReducer';
import StartUpReducer from './startUpReducer';
import LanguageReducer from './languageReducer';
import BrandReducer from './brandsReducer';
import commonReducer from './commonReducer';
import ProductsReducer from './productsReducer';
import cartReducer from './cartReducer';
import orderReducer from './orderReducer';

export default () => {
  const rootReducer = combineReducers({
    UserLoginReducer,
    StartUpReducer,
    LanguageReducer,
    BrandReducer,
    ProductsReducer,
    commonReducer,
    cartReducer,
    orderReducer
  });

  return configureStore(rootReducer, rootSaga);
};
