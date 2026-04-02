import { motion } from "framer-motion";

const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "10+", label: "Apps Shipped" },
  { value: "800K", label: "Records Synced" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Architecting solutions at <span className="text-primary">scale.</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am a results-driven Full Stack Developer specializing in cross-platform mobile applications (Ionic + Angular) and enterprise-grade web platforms (WordPress/WooCommerce, PHP).
              </p>
              <p>
                My work spans across e-commerce, logistics, fintech, and entertainment. From leading automation systems that sync hundreds of thousands of products, to resolving critical regressions for India's largest online poker platform, I own complex projects end-to-end.
              </p>
              <p>
                I am known for clean architecture, relentless performance optimization, and an unwavering commitment to shipping robust, production-ready code.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card border border-border p-8 rounded-2xl flex flex-col justify-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-4xl md:text-5xl font-bold font-display text-foreground mb-2 group-hover:text-primary transition-colors">
                  {stat.value}
                </span>
                <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
