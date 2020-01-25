import { ActionTypes } from './Types';

export const CartReducer = (storeData, action) => {
  let neoStore = { cart: [], cartItems: 0, cartPrice: 0, ...storeData };
  switch (action.type) {
    case ActionTypes.CART_ADD:
      let p = action.payload.product;
      let q = action.payload.quantity;
      let existing = neoStore.cart.find(item => item.product.id === p.id);
      if (existing) {
        existing.quantity += q;
      } else {
        neoStore.cart = [...neoStore.cart, action.payload];
      }
      neoStore.cartItems += q;
      neoStore.cartPrice += q * p.price;
      return neoStore;
    case ActionTypes.CART_UPDATE:
      neoStore.cart = neoStore.cart.map(item => {
        if (item.product.id === action.payload.product.id) {
          const diff = action.payload.quantity - item.quantity;
          neoStore.cartItems += diff;
          neoStore.cartPrice += diff * item.product.price;
          return action.payload;
        } else {
          return item;
        }
      });
      return neoStore;
    case ActionTypes.CART_REMOVE:
      let selection = neoStore.cart.find(
        item => item.product.id === action.payload.id
      );
      neoStore.cartItems -= selection.quantity;
      neoStore.cartPrice -= selection.quantity * selection.product.price;
      neoStore.cart = neoStore.cart.filter(item => item !== selection);
      return neoStore;
    case ActionTypes.CART_CLEAR:
      return { ...storeData, cart: [], cartItems: 0, cartPrice: 0 };
    default:
      return storeData || {};
  }
};
