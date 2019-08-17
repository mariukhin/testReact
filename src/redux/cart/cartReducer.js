import { ActionType } from './cartActions';

const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionType.ADD_TO_CART:
      return [...state, payload.cart];
    case ActionType.COUNT_CHANGE:
      return [
        ...state.filter(item => item.id !== payload.cart.id),
        payload.cart,
      ];
    case ActionType.DELETE_FROM_CART:
      return [...state.filter(item => item.id !== payload.id)];
    // case CurrentPostActionType.UPDATE_POST_SUCCESS:
    //   return [
    //     payload.post,
    //     ...state.filter(item => item.id !== payload.post.id),
    //   ];
    // case ActionType.DELETE_POST_SUCCESS:
    //   return [...state.filter(item => item.id !== payload.id)];
    default:
      return state;
  }
};

export default cartReducer;
