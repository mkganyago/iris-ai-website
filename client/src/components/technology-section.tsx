import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Satellite, 
  Brain, 
  MessageCircle, 
  CheckSquare,
  Layers,
  Database,
  Cpu,
  Zap
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const dataSources = [
  { name: "Sentinel-2", type: "Optical", description: "Multi-spectral imagery for vegetation analysis" },
  { name: "Sentinel-1", type: "SAR", description: "All-weather radar for moisture detection" },
  { name: "Landsat-8/9", type: "Optical", description: "Long-term historical imagery" },
  { name: "FAO WaPOR", type: "Database", description: "Water productivity data" },
];

const techStack = [
  {
    icon: Layers,
    title: "Data Sources",
    description: "Multi-sensor Earth Observation data fusion",
    items: ["Sentinel-2 optical imagery", "Sentinel-1 SAR data", "Landsat-8/9 archive", "FAO WaPOR database"],
  },
  {
    icon: Cpu,
    title: "AI Architecture",
    description: "Hybrid deep learning models",
    items: ["CNN for spatial feature extraction", "LSTM for temporal dynamics", "Irrigation area mapping", "Anomaly detection"],
  },
  {
    icon: MessageCircle,
    title: "Advisory System",
    description: "Natural language generation",
    items: ["RAG-based chatbots", "Weather forecast synthesis", "Actionable recommendations", "Multi-language support"],
  },
  {
    icon: CheckSquare,
    title: "Validation",
    description: "Ground-truth verification",
    items: ["GPS field campaigns", "Soil moisture sensors", "Expert verification", "Continuous calibration"],
  },
];

export function TechnologySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technology" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-technology-title">
            Methodology & Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-technology-description">
            IRIS-AI employs a sophisticated technical framework combining cutting-edge 
            satellite data with advanced machine learning.
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {dataSources.map((source, index) => (
              <motion.div
                key={source.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Card className="hover-elevate" data-testid={`card-datasource-${index}`}>
                  <CardContent className="p-4 flex items-center gap-3 flex-wrap">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      {source.type === "SAR" ? (
                        <Zap className="w-5 h-5 text-primary" />
                      ) : source.type === "Database" ? (
                        <Database className="w-5 h-5 text-primary" />
                      ) : (
                        <Satellite className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold" data-testid={`text-datasource-name-${index}`}>{source.name}</span>
                        <Badge variant="secondary" className="text-xs" data-testid={`badge-datasource-type-${index}`}>{source.type}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground" data-testid={`text-datasource-desc-${index}`}>{source.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="h-full" data-testid={`card-techstack-${index}`}>
                <CardHeader>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <tech.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg" data-testid={`text-techstack-title-${index}`}>{tech.title}</CardTitle>
                      <p className="text-sm text-muted-foreground" data-testid={`text-techstack-desc-${index}`}>{tech.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-2">
                    {tech.items.map((item, itemIndex) => (
                      <li key={item} className="flex items-center gap-2 text-sm" data-testid={`text-techstack-item-${index}-${itemIndex}`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="bg-primary/5 border-primary/20" data-testid="card-advisory-example">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 flex-wrap">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" data-testid="text-advisory-title">Example Advisory Output</h3>
                  <p className="text-muted-foreground italic bg-background/50 rounded-lg p-4 font-mono text-sm" data-testid="text-advisory-example">
                    "Delay irrigation: soil moisture exceeds optimal levels. Current reading: 42%. 
                    Recommended action: Resume irrigation in 2-3 days when moisture drops below 35%."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
