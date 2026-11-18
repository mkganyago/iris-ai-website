import { Monitor, ShieldCheck, MessageCircle, GraduationCap, Code, BookOpen, FileText, Network } from "lucide-react";

const impacts = [
  {
    title: "Operational IRIS-AI Platform",
    icon: Monitor,
    description: "Providing real-time irrigation maps and compliance reports.",
  },
  {
    title: "Enhanced Regulatory Tools",
    icon: ShieldCheck,
    description:
      "Supporting regulators, including the Department of Water and Sanitation (DWS), to reduce unlicensed water use in pilot catchments through advanced anomaly detection and remote audits.",
  },
  {
    title: "Farmer Empowerment",
    icon: MessageCircle,
    description:
      "Providing push notifications, SMS and voice advisories through large language models to help farmers optimise irrigation and improve water-use efficiency.",
  },
  {
    title: "Trained Personnel and Resources",
    icon: GraduationCap,
    description:
      "Building skills among DWS officials and farmers through workshops, and supporting MSc students in Earth observation and AI applications.",
  },
  {
    title: "Open-Access Tools",
    icon: Code,
    description: "Making tools available to support replication.",
  },
  {
    title: "Journal Publications",
    icon: BookOpen,
    description: "Sharing project methods and findings through journal publications.",
  },
  {
    title: "Policy Briefs",
    icon: FileText,
    description:
      "Providing evidence-based recommendations to inform updates to existing strategies and frameworks.",
  },
  {
    title: "Scalable Framework",
    icon: Network,
    description: "Developing a framework adaptable to other water-stressed catchments.",
  },
];

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Intended project outcomes for irrigation management, water governance
            and local capacity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impacts.map((impact) => (
            <article
              key={impact.title}
              className="bg-card rounded-xl p-8 border border-card-border"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <impact.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-semibold pt-1">{impact.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {impact.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
