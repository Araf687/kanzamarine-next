import { Link, useLocation } from "react-router-dom";
import { Home, Package, Briefcase, ShoppingCart, Phone } from "lucide-react";
import { useInquiryCart } from "@/hooks/useInquiryCart";
import { motion } from "framer-motion";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/products", icon: Package, label: "Products" },
  { to: "/services", icon: Briefcase, label: "Services" },
  { to: "/contact", icon: Phone, label: "Contact" },
];

const BottomNav = () => {
  const location = useLocation();
  const { count } = useInquiryCart();

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t shadow-lg">
      <div className="flex justify-around items-center h-16">
        {navItems.map(({ to, icon: Icon, label }) => {
          const active = isActive(to);

          return (
            <Link
              key={to}
              to={to}
              className="relative flex flex-col items-center justify-center text-xs font-medium"
            >
              {active && (
                <motion.div
                  layoutId="bottom-indicator"
                  className="absolute -top-1 h-1 w-8 rounded-full bg-primary"
                />
              )}

              <Icon
                className={`h-5 w-5 ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <span
                className={`mt-1 ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}

        {/* Cart Button Separate for Badge */}
        {/* <Link
          to="/products"
          className="relative flex flex-col items-center justify-center text-xs font-medium"
        >
          <ShoppingCart className="h-5 w-5 text-muted-foreground" />
          {count > 0 && (
            <span className="absolute top-0 right-2 h-4 w-4 rounded-full bg-accent text-[10px] flex items-center justify-center text-accent-foreground font-bold">
              {count}
            </span>
          )}
          <span className="mt-1 text-muted-foreground">Cart</span>
        </Link> */}
      </div>
    </div>
  );
};

export default BottomNav;