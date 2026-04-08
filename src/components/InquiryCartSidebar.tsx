import { useInquiryCart } from "@/hooks/useInquiryCart";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

interface InquiryCartModalProps {
  open: boolean;
  onClose: () => void;
}

export const InquiryCartModal = ({ open, onClose }: InquiryCartModalProps) => {
  const { items, removeItem, clearCart } = useInquiryCart();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Motion variants
  const variants = {
    hidden: isMobile ? { y: "100%" } : { x: "100%" },
    visible: { x: 0, y: 0 },
    exit: isMobile ? { y: "100%" } : { x: "100%" },
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black"
          />

          {/* Modal */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed z-50 bg-card shadow-xl overflow-y-auto ${
              isMobile
                ? "inset-x-0 bottom-0 rounded-t-2xl min-h-[50vh] max-h-[80vh]"
                : "top-0 right-0 h-full w-96 rounded-l-2xl"
            }`}
          >
            <div className="p-5 flex flex-col gap-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="font-display font-semibold text-lg flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  Inquiry List
                </h3>
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Items */}
              {items.length === 0 ? (
                <p className="text-muted-foreground text-center py-10">
                  Your inquiry list is empty.
                </p>
              ) : (
                <div className="space-y-2">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-2 rounded-lg bg-muted/50 text-sm"
                    >
                      <span className="text-foreground truncate flex-1">
                        {item.name}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive ml-2"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Actions */}
              {items.length > 0 && (
                <div className="flex flex-col gap-2 mb-14">
                  <a
                    href={`mailto:kanzamarineservice@gmail.com?subject=Inquiry for ${items.length} items&body=Hi, I would like to inquire about:%0A${items
                      .map((i) => `- ${i.name}`)
                      .join("%0A")}`}
                  >
                    <Button className="w-full gradient-marine text-primary-foreground hover:opacity-90">
                      Send Inquiry
                    </Button>
                  </a>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearCart}
                    className="w-full text-muted-foreground"
                  >
                    Clear All
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};