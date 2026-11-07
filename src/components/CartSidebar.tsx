import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart, cartItemKey, itemUnitPrice } from "@/context/CartContext";

export const CartSidebar = () => {
  const {
    items,
    removeItem,
    updateQuantity,
    totalItems,
    totalPrice,
    isOpen,
    setIsOpen,
    clearCart,
  } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-lg bg-background border-border flex flex-col">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="font-display text-2xl flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-primary" />
            Your Cart
            {totalItems > 0 && (
              <span className="bg-primary text-primary-foreground text-sm px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <h3 className="font-display text-xl text-foreground mb-2">
              Your cart is empty
            </h3>
            <p className="text-muted-foreground mb-6">
              Add some bikes to get started!
            </p>
            <Button variant="racing" onClick={() => setIsOpen(false)} asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              <AnimatePresence>
                {items.map((item) => {
                  const key = cartItemKey(item);
                  return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4 p-4 bg-card rounded-lg border border-border"
                  >
                    {/* Image */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-sm text-foreground truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-muted-foreground capitalize">
                        {item.product.category}
                      </p>
                      {item.options && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Size {item.options.size} · {item.options.frameColor} ·{" "}
                          {item.options.groupset}
                        </p>
                      )}
                      <p className="text-primary font-semibold mt-1">
                        {formatPrice(itemUnitPrice(item))}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(key, item.quantity - 1)}
                          className="w-7 h-7 rounded bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(key, item.quantity + 1)}
                          className="w-7 h-7 rounded bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => removeItem(key)}
                          className="ml-auto w-7 h-7 rounded bg-destructive/10 hover:bg-destructive/20 text-destructive flex items-center justify-center transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="border-t border-border pt-4 space-y-4">
              {/* Subtotal */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-primary font-medium">Free</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-border">
                <span className="font-display text-lg">Total</span>
                <span className="font-display text-2xl text-primary">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <Button variant="racing" size="lg" className="w-full">
                  Checkout
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearCart}
                  className="w-full"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
