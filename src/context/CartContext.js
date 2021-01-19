import React, { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const defaultState = []

export const CartContext = createContext(defaultState)

export const CartProvider = ({ children }) => {
  const [cart, addItem, removeItem, emptyCart] = useLocalStorage([])

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, emptyCart }}>{children}</CartContext.Provider>
  )
}