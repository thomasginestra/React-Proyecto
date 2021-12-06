import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const isInCart = cart.some((product) => product.id === item.id);
    if (item.stock >= 0) {
      if (!isInCart) {
        item.stock = item.stock - quantity;
        const newProduct = {
          ...item,
          quantity: quantity,
          stock: item.stock,
        };
        setCart([...cart, newProduct]);
      } else {
        const existingItem = cart.find((product) => product.id === item.id);
        // item.stock = item.stock - quantity;

        // Se checkea si esta repetido
        existingItem.quantity = existingItem.quantity + quantity;
        existingItem.stock = existingItem.stock - quantity;
        setCart([...cart]);
      }
    }
  };

  const removeItem = (item) => {
    // Checkea si existe el producto
    const existingIndex = cart.findIndex((product) => product.name === item.name);
    // Copia el array del carrito
    const cartCopy = Array.from(cart);
    if (existingIndex >= 0) {
      // Se borra el item del carrito
      cartCopy.splice(existingIndex, 1);
      // Se retorna el carrito actualizado
      setCart(cartCopy);
    }
  };

  const clearCart = () => {
    // Se retorna el carrito vacio
    setCart([]);
  };

  return <CartContext.Provider value={{ cart, setCart, addToCart, removeItem, clearCart }}>{children}</CartContext.Provider>;
}