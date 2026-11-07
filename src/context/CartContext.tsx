import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/data/products";
import type { BikeConfiguration } from "@/data/bikeOptions";

export interface CartItem {
  product: Product;
  quantity: number;
  options?: BikeConfiguration;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, options?: BikeConfiguration) => void;
  removeItem: (itemKey: string) => void;
  updateQuantity: (itemKey: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function cartItemKey(item: CartItem): string {
  if (!item.options) return item.product.id;
  return `${item.product.id}::${item.options.size}|${item.options.frameColor}|${item.options.groupset}`;
}

export function itemUnitPrice(item: CartItem): number {
  return item.product.price + (item.options?.priceAdjustment ?? 0);
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product: Product, options?: BikeConfiguration) => {
    const key = options
      ? `${product.id}::${options.size}|${options.frameColor}|${options.groupset}`
      : product.id;
    setItems((prev) => {
      const existing = prev.find((item) => cartItemKey(item) === key);
      if (existing) {
        return prev.map((item) =>
          cartItemKey(item) === key ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1, options }];
    });
    setIsOpen(true);
  };

  const removeItem = (key: string) => {
    setItems((prev) => prev.filter((item) => cartItemKey(item) !== key));
  };

  const updateQuantity = (key: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(key);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        cartItemKey(item) === key ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + itemUnitPrice(item) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
