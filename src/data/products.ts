export interface Product {
  id: string;
  name: string;
  category: "engine" | "deck" | "electrical" | "safety" | "machinery" | "systems";
  description: string;
  badge?: string;
  inStock: boolean;
  brands?: string[];
  image_url: string;
}

export const products: Product[] = [
  { id: "1", name: "Marine Pressure Control Unit", category: "engine", description: "Engine monitoring system with integrated pressure gauges and filtration unit.", inStock: true, image_url: "p1.jpg" },
  { id: "2", name: "Silent Diesel Generator", category: "machinery", description: "Enclosed diesel generator set with soundproofing for marine and industrial use.", inStock: true, brands: ["Cummins", "Perkins"], image_url: "p2.jpg" },
  { id: "3", name: "Industrial Air Compressor", category: "machinery", description: "Heavy-duty dual compressor units for reliable compressed air supply.", inStock: true, image_url: "p3.jpg" },
  { id: "4", name: "Engine Push Rods", category: "engine", description: "High-tensile steel push rods for marine diesel engine valve timing systems.", inStock: true, image_url: "p4.jpg" },
  { id: "5", name: "Large Bore Engine Pistons", category: "engine", description: "Precision-machined pistons for main propulsion engines, fully inspected.", badge: "Popular", inStock: true, image_url: "p5.jpg" },
  { id: "6", name: "Main Bearing Caps", category: "engine", description: "Durable bearing caps for crankshaft support in heavy-duty diesel engines.", inStock: true, image_url: "p6.jpg" },
  { id: "7", name: "Daihatsu Camshaft Assembly", category: "engine", description: "Genuine Daihatsu fuel injection and camshaft components.", inStock: true, brands: ["Daihatsu"], image_url: "p7.jpg" },
  { id: "8", name: "Engine Room Control Panel", category: "systems", description: "Analog gauge board for monitoring temperature and pressure parameters.", inStock: true, image_url: "p8.jpg" },
  { id: "9", name: "Auxiliary Diesel Engine", category: "engine", description: "Complete auxiliary engine unit for power generation and ship services.", inStock: true, image_url: "p9.jpg" },
  { id: "10", name: "Engine Component Lifting", category: "machinery", description: "Rigging and hoisting of large engine parts for maintenance and installation.", inStock: true, image_url: "p10.jpg" },
  { id: "11", name: "Cylinder Liner Set", category: "engine", description: "Replacement cylinder liners with anti-corrosive coating for longevity.", inStock: true, image_url: "p11.jpg" },
  { id: "12", name: "Marine Crew Operations", category: "deck", description: "Professional deck crew managing shipboard operations and maintenance.", inStock: true, image_url: "p12.jpg" },
  { id: "13", name: "Structural Steel Beam", category: "deck", description: "Heavy-duty lifting of structural beams for ship repair or construction.", inStock: true, image_url: "p13.jpg" },
  { id: "14", name: "Pneumatic Ship Fenders", category: "deck", description: "Large Yokohama-style fenders for ship-to-ship and ship-to-quay protection.", inStock: true, image_url: "p14.webp" },
  { id: "15", name: "Propulsion Shaft Section", category: "engine", description: "Heavy-duty industrial shaft for marine propulsion or mechanical power transfer.", inStock: true, image_url: "p15.jpg" },
  { id: "16", name: "Cylinder Head Top View", category: "engine", description: "In-situ inspection of engine cylinder head and valve assembly.", inStock: true, image_url: "p16.jpg" },
  { id: "17", name: "Connecting Rods", category: "engine", description: "High-grade connecting rods for auxiliary and main marine engines.", inStock: true, image_url: "p17.jpg" },
  { id: "18", name: "Engine Cylinder Liners", category: "engine", description: "Pair of reconditioned cylinder liners ready for installation.", inStock: true, image_url: "p18.jpg" },
  { id: "19", name: "Bridge Navigation Display", category: "electrical", description: "Electronic navigation and bridge monitoring interface for vessel safety.", inStock: true, brands: ["Martek"], image_url: "p19.jpg" },
  { id: "20", name: "Industrial Power Generator", category: "machinery", description: "Large-scale diesel generator with cooling radiator for backup power.", inStock: true, image_url: "p20.jpg" },
  { id: "21", name: "Winch Gearbox Assembly", category: "deck", description: "Mechanical gearbox unit for deck machinery and mooring winches.", inStock: true, image_url: "p21.jpg" },
  { id: "22", name: "Exhaust Valve Housing", category: "engine", description: "Reconditioned exhaust valve cages for large 2-stroke engines.", inStock: true, image_url: "p22.jpg" },
  { id: "23", name: "Centrifugal Pump Unit", category: "systems", description: "High-flow centrifugal pump for ballast or cooling water systems.", inStock: true, image_url: "p23.jpg" },
  { id: "24", name: "Heat Exchanger Plates", category: "systems", description: "Titanium plate heat exchanger for fresh water cooling systems.", inStock: true, brands: ["Alfa Laval"], image_url: "p24.jpg" },
  { id: "25", name: "Mooring Winch Drum", category: "deck", description: "Heavy-duty hydraulic mooring winch for secure vessel berthing.", inStock: true, image_url: "p25.jpg" },
  { id: "26", name: "Cylinder Head Cover", category: "engine", description: "Protective covers for engine cylinder heads during maintenance.", inStock: true, image_url: "p26.jpg" },
  { id: "27", name: "Governor Control Unit", category: "electrical", description: "Electronic engine governor for precise RPM and load control.", inStock: true, image_url: "p27.jpg" },
  { id: "28", name: "Fuel Oil Heater", category: "systems", description: "Industrial heating unit for heavy fuel oil (HFO) viscosity control.", inStock: true, image_url: "p28.jpg" },
  { id: "29", name: "Starting Air Receiver", category: "machinery", description: "Pressure vessel for storing compressed starting air for main engines.", inStock: true, image_url: "p29.jpg" },
  { id: "30", name: "Anchor Windlass Unit", category: "deck", description: "Complete anchor handling system with electric motor drive.", badge: "Best Seller", inStock: true, image_url: "p30.jpg" },
  { id: "31", name: "Oil Mist Detector", category: "safety", description: "Safety monitoring system for engine crankcase oil mist detection.", inStock: true, brands: ["Graviner"], image_url: "p31.jpg" },
  { id: "32", name: "Oily Water Separator", category: "systems", description: "MARPOL compliant oily water separator for bilge discharge.", inStock: true, image_url: "p32.jpg" },
  { id: "33", name: "Exhaust Gas Turbocharger", category: "engine", description: "High-performance turbocharger for increased engine efficiency.", badge: "Premium", inStock: true, brands: ["ABB"], image_url: "p33.jpg" },
  { id: "34", name: "Crankshaft Deflection Gauge", category: "engine", description: "Precision tool for measuring crankshaft alignment and deflection.", inStock: true, image_url: "p34.jpg" },
  { id: "35", name: "Hydraulic Power Pack", category: "systems", description: "Integrated hydraulic unit for powering deck cranes and winches.", inStock: true, image_url: "p35.jpg" },
  { id: "36", name: "Engine Water Pump", category: "systems", description: "Fresh water circulation pump for engine cooling jackets.", inStock: true, image_url: "p36.jpg" },
  { id: "37", name: "Fuel Injection Pump", category: "engine", description: "High-pressure fuel pump for precise fuel atomization.", inStock: true, image_url: "p37.jpg" },
  { id: "38", name: "Exhaust Manifold Section", category: "engine", description: "Insulated exhaust manifold for marine diesel engines.", inStock: true, image_url: "p38.jpg" },
  { id: "39", name: "Lube Oil Filter Unit", category: "systems", description: "Duplex filter system for continuous lubrication oil cleaning.", inStock: true, image_url: "p39.jpg" },
  { id: "40", name: "Cargo Crane Hook", category: "deck", description: "Heavy-lift crane hook and block assembly for cargo operations.", inStock: true, image_url: "p40.jpg" },
  { id: "41", name: "Emergency Fire Pump", category: "safety", description: "Portable diesel-driven emergency fire pump for vessel safety.", badge: "Essential", inStock: true, image_url: "p41.jpg" },
  { id: "42", name: "Ballast Water Pump", category: "systems", description: "High-capacity pump for ballast water management and transfer.", inStock: true, image_url: "p42.jpg" },
  { id: "43", name: "Electrical Distribution Board", category: "electrical", description: "Main switchboard for controlling shipboard electrical power.", inStock: true, image_url: "p43.jpg" },
  { id: "44", name: "Air Starter Motor", category: "engine", description: "Pneumatic starter motor for auxiliary and main engines.", inStock: true, image_url: "p44.jpg" },
  { id: "45", name: "Deck Hatch Cover", category: "deck", description: "Watertight deck hatch for access to storage or engine compartments.", inStock: true, image_url: "p45.jpg" },
  { id: "46", name: "Propeller Shaft Seal", category: "systems", description: "Stern tube seal assembly to prevent water ingress.", inStock: true, image_url: "p46.jpg" },
  { id: "47", name: "Tachometer Control System", category: "electrical", description: "Digital engine speed and performance monitoring unit.", inStock: true, image_url: "p47.jpg" },
  { id: "48", name: "Wrapped Engine Block", category: "engine", description: "Main engine block preserved and wrapped for long-term storage or shipping.", inStock: true, image_url: "p48.jpg" },
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
