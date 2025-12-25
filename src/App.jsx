import { useState, useEffect } from 'react'
import './App.css'
import CartSummary from './components/CartSummary'
import CartControls from './components/CartControls'
import CartStatistics from './components/CartStatistics'

function App() {
  const [itemsCount , setItemsCount] = useState(0)
  const [totalPrice  , setTotalPrice] = useState(0)
  const [actionsCount   , setActionsCount] = useState(-1)

  useEffect(() => {
    setActionsCount(actionsCount + 1)
  }, [itemsCount, totalPrice])

  return (
    <>
        <CartSummary itemsCount={itemsCount} totalPrice={totalPrice} />
        <CartControls onAdd={() => {
          setItemsCount(itemsCount + 1);
          setTotalPrice(totalPrice + 100);
        }} onRemove={() => {
          setItemsCount(itemsCount - 1);
          setTotalPrice(totalPrice - 100);
        }} onClear={() => {
          setItemsCount(0);
          setTotalPrice(0);
        }} />
        <CartStatistics itemsCount={itemsCount} totalPrice={totalPrice} actionsCount={actionsCount} />
    </>

  )
}

export default App
