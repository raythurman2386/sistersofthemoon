import { useState } from "react"

export const useLocalStorage = initialValue => {
  const [storedCart, setStoredCart] = useState(() => {
    const item = localStorage.getItem("Cart")
    return item ? JSON.parse(item) : initialValue
  })

  const setCart = updatedValue => {
    setStoredCart(updatedValue)

    localStorage.setItem("Cart", JSON.stringify(updatedValue))
  }

  const addItem = (e, item) => {
    e.preventDefault()
    let [tarot] = storedCart.filter(
      cartitem => cartitem.title === "Tarot Reading"
    )
    if (tarot) {
      if (item.title === "Tarot Reading") {
        return
      }
    }
    let [run] = storedCart.filter(cartitem => cartitem.title === "Rune Reading")
    if (run) {
      if (item.title === "Rune Reading") {
        return
      }
    }
    let [dups] = storedCart.filter(cartitem => cartitem.id === item.id)
    let newCart = storedCart.filter(cartitem => cartitem.id !== item.id)
    if (dups) {
      return setCart([...newCart, { ...item, quantity: dups.quantity + 1 }])
    }

    return setCart([...storedCart, item])
  }

  const removeItem = (e, id) => {
    e.preventDefault()
    const [item] = storedCart.filter(item => item.id === id)
    const newCart = storedCart.filter(item => item.id !== id)

    if (item.quantity > 1) {
      return setCart([...newCart, { ...item, quantity: item.quantity - 1 }])
    }

    return setCart(newCart)
  }

  const emptyCart = () => setCart([])

  return [storedCart, addItem, removeItem, emptyCart]
}
