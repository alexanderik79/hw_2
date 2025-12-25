import React from "react";

function CartControls({ onAdd, onRemove, onClear }) {
  return (
    <div>
      <button onClick={onAdd}><ion-icon name="bag-add-outline"></ion-icon> (+100₴)</button>
      <button onClick={onRemove}><ion-icon name="bag-remove-outline"></ion-icon> (-100₴)</button>
      <button onClick={onClear}><ion-icon name="trash-outline"></ion-icon></button>
    </div>
  );
}

export default CartControls;
