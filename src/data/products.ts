export interface Product {
  id: string;
  name: string;
  category: "engine" | "deck" | "electrical" | "safety" | "machinery" | "systems";
  description: string;
  badge?: string;
  inStock: boolean;
  brands?: string[];
}

export const products: Product[] = [
  { id: "1", name: "Main Engine Crankshaft", category: "engine", description: "Reconditioned crankshafts for MAN B&W, Wartsila & Sulzer main engines. Fully inspected.", badge: "Popular", inStock: true, brands: ["MAN B&W", "Wartsila", "Sulzer"] },
  { id: "2", name: "Cylinder Liner", category: "engine", description: "Precision-machined cylinder liners for auxiliary and main engines. OEM compatible.", inStock: true, brands: ["MAN B&W", "Yanmar"] },
  { id: "3", name: "Cylinder Head Assembly", category: "engine", description: "Complete cylinder head assemblies with valves and springs. Pressure tested.", badge: "Best Seller", inStock: true, brands: ["Daihatsu", "Mitsubishi"] },
  { id: "4", name: "Piston & Piston Rings", category: "engine", description: "High-quality pistons and ring sets for marine diesel engines.", inStock: true, brands: ["MAN B&W", "Wartsila"] },
  { id: "5", name: "Turbocharger", category: "engine", description: "Reconditioned turbochargers for all major marine engine brands. Balanced and tested.", badge: "Premium", inStock: true, brands: ["ABB", "MHI", "Napier"] },
  { id: "6", name: "Diesel Generator Set", category: "machinery", description: "Ship auxiliary diesel generators. Various KVA ratings available.", inStock: true, brands: ["Daihatsu", "Yanmar", "Cummins"] },
  { id: "7", name: "Oil Separator / Purifier", category: "machinery", description: "Alfa Laval and Westfalia oil separators. Fully overhauled with new seals.", inStock: true, brands: ["Alfa Laval", "Westfalia"] },
  { id: "8", name: "Air Compressor", category: "machinery", description: "Starting air and service air compressors. Various capacities available.", inStock: true, brands: ["Hamworthy", "Hatlapa", "Sperre"] },
  { id: "9", name: "Anchor & Chain", category: "deck", description: "Ship anchors and anchor chain cables. All sizes and certifications.", badge: "In Demand", inStock: true },
  { id: "10", name: "Deck Winch", category: "deck", description: "Mooring winches, windlass units and deck cranes. Electric and hydraulic.", inStock: true },
  { id: "11", name: "Navigation Equipment", category: "electrical", description: "Radar systems, GPS units, AIS transponders, and GMDSS equipment.", inStock: true, brands: ["Furuno", "JRC"] },
  { id: "12", name: "Electric Motor", category: "electrical", description: "Marine-grade electric motors. Rewinding and maintenance services available.", inStock: true },
  { id: "13", name: "Hydraulic Pump & Motor", category: "systems", description: "Ship hydraulic pumps and motors. Rexroth, Vickers, and Kawasaki compatible.", inStock: true, brands: ["Rexroth", "Kawasaki"] },
  { id: "14", name: "Fresh Water Generator", category: "systems", description: "Plate-type and shell-tube fresh water generators for vessel use.", inStock: false, brands: ["Alfa Laval", "Nirex"] },
  { id: "15", name: "Life Raft & Safety Gear", category: "safety", description: "SOLAS-approved life rafts, life jackets, fire extinguishers, and safety equipment.", badge: "Essential", inStock: true },
  { id: "16", name: "Fire Fighting Equipment", category: "safety", description: "Fire hoses, nozzles, portable extinguishers, and fixed fire suppression systems.", inStock: true },
];

export const categories = [
  { value: "all", label: "All Products" },
  { value: "engine", label: "Engine Parts" },
  { value: "machinery", label: "Machinery" },
  { value: "deck", label: "Deck Equipment" },
  { value: "electrical", label: "Electrical" },
  { value: "systems", label: "Systems" },
  { value: "safety", label: "Safety" },
];
