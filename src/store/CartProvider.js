import React, { useReducer } from "react";
import CartContext from "./cart-context";

// Initialize cart to be empty
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  //ADD ITEM
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // Check if item already exists in the cart
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingItemIndex];

    let updatedItems;

    if (existingCartItem) {
      // If item exists in cart, update item amount
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      // If item doesn;t exist in cart, add new item
      updatedItems = state.items.concat(action.item);
    }

    // Return updated cart
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // REMOVE ITEM
  if (action.type === "REMOVE_ITEM") {
    // Fnd existing item in cart
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;

    if (existingCartItem.amount === 1) {
      // Remove item from cart if it is the last item of its type
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      // Reuce amount by 1 if it's not the last item of its type
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    // Return updated cart
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // EMPTY CART
  if (action.type === "EMPTY_CART") {
    return defaultCartState;
  }

  // Return empty cart on app startup
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const emptyCartHandler = () => {
    dispatchCartAction({ type: "EMPTY_CART" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    emptyCart: emptyCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
