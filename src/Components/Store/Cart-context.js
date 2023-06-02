import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = (props) => {
  const [productStore, setProductStore] = useState([]);
  const [cartStore, setCartStore] = useState([]);

  const addProduct = (product) => {
    setProductStore((prevStore) => [...prevStore, product]);
  };

  const addToCart = (item) => {
    setCartStore((prevCart) => [...prevCart, item]);
  };

  const removeProduct = (productId) => {
    setProductStore((prevStore) => prevStore.filter((product) => product.id !== productId));
  };

  const clearCart = () => {
    setCartStore([]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://crudcrud.com/api/ece51e5a83bd47b28dbd92e5d50bf576/cart');
        const data = await response.json();
        setCartStore(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        await fetch('https://crudcrud.com/api/ece51e5a83bd47b28dbd92e5d50bf576/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cartStore),
        });
      } catch (error) {
        console.log(error);
      }
    };

    saveData();
  }, [cartStore]);

  const contextValue = {
    productStore: productStore,
    cartStore: cartStore,
    addProduct: addProduct,
    addToCart: addToCart,
    removeProduct: removeProduct,
    clearCart: clearCart,
  };

  return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>;
};

export default CartContext;
