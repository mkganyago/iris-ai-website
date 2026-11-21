import { Compass, Layers, Monitor, Users } from "lucide-react";

const milestones = [
  {
    icon: Compass,
    title: "Project Foundation",
    description: "The inception work established project aims and work packages. A review of satellite-based irrigation research informed the analytical approach.",
  },
  {
    icon: Layers,
    title: "System Design",
    description: "Requirements and system design connect data processing, farmer advisory workflows and regulatory information needs.",
  },
  {
    icon: Monitor,
    title: "Integrated Prototype",
    description: "The Farmer Advisory Service and Compliance Dashboard bring field monitoring, alerts and analytical summaries into complementary interfaces.",
  },
  {
    icon: Users,
    title: "Evaluation and Engagement",
    description: "Further work focuses on validation, user feedback, community engagement and refinement of the decision-support tools.",
  },
];

export function TimelineSection() {
  return (
    <section id="progress" className="py-10 lg:py-14 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Project Progress</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">The project has progressed from requirements and evidence synthesis to an integrated prototype for technical evaluation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((milestone) => (
            <article key={milestone.title} className="bg-card rounded-xl p-8 border border-card-border">
              <div className="flex items-start gap-3 mb-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <milestone.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-semibold pt-1">{milestone.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
