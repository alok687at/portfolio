import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Mobile",
    skills: ["Ionic Framework", "Angular", "TypeScript", "Cordova", "Capacitor", "iOS & Android"]
  },
  {
    title: "Frontend",
    skills: ["Angular 2–17", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "jQuery", "Bootstrap", "RxJS"]
  },
  {
    title: "Backend",
    skills: ["PHP", "WordPress", "WooCommerce", "REST API Design", "MySQL", "Plugin Development"]
  },
  {
    title: "Integrations & Tools",
    skills: ["Stripe", "Razorpay", "Push Notifications", "Google Maps API", "Git", "Postman", "Agile/Scrum"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30 border-y border-border/50">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Technical Arsenal</h2>
          <p className="text-muted-foreground text-lg">A comprehensive toolkit forged through years of shipping cross-platform products.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-card border border-border p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold font-display mb-6 text-foreground pb-4 border-b border-border">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx * 0.1) + (sIdx * 0.05) }}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-md border border-border/50"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
