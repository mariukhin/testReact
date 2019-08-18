import { ActionType } from './cartActions';

const cartReducer = (state = [], { type, payload }) => {
  let index;
  switch (type) {
    case ActionType.ADD_TO_CART:
      return [...state, payload.cart];
    case ActionType.COUNT_CHANGE:
      index = state.indexOf(state.find(item => item.id === payload.cart.id));
      return [
        ...state.map((item, i) => {
          if (i === index) {
            return payload.cart;
          }
          return item;
        }),
      ];
    case ActionType.DELETE_FROM_CART:
      return [...state.filter(item => item.id !== payload.id)];
    default:
      return state;
  }
};

export default cartReducer;
