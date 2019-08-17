import { ActionType } from './totalPriceActions';

const totalPriceReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case ActionType.UPDATE_TOTAL_PRICE:
      return payload.price;
    default:
      return state;
  }
};

export default totalPriceReducer;
