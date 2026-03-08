import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Anchor, Menu, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useInquiryCart } from "@/hooks/useInquiryCart";
import { InquiryCartModal } from "./InquiryCartSidebar";


const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";
  const isTransparentHome = isHome && !scrolled;

  const { count } = useInquiryCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparentHome ? "bg-transparent py-4" : "glass-strong shadow-marine py-2"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Anchor className="h-8 w-8 text-primary transition-transform group-hover:rotate-12" />
            </div>

            <div className="flex flex-col">
              <span
                className={`text-lg font-bold font-display tracking-tight ${
                  isTransparentHome ? "text-white" : "text-foreground"
                }`}
              >
                KANZA MARINE
              </span>

              <span
                className={`text-[10px] tracking-[0.2em] uppercase font-medium ${
                  isTransparentHome ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                Bangladesh
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => {
              const active = isActive(to);

              return (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    active
                      ? isTransparentHome
                        ? "text-white bg-white/10"
                        : "text-primary bg-primary/10"
                      : isTransparentHome
                      ? "text-white/70 hover:text-white hover:bg-white/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open Inquiry Cart"
              className={`relative ${isTransparentHome ? "text-white bg-white/10" : "text-foreground bg-muted"}`}
              onClick={() => setCartModalOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {count > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-bold"
                >
                  {count}
                </motion.span>
              )}
            </Button>

            <Link to="/contact" className="hidden md:block">
              <Button className="gradient-marine text-primary-foreground shadow-marine hover:opacity-90 transition-opacity">
                Get a Quote
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" aria-label="Open Menu">
                  <Menu className={`h-5 w-5 ${isTransparentHome ? "text-white" : "text-foreground"}`} />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-72 gradient-hero border-none">
                <div className="flex flex-col gap-2 mt-8">
                  {navLinks.map(({ to, label }) => {
                    const active = isActive(to);
                    return (
                      <Link
                        key={to}
                        to={to}
                        onClick={() => setOpen(false)}
                        className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                          active
                            ? "bg-primary/20 text-primary-foreground"
                            : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary/10"
                        }`}
                      >
                        {label}
                      </Link>
                    );
                  })}

                  <Link to="/contact" onClick={() => setOpen(false)} className="mt-4">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      {/* Inquiry Cart Modal */}
      <InquiryCartModal open={cartModalOpen} onClose={() => setCartModalOpen(false)} />
    </>
  );
};

export default Navbar;