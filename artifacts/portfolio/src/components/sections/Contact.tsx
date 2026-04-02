import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">Let's build something <span className="text-primary">extraordinary.</span></h2>
            <p className="text-xl text-muted-foreground">
              Currently based in Noida, India. Open to global remote roles and relocation opportunities (UAE, UK, EU, Canada, US).
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.a 
              href="mailto:alok687.at@gmail.com"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card border border-border p-8 rounded-2xl flex items-center gap-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-medium">Email</div>
                <div className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">alok687.at@gmail.com</div>
              </div>
            </motion.a>

            <motion.a 
              href="tel:+919630348555"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl flex items-center gap-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-medium">Phone</div>
                <div className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">+91 9630348555</div>
              </div>
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-6"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} />
              <span>Noida, India (Global Remote / Relocation)</span>
            </div>
            
            <a 
              href="https://linkedin.com/in/alok-tiwari-3488a5187" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
