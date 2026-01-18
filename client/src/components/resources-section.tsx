import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Code, BookOpen, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const resources = [
  {
    icon: FileText,
    title: "Water-Use Compliance Framework",
    description: "A policy tool embedding EO/AI into South Africa's legal compliance mechanisms",
    type: "Policy Document",
    status: "In Development",
  },
  {
    icon: BookOpen,
    title: "EO/AI Training Toolkit",
    description: "A modular curriculum blending FAO WaPOR frameworks with local case studies",
    type: "Training Material",
    status: "In Development",
  },
];

export function ResourcesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-resources-title">
            Publications & Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-resources-description">
            Access our research outputs, training materials, and open-source code repositories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover-elevate" data-testid={`card-resource-${index}`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <resource.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" data-testid={`badge-resource-status-${index}`}>{resource.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2" data-testid={`text-resource-type-${index}`}>{resource.type}</p>
                  <CardTitle className="text-lg mb-2" data-testid={`text-resource-title-${index}`}>{resource.title}</CardTitle>
                  <CardDescription data-testid={`text-resource-desc-${index}`}>{resource.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20" data-testid="card-opensource">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6 flex-wrap">
                <div className="w-16 h-16 rounded-2xl bg-foreground/10 dark:bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Github className="w-8 h-8" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2" data-testid="text-opensource-title">Open-Source Code Repository</h3>
                  <p className="text-muted-foreground mb-4" data-testid="text-opensource-desc">
                    Our ML workflows for irrigation mapping and anomaly detection will be released under 
                    <span className="font-mono bg-muted px-2 py-0.5 rounded mx-1">MIT</span> and 
                    <span className="font-mono bg-muted px-2 py-0.5 rounded mx-1">CC BY-NC</span> licenses.
                  </p>
                  <p className="text-sm text-muted-foreground italic" data-testid="text-opensource-note">
                    Links to code and datasets will appear here as the project progresses.
                  </p>
                </div>
                <Button variant="outline" disabled className="flex-shrink-0" data-testid="button-github-coming-soon">
                  <Code className="w-4 h-4 mr-2" />
                  Coming Soon
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
