import React, { useContext } from "react";
import styles from "./MenuItem.module.css";
import CartContext from "../../store/cart-context";
import ItemForm from "../ItemForm/ItemForm";

const MenuItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.item.id,
      name: props.item.name,
      amount: amount,
      price: props.item.price,
    });
  };

  const price = `$${props.item.price.toFixed(2)}`;

  return (
    <div className={styles.item}>
      <div>
        <p className={styles.name}>{props.item.name}</p>
        <p className={styles.description}>{props.item.description}</p>
        <p className={styles.price}>{price}</p>
      </div>
      <div>
        <ItemForm onAddToCart={addToCartHandler} item={props.item} />
      </div>
    </div>
  );
};

export default MenuItem;
