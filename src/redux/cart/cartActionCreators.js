import { ActionType } from './cartActions';

export const addToCart = cart => ({
  type: ActionType.ADD_TO_CART,
  payload: {
    cart,
  },
});
export const updateCount = cart => ({
  type: ActionType.COUNT_CHANGE,
  payload: {
    cart,
  },
});
export const deleteProduct = id => ({
  type: ActionType.DELETE_FROM_CART,
  payload: {
    id,
  },
});
// export const deleteFromCart = error => ({
//   type: ActionType.FETCH_POSTS_ERROR,
//   payload: {
//     error,
//   },
// });
// export const createPostStart = () => ({
//   type: ActionType.CREATE_POST_START,
// });

// export const createPostSuccess = post => ({
//   type: ActionType.CREATE_POST_SUCCESS,
//   payload: {
//     post,
//   },
// });

// export const createPostError = error => ({
//   type: ActionType.CREATE_POST_ERROR,
//   payload: {
//     error,
//   },
// });
// export const deletePostStart = () => ({
//   type: ActionType.DELETE_POST_START,
// });

// export const deletePostSuccess = id => ({
//   type: ActionType.DELETE_POST_SUCCESS,
//   payload: {
//     id,
//   },
// });

export const deletePostError = error => ({
  type: ActionType.DELETE_FROM_CART,
  payload: {
    error,
  },
});
