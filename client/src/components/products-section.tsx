import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Shield, 
  Smartphone, 
  Code, 
  CheckCircle, 
  Wifi, 
  MessageSquare,
  GitBranch,
  FileCode
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    icon: Shield,
    title: "IRIS-AI Compliance Dashboard",
    description: "A tool for regulators (e.g., Department of Water and Sanitation) to monitor water use at a catchment scale.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    technology: "Sentinel-2 + Sentinel-1 SAR with CNN-LSTM models",
    features: [
      "All-weather, real-time irrigation monitoring at 10–30m resolution",
      "Water use classification: Red (Unlicensed), Amber (Over-licensed), Green (Compliant)",
      "Prioritised audit recommendations",
    ],
    impact: "30% reduction in unlicensed water abstraction",
    impactColor: "bg-red-500/10 text-red-600 dark:text-red-400",
  },
  {
    icon: Smartphone,
    title: "Farmer Advisory Service (FAS)",
    description: "A decision support system for commercial and smallholder farmers.",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    borderColor: "border-chart-2/20",
    technology: "Fine-tuned LLMs (GPT-4) trained on regional guidelines",
    features: [
      "Hyper-localised irrigation advisories",
      "SMS, Voice, or Push Notification delivery",
      "Mobile-optimised dashboard for low-bandwidth (≤2G) rural networks",
    ],
    impact: "20% improvement in water-use efficiency",
    impactColor: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    icon: Code,
    title: "Open-Source Code Repository",
    description: "Enabling global replication of the ML workflows for irrigation mapping and anomaly detection.",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    borderColor: "border-chart-3/20",
    technology: "MIT / CC BY-NC licensed codebases",
    features: [
      "Complete ML workflows for irrigation mapping",
      "Anomaly detection algorithms",
      "Documentation and training materials",
    ],
    impact: "Global accessibility & replicability",
    impactColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
];

export function ProductsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-20 lg:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-products-title">
            Key Innovation & Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-products-description">
            The project delivers three core technological solutions designed to transform 
            water governance in South Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="h-full"
            >
              <Card className={`h-full overflow-visible hover-elevate border-2 ${product.borderColor}`} data-testid={`card-product-${index}`}>
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-xl ${product.bgColor} flex items-center justify-center mb-4`}>
                    <product.icon className={`w-7 h-7 ${product.color}`} />
                  </div>
                  <CardTitle className="text-xl" data-testid={`text-product-title-${index}`}>{product.title}</CardTitle>
                  <CardDescription className="text-base" data-testid={`text-product-desc-${index}`}>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      {product.title.includes("Dashboard") && <Wifi className="w-4 h-4 text-muted-foreground" />}
                      {product.title.includes("Farmer") && <MessageSquare className="w-4 h-4 text-muted-foreground" />}
                      {product.title.includes("Open") && <GitBranch className="w-4 h-4 text-muted-foreground" />}
                      <span className="text-sm font-medium text-muted-foreground">Technology</span>
                    </div>
                    <p className="text-sm font-mono bg-muted/50 rounded-lg px-3 py-2" data-testid={`text-product-tech-${index}`}>
                      {product.technology}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <FileCode className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">Features</span>
                    </div>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={feature} className="flex items-start gap-2 text-sm" data-testid={`text-product-feature-${index}-${featureIndex}`}>
                          <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${product.color}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Badge className={product.impactColor} variant="secondary" data-testid={`badge-product-impact-${index}`}>
                      {product.impact}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
