import { ActionType } from './cartActions';

export const addtoCart = cart => ({
  type: ActionType.ADD_TO_CART,
  payload: {
    cart,
  },
});
export const updatecount = cart => ({
  type: ActionType.COUNT_CHANGE,
  payload: {
    cart,
  },
});
export const deleteproduct = id => ({
  type: ActionType.DELETE_FROM_CART,
  payload: {
    id,
  },
});
