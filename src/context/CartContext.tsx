'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, MenuItem, ItemOption, OrderCustomerInfo } from '@/types/menu';

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem, option?: ItemOption) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalAmount: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  customer: OrderCustomerInfo;
  updateCustomer: (info: Partial<OrderCustomerInfo>) => void;
  lastAddedName: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'chitir_chicken_cart_v1';
const CUSTOMER_STORAGE_KEY = 'chitir_chicken_customer_v1';

const defaultCustomer: OrderCustomerInfo = {
  name: '',
  phone: '',
  deliveryType: 'livraison',
  address: '',
  restaurantLocation: 'Kamboinsin',
  notes: '',
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customer, setCustomer] = useState<OrderCustomerInfo>(defaultCustomer);
  const [lastAddedName, setLastAddedName] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
      const savedCustomer = localStorage.getItem(CUSTOMER_STORAGE_KEY);
      if (savedCustomer) {
        setCustomer((prev) => ({ ...prev, ...JSON.parse(savedCustomer) }));
      }
    } catch {
      // Ignore parse errors on storage
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore write errors
    }
  }, [items, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(customer));
    } catch {
      // Ignore write errors
    }
  }, [customer, isInitialized]);

  const addItem = (item: MenuItem, option?: ItemOption) => {
    const optionName = option ? option.name : undefined;
    const price = option ? option.price : item.price;
    const cartItemId = `${item.id}-${optionName || 'default'}`;

    setItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === cartItemId);
      if (existing) {
        return prevItems.map((i) =>
          i.id === cartItemId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prevItems,
        {
          id: cartItemId,
          itemId: item.id,
          name: item.name,
          price: price,
          quantity: 1,
          spicy: item.spicy,
          selectedOption: optionName,
          image: item.image,
        },
      ];
    });

    // Flash last added item name for feedback
    setLastAddedName(optionName ? `${item.name} (${optionName})` : item.name);
    setTimeout(() => {
      setLastAddedName(null);
    }, 2500);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const updateCustomer = (info: Partial<OrderCustomerInfo>) => {
    setCustomer((prev) => ({ ...prev, ...info }));
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalAmount,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        customer,
        updateCustomer,
        lastAddedName,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

