import { motion } from "framer-motion";
import { Wrench, Package, Ship, Settings, Zap, Thermometer, PaintBucket, Anchor } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const sparePartsFeatures = [
  { icon: Settings, title: "Engine Parts", desc: "Crankshafts, cylinder liners, heads, pistons for MAN B&W, Wartsila, Yanmar, Daihatsu, Sulzer" },
  { icon: Package, title: "Machinery", desc: "Diesel generators, oil separators, air compressors, turbochargers — fully reconditioned" },
  { icon: Anchor, title: "Deck & Navigation", desc: "Anchors, chains, winches, cranes, radar, GPS, and communication equipment" },
  { icon: Ship, title: "Systems", desc: "Hydraulic pumps/motors, fresh water generators, automation equipment" },
];

const repairServices = [
  { icon: Wrench, title: "Structural & Steel Work", desc: "Hull and tank steel plate renewal, post-accident rebuilding, professional welding" },
  { icon: Settings, title: "Mechanical & Hydraulic", desc: "Hydraulic pump/motor repair, crane troubleshooting, pipe section replacement" },
  { icon: Zap, title: "Electrical & Electronics", desc: "Electric motor rewinding, radar and gyro system maintenance" },
  { icon: Thermometer, title: "HVAC & Specialist", desc: "Refrigeration and HVAC installations and repairs, galvanization services" },
  { icon: PaintBucket, title: "Maintenance & Finishing", desc: "Sandblasting, hydro-blasting, cleaning, and marine painting" },
];

const shipStores = [
  "Provision & Bonded Stores", "Deck & Engine Stores", "Safety Equipment", "Cabin Stores & Linen",
  "Paints & Chemicals", "Electrical Stores", "Mooring Ropes & Wires", "Medical Supplies",
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Complete Maritime Services
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From spare parts sourcing to full ship repair — professional maritime services from Chittagong Port.
          </p>
        </motion.div>

        <Tabs defaultValue="spare-parts" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-10">
            <TabsTrigger value="spare-parts" className="data-[state=active]:gradient-marine data-[state=active]:text-primary-foreground px-6 py-3 rounded-full">
              Spare Parts Export
            </TabsTrigger>
            <TabsTrigger value="repairs" className="data-[state=active]:gradient-marine data-[state=active]:text-primary-foreground px-6 py-3 rounded-full">
              Ship Repair
            </TabsTrigger>
            <TabsTrigger value="stores" className="data-[state=active]:gradient-marine data-[state=active]:text-primary-foreground px-6 py-3 rounded-full">
              Ship Stores
            </TabsTrigger>
          </TabsList>

          <TabsContent value="spare-parts">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sparePartsFeatures.map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="p-8 bg-card rounded-2xl border border-border hover:shadow-marine hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-xl gradient-marine flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-muted/50 rounded-2xl">
              <h4 className="font-display font-semibold text-foreground mb-3">Brands We Cover</h4>
              <p className="text-sm text-muted-foreground">
                MAN B&W • Wartsila • Yanmar • Daihatsu • Mitsubishi • Sulzer • Hanshin • Mak • Cummins • Caterpillar • Alfa Laval • Westfalia • Nabtesco • Kawasaki
              </p>
            </div>
          </TabsContent>

          <TabsContent value="repairs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repairServices.map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={item} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="p-8 bg-card rounded-2xl border border-border hover:shadow-marine hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 rounded-xl gradient-marine flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stores">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {shipStores.map((store, i) => (
                <motion.div key={store} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="p-5 bg-card rounded-xl border border-border text-center hover:shadow-card transition-shadow">
                  <p className="text-sm font-medium text-foreground">{store}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;
