import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingDown, Droplets, Search, Wallet } from "lucide-react";

const metrics = [
  {
    icon: TrendingDown,
    value: 30,
    suffix: "%",
    label: "Reduction in Unlicensed Water Abstraction",
    description: "In pilot regions through compliance monitoring",
    color: "text-red-500 dark:text-red-400",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Droplets,
    value: 20,
    suffix: "%",
    label: "Improvement in Water-Use Efficiency",
    description: "Through AI-powered farmer advisories",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Search,
    value: 100,
    suffix: "%",
    label: "High-Risk License Coverage",
    description: "Annual remote auditing through EO technology",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    icon: Wallet,
    value: 10000,
    prefix: "ZAR ",
    label: "Cost per Manual Audit",
    description: "Reduced through automated remote sensing",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
];

function AnimatedCounter({ 
  value, 
  prefix = "", 
  suffix = "",
  duration = 2000,
  isInView 
}: { 
  value: number; 
  prefix?: string;
  suffix?: string;
  duration?: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (value - startValue) * easeOutQuart);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export function ImpactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="py-20 lg:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-impact-title">
            Impact Goals
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-impact-description">
            Measurable outcomes driving sustainable water governance across South Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-visible"
            >
              <div className="bg-card rounded-xl p-6 border border-card-border h-full hover-elevate" data-testid={`card-metric-${index}`}>
                <div className={`w-12 h-12 rounded-xl ${metric.bgColor} flex items-center justify-center mb-4`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <div className={`text-4xl lg:text-5xl font-bold mb-2 ${metric.color}`} data-testid={`text-metric-value-${index}`}>
                  <AnimatedCounter
                    value={metric.value}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                    isInView={isInView}
                    duration={2000 + index * 200}
                  />
                </div>
                <h3 className="font-semibold mb-1" data-testid={`text-metric-label-${index}`}>{metric.label}</h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-metric-desc-${index}`}>{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-4 bg-card rounded-xl p-6 border border-card-border flex-wrap justify-center" data-testid="card-capacity-building">
            <div className="text-left">
              <h3 className="font-semibold text-lg mb-1" data-testid="text-capacity-title">Capacity Building</h3>
              <p className="text-muted-foreground" data-testid="text-capacity-desc">
                Training DWS officials and supporting MSc students through an EO/AI Training Toolkit
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
