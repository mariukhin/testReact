import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import totalPriceReducer from './totalPrice/totalPriceReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  totalPrice: totalPriceReducer,
});

export default rootReducer;
