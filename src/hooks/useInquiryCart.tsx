import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

export interface InquiryItem {
  id: string;
  name: string;
  category: string;
  image?: string;
}

interface InquiryCartContextType {
  items: InquiryItem[];
  addItem: (item: InquiryItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  isInCart: (id: string) => boolean;
  count: number;
}

const InquiryCartContext = createContext<InquiryCartContextType | undefined>(undefined);

export const InquiryCartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<InquiryItem[]>(() => {
    try {
      const saved = localStorage.getItem("kanza-inquiry-cart");
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("kanza-inquiry-cart", JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((item: InquiryItem) => {
    setItems(prev => prev.some(i => i.id === item.id) ? prev : [...prev, item]);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const isInCart = useCallback((id: string) => items.some(i => i.id === id), [items]);

  return (
    <InquiryCartContext.Provider value={{ items, addItem, removeItem, clearCart, isInCart, count: items.length }}>
      {children}
    </InquiryCartContext.Provider>
  );
};

export const useInquiryCart = () => {
  const ctx = useContext(InquiryCartContext);
  if (!ctx) throw new Error("useInquiryCart must be used within InquiryCartProvider");
  return ctx;
};
