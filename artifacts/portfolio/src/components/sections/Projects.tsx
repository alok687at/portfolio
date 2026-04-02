import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Adda52 Poker",
    client: "InnovationM",
    description: "Feature module development and bug-fixing for India's leading real-money poker platform. Resolved critical UI/UX regressions and integrated real-money flow.",
    image: "/images/project-poker.png",
    tags: ["Ionic", "Angular", "Fintech"]
  },
  {
    title: "House of Soap",
    client: "WordPress Multisite",
    description: "Multi-brand e-commerce solution with centralized product management. Built automation system syncing 800,000+ SKUs, reducing manual effort by 90%.",
    image: "/images/project-ecommerce.png",
    tags: ["WordPress", "PHP", "Automation"]
  },
  {
    title: "DG Cinemas Streaming",
    client: "Initialize Technologies",
    description: "Hybrid mobile app featuring HLS video streaming, secure user authentication, and seamless in-app purchases.",
    image: "/images/project-streaming.png",
    tags: ["Ionic", "Cordova", "Video"]
  },
  {
    title: "New Age Transport",
    client: "Mobile Programming LLC",
    description: "Cross-platform Ionic application designed for real-time freight tracking, logistics management, and driver coordination.",
    image: "/images/project-logistics.png",
    tags: ["Ionic", "Logistics", "Maps API"]
  },
  {
    title: "Chemicals Direct",
    client: "WooCommerce",
    description: "Specialized B2B store featuring custom product configuration, bulk ordering workflows, and dynamic PDF quote generation.",
    image: "/images/project-b2b.png",
    tags: ["WooCommerce", "B2B", "PHP"]
  },
  {
    title: "Yorlab eCommerce",
    client: "Full-Stack Build",
    description: "Complete WooCommerce build with custom checkout flows, advanced inventory management, and real-time REST API synchronization.",
    image: "/images/project-ecommerce.png", // reusing one image or we could have generated another
    tags: ["WooCommerce", "REST API", "Custom Plugins"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Selected Work</h2>
            <p className="text-muted-foreground text-lg max-w-xl">A showcase of complex systems, from real-money gaming to massive-scale e-commerce architectures.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors flex flex-col h-full"
            >
              <div className="relative h-48 md:h-60 overflow-hidden">
                <div className="absolute inset-0 bg-background/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <div className="text-xs font-bold tracking-widest text-primary uppercase mb-2">{project.client}</div>
                  <h3 className="text-xl font-bold text-foreground font-display group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 bg-secondary rounded-md text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
