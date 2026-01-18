import { Droplets, Heart } from "lucide-react";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { label: "Overview", href: "#overview" },
      { label: "Products", href: "#products" },
      { label: "Technology", href: "#technology" },
      { label: "Impact", href: "#impact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4 flex-wrap" data-testid="footer-brand">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Droplets className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">IRIS-AI</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md" data-testid="text-footer-description">
              Catchment-Scale Irrigation Intelligence System for Water-Use Efficiency and Compliance, 
              Powered by Earth Observation and AI.
            </p>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-lead-org">
              Lead Organisation: <span className="font-medium text-foreground">University of Johannesburg</span>
            </p>
          </div>

          {footerLinks.map((section, sectionIndex) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4" data-testid={`text-footer-section-${sectionIndex}`}>{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      data-testid={`link-footer-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap">
          <p className="text-sm text-muted-foreground text-center sm:text-left" data-testid="text-copyright">
            © 2025 IRIS-AI Project. Portions of this work are licensed under{" "}
            <span className="font-medium">Creative Commons Attribution Non-Commercial (CC BY-NC)</span>.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1" data-testid="text-made-with-love">
            Made with <Heart className="w-4 h-4 text-red-500 dark:text-red-400" /> for sustainable water governance
          </p>
        </div>
      </div>
    </footer>
  );
}
