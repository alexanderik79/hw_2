import React from "react";

function CartStatistics({ itemsCount, totalPrice, actionsCount }) {
  return (
    <div>
      <h1><ion-icon name="stats-chart-outline"></ion-icon></h1>
      <p>Кількість товарів: {itemsCount}</p>
      <p>Загальна сума: {totalPrice} грн</p>
      <p>Кількість дій: {actionsCount}</p>
    </div>
  );
}

export default CartStatistics;