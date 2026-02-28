import { motion } from "framer-motion";
import { Award, Users, Globe, CheckCircle, Anchor } from "lucide-react";

const values = [
  { icon: Award, title: "Quality Assurance", desc: "Every part inspected and tested by our marine engineers before shipment." },
  { icon: Users, title: "Expert Team", desc: "Class-certified welders, fitters, mechanics, and technicians with decades of experience." },
  { icon: Globe, title: "Global Reach", desc: "Serving vessel operators worldwide from our base in Chittagong, Bangladesh." },
  { icon: CheckCircle, title: "Reliable Service", desc: "On-time delivery commitment with same-day response to all inquiries." },
];

const certifications = [
  "ISO 9001:2015 Quality Management",
  "SOLAS Approved Safety Equipment",
  "Classification Society Certified Welders",
  "OEM Authorized Parts Distributor",
];

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">About Us</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Kanza Marine Bangladesh
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A leading exporter of reusable marine machinery and spare parts from Chittagong — one of the world's largest ship-breaking hubs.
          </p>
        </motion.div>

        {/* Story */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20">
          <div className="bg-card p-10 rounded-3xl border border-border shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <Anchor className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-display font-bold text-foreground">Our Story</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with the ambition of being a "one-point" solution for marine requirements globally, Kanza Marine has built a reputation as a trusted service provider driven by a commitment to client satisfaction.
              </p>
              <p>
                Based in Chittagong — home to one of the world's largest ship-breaking yards — we leverage this strategic location to provide international clients with reliable, cost-effective marine solutions. Our experienced professional team carefully selects and recovers machinery from the ship-breaking yards, reconditioning each item in our dedicated workshop.
              </p>
              <p>
                Our team consists of highly qualified professionals capable of delivering results under tight deadlines. With a regularly updated stock-list and a maintenance department backed by a massive inventory, we are ready to serve your vessel's needs anywhere in the world.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-marine transition-shadow">
              <div className="w-14 h-14 gradient-marine rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="gradient-marine rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-display font-bold text-primary-foreground mb-8">Certifications & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map(cert => (
              <div key={cert} className="flex items-center gap-3 bg-primary-foreground/10 rounded-xl p-4">
                <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                <p className="text-primary-foreground text-sm text-left">{cert}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
