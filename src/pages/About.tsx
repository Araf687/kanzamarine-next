import { motion } from "framer-motion";
import { Award, Users, Globe, CheckCircle, Anchor } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality Assurance",
    desc: "Every part inspected and tested by our marine engineers before shipment.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Class-certified welders, fitters, mechanics, and technicians with decades of experience.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Serving vessel operators worldwide from our base in Chittagong, Bangladesh.",
  },
  {
    icon: CheckCircle,
    title: "Reliable Service",
    desc: "On-time delivery commitment with same-day response to all inquiries.",
  },
];

const certifications = [
  "ISO 9001:2015 Quality Management",
  "SOLAS Approved Safety Equipment",
  "Classification Society Certified Welders",
  "OEM Authorized Parts Distributor",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-[65px]">

      {/* HERO IMAGE */}
      <div className="relative w-full h-[600px] overflow-hidden">

        <img
          src="/about/about.webp"
          alt="Shipyard"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* hero text */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Kanza Marine Bangladesh
            </h1>

            <p className="text-lg text-white/90">
              A leading exporter of reusable marine machinery and spare parts
              from Chittagong — one of the world's largest ship-breaking hubs.
            </p>
          </motion.div>

        </div>
      </div>

      {/* OUR STORY */}
      <div className="container mx-auto px-4 py-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >


          <div className="flex items-top justify-center gap-3 mb-8">
            <Anchor className="h-8 w-8 text-primary font-bold" />
            <h2 className="text-3xl font-display font-bold text-foreground">
              Our Story
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-justify">

            <p>
              Founded with the ambition of being a "one-point" solution for marine
              requirements globally, Kanza Marine has built a reputation as a
              trusted service provider driven by a commitment to client satisfaction.
            </p>

            <p>
              Based in Chittagong — home to one of the world's largest ship-breaking
              yards — we leverage this strategic location to provide international
              clients with reliable, cost-effective marine solutions.
            </p>

            <p>
              Our team consists of highly qualified professionals capable of
              delivering results under tight deadlines. With a regularly updated
              stock-list and a maintenance department backed by a massive
              inventory, we are ready to serve your vessel's needs anywhere in
              the world.
            </p>

          </div>

        </motion.div>

      </div>

      {/* VALUES */}
      <div className="container mx-auto px-4 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {values.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow"
            >

              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="font-semibold text-foreground mb-2">
                {title}
              </h3>

              <p className="text-muted-foreground text-sm">
                {desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

      {/* CERTIFICATIONS */}
      <div className="container mx-auto px-4 pb-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-10 text-center"
        >

          <h2 className="text-3xl font-bold text-white mb-8">
            Certifications & Standards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-3 bg-white/10 rounded-xl p-4"
              >

                <CheckCircle className="h-5 w-5 text-green-400 shrink-0" />

                <p className="text-white text-sm text-left">
                  {cert}
                </p>

              </div>
            ))}

          </div>

        </motion.div>

      </div>

    </div>
  );
};

export default About;