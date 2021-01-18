import { useState } from 'react'

export const useLocalStorage = initialValue => {
  const [storedCart, setStoredCart] = useState(() => {
    const item = window.localStorage.getItem('Cart')
    return item ? JSON.parse(item) : initialValue
  })

  const setCart = updatedValue => {
    setStoredCart(updatedValue)

    window.localStorage.setItem('Cart', JSON.stringify(updatedValue))
  }

  const addItem = item => {
    try {
      setCart([...storedCart, ...item])
    } catch (error) {
      setCart([...storedCart, item])
    }
  }

  const removeItem = (e, id) => {
    e.preventDefault()
    const newCart = storedCart.filter(item => item.node.id !== id)

    setCart(newCart)
  }

  return [storedCart, addItem, removeItem]
}