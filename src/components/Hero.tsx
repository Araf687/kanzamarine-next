import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Anchor, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ship.jpg";

const Hero = () => {
  const productImageVariants = {
    initial: { opacity: 0, x: 50, scale: 0.9 },
    animate: { opacity: 1, x: 0, scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="relative min-h-[60vh] pt-10 lg:pt-0 md:min-h-screen flex items-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cargo ship at Chittagong port"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-foreground/10" />
        <div className="absolute inset-0 gradient-hero opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-8 md:pt-20 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="max-w-3xl mb-4 lg:mb-10 md:mb-0">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs sm:text-sm font-medium text-primary-foreground mb-4">
              <Anchor className="h-4 w-4" />
              Chittagong's Maritime Supply Partner
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-4"
          >
            Ship Spare Parts,{" "}
            <span className="text-gradient-gold">Repairs</span> & Marine Supplies
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base md:text-xl text-primary-foreground/80 mb-6 max-w-2xl leading-relaxed"
          >
            KANZA MARINE delivers critical ship spare parts, expert repair services, and essential supplies from Chittagong Port. Fast sourcing. Reliable service. Global reach.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex gap-3"
          >
           <Link to="/products">
  <Button className="px-6 py-3 text-sm sm:text-base">
    Browse Products
    <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
</Link>

<Link to="/contact">
  <Button variant="outline" className="px-6 py-3 text-sm sm:text-base">
    Request a Quote
  </Button>
</Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6 mt-8 md:mt-12"
          >
            {[
              { icon: Shield, label: "Vessel Clients", value: "50+" },
              { icon: Clock, label: "Response Time", value: "24hr" },
              { icon: Anchor, label: "Parts in Stock", value: "500+" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary-foreground/10">
                  <Icon className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-lg sm:text-2xl font-bold text-primary-foreground">
                    {value}
                  </p>
                  <p className="text-xs text-primary-foreground/60">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Product Showcase (Hidden on Mobile) */}
        <div className="hidden md:block absolute bottom-0 right-6 w-[95%] md:w-[45%] lg:w-[35%]">
          <div className="space-y-4">

            <div className="grid grid-cols-2 gap-4">
              {["/hero/heroPic3.png", "/hero/heroPic5.png"].map((img, index) => (
                <motion.div
                  key={img}
                  variants={productImageVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 flex items-center justify-center shadow-xl"
                >
                  <img
                    src={img}
                    alt="Marine Product"
                    className="h-24 md:h-32 object-contain"
                  />
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                "/hero/heroPic1.png",
                "/hero/heroPic2.png",
                "/hero/heroPic4.png",
              ].map((img, index) => (
                <motion.div
                  key={img}
                  variants={productImageVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-3 flex items-center justify-center shadow-xl"
                >
                  <img
                    src={img}
                    alt="Marine Product"
                    className="h-20 md:h-28 object-contain"
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;