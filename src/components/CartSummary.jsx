import React from "react";

function CartSummary({ itemsCount, totalPrice }) {
  return (
    <div>
      <h1><ion-icon name="cart-outline"></ion-icon></h1>
      <p>Кількість товарів: {itemsCount}</p>
      <p>Загальна сума: {totalPrice} грн</p>
    </div>
  );
}

export default CartSummary;