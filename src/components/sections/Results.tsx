import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 300, suffix: "% ↑", prefix: "", label: "Revenue Growth" },
  { value: 35, suffix: "% ↓", prefix: "", label: "Lower Cost per Conversion" },
  { value: 4.1, suffix: "x ↑", prefix: "", label: "Average ROAS", decimals: 1 },
  { value: 2.7, suffix: "x ↑", prefix: "", label: "Tracking Accuracy", decimals: 1 },
];

const Counter = ({ to, decimals = 0 }: { to: number; decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => v.toFixed(decimals));

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(mv, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
    return ctrl.stop;
  }, [inView, to, mv]);

  return <motion.span ref={ref}>{text}</motion.span>;
};

export const Results = () => {
  return (
    <section id="results" className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="bg-card rounded-2xl p-4 sm:p-6 ring-1 ring-border shadow-card"
          >
            <p className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em]">
              {s.prefix}
              <Counter to={s.value} decimals={s.decimals ?? 0} />
              <span className="text-primary">{s.suffix}</span>
            </p>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};