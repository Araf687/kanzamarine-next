import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(30),
  vessel: z.string().max(100).optional(),
  service: z.string().min(1, "Select a service"),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+88 01878 144287", href: "tel:+8801878144287" },
  { icon: Mail, label: "Email", value: "kanzamarineservice@gmail.com", href: "mailto:kanzamarineservice@gmail.com" },
  { icon: MapPin, label: "Address", value: "3153, Kerani bari by lane, Agrabad badamtoli, Chattogram, Bangladesh" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", vessel: "", service: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach(issue => {
        fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    // Simulate send
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting Kanza Marine. We'll respond within 24 hours.",
    });
    setForm({ name: "", email: "", phone: "", vessel: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold mt-3 text-foreground">Get in Touch</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a question or need a quote? Reach out and we'll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2 space-y-6">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex gap-4 p-5 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 gradient-marine rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a href={href} className="text-foreground font-medium text-sm hover:text-primary transition-colors">{value}</a>
                  ) : (
                    <p className="text-foreground font-medium text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/8801878144287"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 bg-accent/10 rounded-xl border border-accent/20 hover:bg-accent/20 transition-colors"
            >
              <MessageCircle className="h-6 w-6 text-accent" />
              <div>
                <p className="font-semibold text-foreground">WhatsApp Us</p>
                <p className="text-sm text-muted-foreground">Quick response on WhatsApp</p>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card p-8 rounded-2xl border border-border shadow-card space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                <Input value={form.name} onChange={e => handleChange("name", e.target.value)} placeholder="Your name" />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                <Input type="email" value={form.email} onChange={e => handleChange("email", e.target.value)} placeholder="your@email.com" />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone *</label>
                <Input value={form.phone} onChange={e => handleChange("phone", e.target.value)} placeholder="+880..." />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Vessel Name</label>
                <Input value={form.vessel} onChange={e => handleChange("vessel", e.target.value)} placeholder="MV Example" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Service Required *</label>
              <Select value={form.service} onValueChange={v => handleChange("service", v)}>
                <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="spare-parts">Ship Spare Parts</SelectItem>
                  <SelectItem value="repair">Ship Repair & Maintenance</SelectItem>
                  <SelectItem value="stores">Ship Stores & Supplies</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Message *</label>
              <Textarea value={form.message} onChange={e => handleChange("message", e.target.value)} placeholder="Tell us about your requirements..." rows={5} />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>

            <Button type="submit" disabled={sending} className="w-full gradient-marine text-primary-foreground hover:opacity-90 py-6 text-base">
              {sending ? "Sending..." : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
