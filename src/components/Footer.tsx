import { Link } from "react-router-dom";
import { Anchor, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Anchor className="h-8 w-8" />
              <div>
                <h3 className="text-lg font-display font-bold">KANZA MARINE</h3>
                <p className="text-xs tracking-widest opacity-70">BANGLADESH</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Leading exporter of reusable marine machinery, spare parts, and professional ship repair services from Chittagong Port.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: "/products", label: "Products" },
                { to: "/services", label: "Services" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2">
                    <ExternalLink className="h-3 w-3" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Ship Spare Parts Export</li>
              <li>Marine Engine Components</li>
              <li>Ship Repair & Maintenance</li>
              <li>Ship Stores & Supplies</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm opacity-80">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <a href="tel:+8801878144287" className="hover:opacity-100">+88 01878 144287</a>
              </li>
              <li className="flex items-start gap-3 text-sm opacity-80">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <a href="mailto:kanzamarineservice@gmail.com" className="hover:opacity-100">kanzamarineservice@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm opacity-80">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>3153, Kerani bari by lane, Agrabad badamtoli, Chattogram, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Kanza Marine Bangladesh. All rights reserved.
          </p>
          <a
            href="https://wa.me/8801878144287"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent/20 hover:bg-accent/30 px-4 py-2 rounded-full text-sm transition-colors"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
