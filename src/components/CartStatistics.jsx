import React from "react";

function CartStatistics({ itemsCount, totalPrice, actionsCount }) {
  return (
    <div>
      <h1>Statistics</h1>
      <p>Кількість товарів: {itemsCount}</p>
      <p>Загальна сума: {totalPrice} грн</p>
      <p>Кількість дій: {actionsCount}</p>
    </div>
  );
}

export default CartStatistics;