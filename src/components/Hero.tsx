import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Anchor, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ship.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Cargo ship at Chittagong port" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
        <div className="absolute inset-0 gradient-hero opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary-foreground mb-6">
              <Anchor className="h-4 w-4" />
              Chittagong's Maritime Supply Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
          >
            Ship Spare Parts,{" "}
            <span className="text-gradient-gold">Repairs</span> &{" "}
            Marine Supplies
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed"
          >
            KANZA MARINE delivers critical ship spare parts, expert repair services, and essential supplies from Chittagong Port. Fast sourcing. Reliable service. Global reach.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/products">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-marine text-base px-8 py-6">
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6">
                Request a Quote
              </Button>
            </Link>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-8 mt-16"
          >
            {[
              { icon: Shield, label: "Vessel Clients", value: "50+" },
              { icon: Clock, label: "Response Time", value: "24hr" },
              { icon: Anchor, label: "Parts in Stock", value: "500+" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary-foreground/10">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-foreground">{value}</p>
                  <p className="text-xs text-primary-foreground/60">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
