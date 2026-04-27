import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ShoppingCart, Plus, Check, Eye, X, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { products, categories, Product } from "@/data/products";
import { useInquiryCart } from "@/hooks/useInquiryCart";

const ProductCard = ({ product, onQuickView }: { product: Product; onQuickView: (p: Product) => void }) => {
  const { addItem, removeItem, isInCart } = useInquiryCart();
  const inCart = isInCart(product.id);

  const toggleCart = () => {
    if (inCart) removeItem(product.id);
    else addItem({ id: product.id, name: product.name, category: product.category });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col h-full bg-card rounded-2xl border border-border overflow-hidden hover:shadow-marine hover:border-primary/30 transition-all duration-500"
    >
      {/* Image Section */}
      <div className="relative h-58 bg-muted overflow-hidden">
        {product.image_url ? (
          <img
            src={`/products/${product.image_url}`}
            alt={product.name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/400x300?text=No+Image";
            }}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center gradient-marine">
            <Package className="h-16 w-16 text-primary-foreground/30" />
          </div>
        )}

        {/* Badges */}
        {product.badge && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground border-none">
            {product.badge}
          </Badge>
        )}

        <div className="absolute top-3 right-3">
          <Badge
            variant={product.inStock ? "default" : "secondary"}
            className={
              product.inStock
                ? "bg-primary text-primary-foreground border-none"
                : ""
            }
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </Badge>
        </div>

        <button
          onClick={() => onQuickView(product)}
          className="absolute bottom-3 right-3 p-2 rounded-full bg-primary shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Eye className="h-4 w-4 text-primary-foreground" />
        </button>
      </div>

      {/* Content */}
      <div className="p-2 lg:p-5 flex flex-col flex-1">
        <p className="text-xs font-medium text-accent uppercase tracking-wider mb-1">
          {categories.find((c) => c.value === product.category)?.label}
        </p>

        <h3 className="font-display font-semibold lg:text-lg text-sm text-foreground mb-2">
          {product.name}
        </h3>

        <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed mb-4 line-clamp-1 lg:line-clamp-2">
          {product.description}
        </p>

        {product.brands && (
          <div className="flex flex-wrap gap-1 mb-4">
            {product.brands.slice(0, 3).map((b) => (
              <span
                key={b}
                className="text-[10px] px-2 py-0.5 bg-muted rounded-full text-muted-foreground"
              >
                {b}
              </span>
            ))}
          </div>
        )}

        {/* Button always bottom */}
        <Button
          onClick={toggleCart}
          className={`w-full mt-auto transition-all text-xs lg:text-base ${
            inCart
              ? "bg-accent hover:bg-accent/90 text-accent-foreground"
              : "gradient-marine text-primary-foreground hover:opacity-90"
          }`}
          disabled={!product.inStock}
        >
          {inCart ? (
            <>
              <Check className="mr-2 h-4 w-4" /> In Inquiry List
            </>
          ) : (
            <>
              <Plus className="mr-2 h-4 w-4" /> Add to Inquiry
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
};
const InquiryCartSidebar = () => {
  const { items, removeItem, clearCart } = useInquiryCart();

  if (items.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-card rounded-2xl border border-border p-5 sticky top-24 shadow-card"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display font-semibold text-foreground flex items-center gap-2">
          <ShoppingCart className="h-5 w-5 text-primary" />
          Inquiry List
        </h3>
        <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">{items.length}</span>
      </div>

      <div className="space-y-2 max-h-64 overflow-y-auto mb-4">
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between p-2 rounded-lg bg-muted/50 text-sm">
            <span className="text-foreground truncate flex-1">{item.name}</span>
            <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive ml-2">
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <a href={`mailto:kanzamarineservice@gmail.com?subject=Inquiry for ${items.length} items&body=Hi, I would like to inquire about:%0A${items.map(i => `- ${i.name}`).join("%0A")}`}>
          <Button className="w-full gradient-marine text-primary-foreground hover:opacity-90">
            Send Inquiry
          </Button>
        </a>
        <Button variant="ghost" size="sm" onClick={clearCart} className="w-full text-muted-foreground">
          Clear All
        </Button>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchCategory = activeCategory === "all" || p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center  mb-8 lg:mb-12"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Our Products</span>
          <h1 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Marine Equipment & Spare Parts
          </h1>
          <p className="text-muted-foreground text-sm lg:text-base mt-4 max-w-2xl mx-auto">
            Browse our inventory of reconditioned and new marine equipment. Add items to your inquiry list and get a quote.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat.value
                    ? "gradient-marine text-primary-foreground shadow-marine"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid + Sidebar */}
        <div className="flex gap-8">
          <div className="flex-1">
            <AnimatePresence mode="popLayout">
              <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-6">
                {filtered.map(p => (
                  <ProductCard key={p.id} product={p} onQuickView={setQuickViewProduct} />
                ))}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No products found. Try adjusting your search or filters.</p>
              </div>
            )}
          </div>

          {/* <div className="hidden lg:block w-72 shrink-0">
            <InquiryCartSidebar />
          </div> */}
        </div>
      </div>

      {/* Quick View Modal */}
     <Dialog open={!!quickViewProduct} onOpenChange={() => setQuickViewProduct(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">{quickViewProduct?.name}</DialogTitle>
          </DialogHeader>
          {quickViewProduct && (
            <div className="space-y-4">
              {/* Modal-এ ইমেজ দেখানোর জন্য নিচের অংশটি আপডেট করা হয়েছে */}
              <div className="relative h-68 bg-muted rounded-xl overflow-hidden flex items-center justify-center">
                {quickViewProduct.image_url ? (
                  <img
                    src={`/products/${quickViewProduct.image_url}`}
                    alt={quickViewProduct.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center gradient-marine">
                    <Package className="h-16 w-16 text-primary-foreground/30" />
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <Badge variant="secondary">
                  {categories.find(c => c.value === quickViewProduct.category)?.label}
                </Badge>
                {quickViewProduct.badge && (
                  <Badge className="bg-accent text-accent-foreground border-none">{quickViewProduct.badge}</Badge>
                )}
                <Badge variant={quickViewProduct.inStock ? "default" : "secondary"}>
                  {quickViewProduct.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{quickViewProduct.description}</p>
              
              {quickViewProduct.brands && (
                <div>
                  <p className="text-xs font-medium text-foreground mb-2">Compatible Brands:</p>
                  <div className="flex flex-wrap gap-1">
                    {quickViewProduct.brands.map(b => (
                      <span key={b} className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">{b}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
