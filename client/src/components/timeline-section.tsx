import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const milestones = [
  {
    year: "2025",
    quarter: "Q1-Q2",
    title: "Project Initiation",
    description: "Data acquisition, team formation, and infrastructure setup",
    status: "completed",
  },
  {
    year: "2025",
    quarter: "Q3-Q4",
    title: "Model Development",
    description: "CNN-LSTM model training on historical satellite data",
    status: "current",
  },
  {
    year: "2026",
    quarter: "Q1-Q2",
    title: "Pilot Deployment",
    description: "Testing in selected catchment areas with stakeholder feedback",
    status: "upcoming",
  },
  {
    year: "2026",
    quarter: "Q3-Q4",
    title: "FAS Launch",
    description: "Farmer Advisory Service rollout with SMS/Voice integration",
    status: "upcoming",
  },
  {
    year: "2027",
    quarter: "Q1-Q2",
    title: "Scale-Up",
    description: "National deployment and policy integration with DWS",
    status: "upcoming",
  },
  {
    year: "2027",
    quarter: "Q3-Q4",
    title: "Open Source Release",
    description: "Public release of codebase and training materials",
    status: "upcoming",
  },
];

export function TimelineSection() {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-timeline-title">
            Project Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-timeline-description">
            Key milestones and deliverables across the 2025-2027 project period.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-border" />
          
          <div className="hidden lg:block absolute top-8 left-0 h-0.5 bg-primary" style={{ width: '25%' }} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={`${milestone.year}-${milestone.quarter}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="hidden lg:flex justify-center mb-4">
                  {milestone.status === "completed" && (
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10">
                      <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                  {milestone.status === "current" && (
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10 animate-pulse">
                      <Clock className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                  {milestone.status === "upcoming" && (
                    <div className="w-6 h-6 rounded-full bg-muted border-2 border-border z-10">
                      <Circle className="w-full h-full text-muted-foreground" />
                    </div>
                  )}
                </div>

                <div className={`bg-card rounded-xl p-4 border border-card-border h-full ${
                  milestone.status === "current" ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""
                }`} data-testid={`card-timeline-${index}`}>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="font-bold text-primary" data-testid={`text-timeline-year-${index}`}>{milestone.year}</span>
                    <span className="text-sm text-muted-foreground" data-testid={`text-timeline-quarter-${index}`}>{milestone.quarter}</span>
                  </div>
                  <h3 className="font-semibold mb-1" data-testid={`text-timeline-title-${index}`}>{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-timeline-desc-${index}`}>{milestone.description}</p>
                  
                  <div className="lg:hidden mt-3">
                    {milestone.status === "completed" && (
                      <span className="inline-flex items-center gap-1 text-xs text-primary font-medium" data-testid={`badge-timeline-status-${index}`}>
                        <CheckCircle2 className="w-3 h-3" /> Completed
                      </span>
                    )}
                    {milestone.status === "current" && (
                      <span className="inline-flex items-center gap-1 text-xs text-primary font-medium animate-pulse" data-testid={`badge-timeline-status-${index}`}>
                        <Clock className="w-3 h-3" /> In Progress
                      </span>
                    )}
                    {milestone.status === "upcoming" && (
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground font-medium" data-testid={`badge-timeline-status-${index}`}>
                        <Circle className="w-3 h-3" /> Upcoming
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
