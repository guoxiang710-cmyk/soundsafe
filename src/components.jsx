import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-heading ${align === "center" ? "center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}

export function TechCard({ children, className = "" }) {
  return <div className={`tech-card ${className}`}>{children}</div>;
}

export function FlowArrow() {
  return (
    <div className="flow-arrow" aria-hidden="true">
      <span />
      <ArrowRight size={16} />
    </div>
  );
}
