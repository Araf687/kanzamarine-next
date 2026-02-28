import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Wrench, Package, Ship, Settings, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";

const services = [
  { icon: Package, title: "Ship Spare Parts Export", description: "Genuine marine components sourced from Chittagong's ship-breaking yards, reconditioned and exported worldwide." },
  { icon: Wrench, title: "Ship Repair & Maintenance", description: "Expert afloat and shore-based repairs at Chittagong and Mongla ports with certified professionals." },
  { icon: Ship, title: "Ship Stores & Supplies", description: "Complete maritime supplies inventory supporting daily vessel operations and emergency requirements." },
  { icon: Settings, title: "Engine Overhaul", description: "Full main engine and auxiliary engine overhaul services by experienced marine engineers." },
  { icon: Shield, title: "Quality Assurance", description: "Every part is inspected and overhauled by our marine engineers to ensure peak performance." },
  { icon: Truck, title: "Global Logistics", description: "Safe, timely delivery to your desired destination via first-class carriers worldwide." },
];

const testimonials = [
  { name: "Captain Ahmed Hassan", role: "Fleet Operations Manager", text: "KANZA MARINE delivered the exact marine engine components we needed on schedule. Their attention to detail made our repair timeline possible." },
  { name: "Rajesh Kumar", role: "Maintenance Director", text: "We've worked with KANZA MARINE multiple times. Their spare parts inventory is consistent, pricing is fair, and they understand urgency." },
  { name: "Elena Sokolov", role: "Procurement Officer", text: "Quick turnaround on our urgent supply request. KANZA MARINE handled the export paperwork smoothly and shipment arrived ready to install." },
];

const stats = [
  { value: "50+", label: "Vessel Clients" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "500+", label: "Parts in Stock" },
  { value: "24hr", label: "Response Time" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Index = () => {
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
            <span className="text-sm font-medium text-accent uppercase tracking-widest">What We Offer</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
              Complete Maritime Solutions
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              From spare parts to full ship repair — everything your vessel needs from one trusted partner in Chittagong.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={item}
                className="group p-8 rounded-2xl bg-card border border-border hover:shadow-marine hover:border-primary/30 transition-all duration-500 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl gradient-marine flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 gradient-marine">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ value, label }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">{value}</p>
                <p className="text-primary-foreground/70 mt-2 text-sm">{label}</p>
              </motion.div>
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
            <span className="text-sm font-medium text-accent uppercase tracking-widest">Testimonials</span>
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
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
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
              Contact us for fast quotes on spare parts, repair services, and supplies from Chittagong.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="https://wa.me/8801878144287" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base">
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
