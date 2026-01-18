import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Building, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-contact-title">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-description">
            Interested in collaboration or learning more about IRIS-AI? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card data-testid="card-contact-info">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6" data-testid="text-contact-info-title">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 flex-wrap">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Building className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Department</h4>
                      <p className="text-muted-foreground" data-testid="text-department">
                        Department of Geography, Environmental Management and Energy Studies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 flex-wrap">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-muted-foreground" data-testid="text-address">
                        University of Johannesburg<br />
                        Kingsway Campus<br />
                        Auckland Park, 2092<br />
                        South Africa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 flex-wrap">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a 
                        href="mailto:mahlatsek@uj.ac.za" 
                        className="text-primary hover:underline"
                        data-testid="link-email-contact"
                      >
                        mahlatsek@uj.ac.za
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-chart-2/5 border-primary/20" data-testid="card-quick-links">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4" data-testid="text-quick-links-title">Quick Links</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-between gap-2" asChild data-testid="link-uj-website">
                    <a 
                      href="https://www.uj.ac.za" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      University of Johannesburg
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-between gap-2" asChild data-testid="link-department">
                    <a 
                      href="https://www.uj.ac.za/faculties/febe/departments/geography-environmental-management-energy-studies/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Department Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center" data-testid="text-project-number-footer">
                    Project Number: <span className="font-mono">2025/2026-01945</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
