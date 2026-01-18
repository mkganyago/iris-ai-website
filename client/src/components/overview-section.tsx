import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Satellite, Brain, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Droplets,
    title: "60-70%",
    description: "Of national water withdrawals in South Africa are used for agriculture",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Satellite,
    title: "Earth Observation",
    description: "Leveraging Sentinel-2 and Sentinel-1 satellite data for real-time monitoring",
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description: "Hybrid CNN-LSTM models for intelligent irrigation mapping and anomaly detection",
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
    <section id="overview" className="py-20 lg:py-32 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-overview-title">
            Project Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-overview-description">
            <span className="font-semibold text-foreground">IRIS-AI</span> (Irrigation Resource Intelligence System - AI) 
            is a pioneering initiative designed to address South Africa's pressing water governance challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed text-foreground/90 border-l-4 border-primary pl-6" data-testid="text-mission-quote">
                  "IRIS-AI bridges the gap between technological innovation and water governance 
                  by providing scalable, real-time monitoring tools to bridge the digital divide 
                  and ensure sustainable resource management."
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
                  <span className="text-muted-foreground" data-testid="text-project-status">Active (2025–2027)</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Project Number</h3>
                <p className="font-mono text-muted-foreground" data-testid="text-project-number">2025/2026-01945</p>
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
