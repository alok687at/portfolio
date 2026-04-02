import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "IDS Logic Pvt. Ltd.",
    location: "Noida, India",
    period: "May 2024 – Present",
    highlights: [
      "Led automation system that synced 800,000+ product records on WordPress, reducing manual effort by ~90%",
      "Architected WordPress Multisite platform serving multiple brand storefronts",
      "Built end-to-end Sales Management mobile app using Ionic + Angular",
      "Optimized performance, cutting page load times by 40%"
    ]
  },
  {
    role: "Ionic + Angular Developer",
    company: "InnovationM (Contract)",
    location: "Noida, India",
    period: "Aug 2023 – Jan 2024",
    highlights: [
      "Contributed to Adda52 Poker — India's largest online gaming platform",
      "Resolved 100+ bugs including critical UI/UX regressions; integrated payment and real-money flow"
    ]
  },
  {
    role: "Ionic Developer",
    company: "Mobile Programming LLC (Contract)",
    location: "Chennai, India",
    period: "Jan 2023 – Mar 2023",
    highlights: [
      "Developed and maintained New Age Transport logistics application",
      "Collaborated with US-based teams in Agile environment across time zones"
    ]
  },
  {
    role: "Hybrid Mobile Developer",
    company: "Shree Ram Infosystem Pvt. Ltd. (Contract)",
    location: "India",
    period: "Jul 2022 – Dec 2022",
    highlights: [
      "Built Smart City and Nirbhaya public-safety mobile applications",
      "Performed QA testing and API validation across Android and iOS devices"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Rewebso Tech",
    location: "India",
    period: "Aug 2019 – Jul 2022",
    highlights: [
      "Developed and shipped 10+ Android & iOS apps using Ionic + Angular",
      "Built admin dashboards with PHP & MySQL; created WooCommerce stores with custom plugins",
      "Maintained 98%+ client satisfaction rate across projects"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Initialize Technologies",
    location: "India",
    period: "Aug 2018 – Jul 2019",
    highlights: [
      "Developed Android video streaming app using Ionic + Angular + Cordova",
      "Built PHP/MySQL admin portals; delivered responsive websites and hybrid apps"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg">A track record of building and scaling production systems.</p>
        </motion.div>

        <div className="relative border-l border-border/50 ml-4 md:ml-0 md:pl-8 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[41px] md:-left-[40px] top-1.5 border-4 border-background shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-foreground font-display">{exp.role}</h3>
                  <div className="text-lg text-primary font-medium mt-1">{exp.company}</div>
                </div>
                <div className="text-muted-foreground text-sm flex flex-col md:text-right">
                  <span className="font-medium text-foreground">{exp.period}</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              <ul className="space-y-2 mt-4">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="text-muted-foreground flex gap-3">
                    <span className="text-primary mt-1.5 opacity-50">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
