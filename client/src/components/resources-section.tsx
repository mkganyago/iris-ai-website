export function ResourcesSection() {
  return (
    <section id="resources" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Research and Knowledge Sharing</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">The project develops a research foundation for irrigation intelligence, alongside practical methods and skills.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="bg-card rounded-xl p-8 border border-card-border"><h3 className="text-xl font-semibold mb-3">Evidence Review</h3><p className="text-muted-foreground leading-relaxed">A synthesis of research on Earth observation, irrigation mapping and agricultural water-use assessment informs the project.</p></article>
<article className="bg-card rounded-xl p-8 border border-card-border"><h3 className="text-xl font-semibold mb-3">Analytical Methods</h3><p className="text-muted-foreground leading-relaxed">Technical work documents data preparation, crop-condition and moisture indicators, evapotranspiration analysis and field-to-catchment aggregation.</p></article>
<article className="bg-card rounded-xl p-8 border border-card-border"><h3 className="text-xl font-semibold mb-3">Prototype Development</h3><p className="text-muted-foreground leading-relaxed">The research explores how monitoring information can be presented through farmer advisory and compliance-oriented interfaces.</p></article>
<article className="bg-card rounded-xl p-8 border border-card-border"><h3 className="text-xl font-semibold mb-3">Training and Collaboration</h3><p className="text-muted-foreground leading-relaxed">Postgraduate research and stakeholder engagement support local skills development. Contact the project team to discuss research and collaboration.</p></article>
        </div>
      </div>
    </section>
  );
}
