import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Wrench,
  Package,
  Ship,
  Settings,
  Shield,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import { useEffect, useRef, useState } from "react";

import service1 from "@/assets/services/service1.webp";
import service2 from "@/assets/services/service2.webp";
import service3 from "@/assets/services/service3.webp";
import service4 from "@/assets/services/service4.webp";
import service5 from "@/assets/services/service5.webp";
import service6 from "@/assets/services/service6.webp";

const services = [
  {
    icon: Package,
    title: "Ship Spare Parts Export",
    image: service1,
    description:
      "Genuine marine components sourced from Chittagong's ship-breaking yards, reconditioned and exported worldwide.",
  },
  {
    icon: Wrench,
    title: "Ship Repair & Maintenance",
    image: service2,
    description:
      "Expert afloat and shore-based repairs at Chittagong and Mongla ports with certified professionals.",
  },
  {
    icon: Ship,
    title: "Ship Stores & Supplies",
    image: service3,
    description:
      "Complete maritime supplies inventory supporting daily vessel operations and emergency requirements.",
  },
  {
    icon: Settings,
    title: "Engine Overhaul",
    image: service4,
    description:
      "Full main engine and auxiliary engine overhaul services by experienced marine engineers.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    image: service5,
    description:
      "Every part is inspected and overhauled by our marine engineers to ensure peak performance.",
  },
  {
    icon: Truck,
    title: "Global Logistics",
    image: service6,
    description:
      "Safe, timely delivery to your desired destination via first-class carriers worldwide.",
  },
];

const testimonials = [
  {
    name: "Captain Ahmed Hassan",
    role: "Fleet Operations Manager",
    text: "KANZA MARINE delivered the exact marine engine components we needed on schedule. Their attention to detail made our repair timeline possible.",
  },
  {
    name: "Rajesh Kumar",
    role: "Maintenance Director",
    text: "We've worked with KANZA MARINE multiple times. Their spare parts inventory is consistent, pricing is fair, and they understand urgency.",
  },
  {
    name: "Elena Sokolov",
    role: "Procurement Officer",
    text: "Quick turnaround on our urgent supply request. KANZA MARINE handled the export paperwork smoothly and shipment arrived ready to install.",
  },
];

const stats = [
  { value: 50, label: "Vessel Clients", suffix: "+" },
  { value: 100, label: "On-Time Delivery", suffix: "%" },
  { value: 500, label: "Parts in Stock", suffix: "+" },
  { value: 24, label: "Response Time", suffix: "hr" },
];

const Index = () => {
  // Smooth counters
  const [counters, setCounters] = useState(stats.map(() => 0));
  const statsRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!statsRef.current || hasAnimated.current) return;
      const top = statsRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        animateCounters();
        hasAnimated.current = true;
      }
    };

    const animateCounters = () => {
      const duration = 2000;
      const startTime = performance.now();

      const step = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCounters(
          stats.map((s) => Math.floor(s.value * progress))
        );
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
              Complete Maritime Solutions
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From spare parts to full ship repair — everything your vessel
              needs from one trusted partner in Chittagong.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description, image }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group rounded-2xl bg-card border border-border hover:shadow-marine hover:border-primary/30 transition-all duration-500 cursor-pointer"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-70 object-cover rounded-t-lg"
                />
                <div className="p-8">
                  <div className="flex gap-2 items-top">
                    <Icon className="h-7 w-7 text-marine-foreground" />
                    <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                      {title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-6 sm:py-16 md:py-20 gradient-marine text-white">
        <div className="container mx-auto px-4 sm:px-4 md:px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {stats.map(({ label, suffix }, i) => (
              <div
                key={label}
                className="bg-card/20 rounded-xl px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 flex flex-col items-center"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
                  {counters[i]}
                  {suffix}
                </p>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base opacity-80">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
              Trusted Worldwide
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-card"
              >
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-10">
              Contact us for fast quotes on spare parts, repair services, and
              supplies from Chittagong.
            </p>
          <div className="flex flex-wrap justify-center gap-4">
  <Link to="/contact">
    <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base flex items-center gap-2">
      Contact Us
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  </Link>

  <a
    href="https://wa.me/8801878144287"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      size="lg"
      className="px-8 py-6 text-base flex items-center gap-2
                 bg-white/10 backdrop-blur-md border border-white/20
                 text-white hover:bg-green-500 hover:border-green-500 hover:text-white
                 transition-all duration-300"
    >
      💬 WhatsApp
    </Button>
  </a>
</div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;