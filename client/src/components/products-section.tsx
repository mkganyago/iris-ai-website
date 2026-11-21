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
    description: "A Web-based prototype that organises field and catchment information for regulatory review.",
    color: "text-primary", bgColor: "bg-primary/10", borderColor: "border-primary/20",
    technology: "Earth observation, weather and water-authorisation context",
    features: ["Map-based field inspection and catchment summaries", "Water-use estimates, allocation comparisons and temporal trends", "Alerts to help prioritise further investigation"],
    impact: "Supporting evidence-informed oversight",
    impactColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Smartphone,
    title: "Farmer Advisory Service (FAS)",
    description: "A mobile-oriented prototype bringing field monitoring and irrigation planning into one workflow.",
    color: "text-chart-2", bgColor: "bg-chart-2/10", borderColor: "border-chart-2/20",
    technology: "Satellite indicators, weather context and grounded advisory messages",
    features: ["Field registration and crop-condition monitoring", "Canopy-moisture indicators and water-use context", "Irrigation priorities, alerts and scheduling support"],
    impact: "Supporting practical farm decisions",
    impactColor: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    icon: Code,
    title: "Project Development and Capacity Building",
    description: "Project methods, postgraduate training and stakeholder engagement support the development of IRIS-AI.",
    color: "text-chart-3", bgColor: "bg-chart-3/10", borderColor: "border-chart-3/20",
    technology: "Literature synthesis, documented methods and technical evaluation",
    features: ["Satellite-based irrigation monitoring", "Documented analytical methods and in-situ validation", "Skills development in Earth observation and AI"],
    impact: "Building local capacity",
    impactColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
];

export function ProductsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-10 lg:py-14 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-products-title">
            Project Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-products-description">
            The integrated prototype connects farmer advisory and regulatory workflows, supported by project activities and skills development.
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
