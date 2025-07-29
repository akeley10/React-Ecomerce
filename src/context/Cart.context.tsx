import { createContext, useContext, useState, type ReactNode } from 'react';

export type Product = {
  id: number;
  title: string;
  price: number;
  img: string;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeOneFromCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
};

const CartContext = createContext<CartContextType>({ cart: [], addToCart: () => {} });

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, product]);
  };

  const removeOneFromCart = (productId: number) =>{
    setCart(prev => {
      const index = prev.findIndex(p => p.id === productId);
      if (index === -1) return prev;
      const newCart = [...prev];
      newCart.splice(index, 1);
      return newCart;
    });
  };

  const removeFromCart = (productId: number) =>{
    setCart(prev => {
      return prev.filter(p => p.id !== productId);
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart , removeOneFromCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
