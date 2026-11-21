import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Satellite, Brain, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Droplets,
    title: "Water Stewardship",
    description: "Supporting informed decisions about agricultural water use",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Satellite,
    title: "Earth Observation",
    description: "Combining satellite observations with weather and field information",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description: "Analytical indicators and context-grounded AI explanations for irrigation decisions",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    icon: Users,
    title: "Stakeholder Empowerment",
    description: "Tools for regulators, farmers, and researchers to manage water resources",
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
];

export function OverviewSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="overview" className="py-10 lg:py-14 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-overview-title">
            Project Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-overview-description">
            <span className="font-semibold text-foreground">IRIS-AI</span> (Irrigation Resource Intelligence System - AI) 
            is a University of Johannesburg project supported by the Water Research Commission. It connects field-level irrigation information with catchment-scale water-use oversight.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed text-foreground/90 border-l-4 border-primary pl-6" data-testid="text-mission-quote">
                  IRIS-AI brings satellite observations, weather information and agricultural field records together to help farmers plan irrigation and regulators review water-use patterns.
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Focus Area</h3>
                <p className="text-muted-foreground" data-testid="text-focus-area">Water Utilisation in Agriculture & Digital Transformation</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Project Status</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-muted-foreground" data-testid="text-project-status">Integrated prototype under evaluation</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Project Approach</h3>
                <p className="font-mono text-muted-foreground" data-testid="text-project-number">Field-to-catchment decision support</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Card className="h-full hover-elevate" data-testid={`card-feature-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-feature-desc-${index}`}>{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
