import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, GraduationCap, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Dr. Mahlatse Kganyago",
    role: "Project Leader",
    expertise: ["Earth Observation", "Precision Agriculture"],
    organization: "University of Johannesburg",
    email: "mahlatsek@uj.ac.za",
    initials: "MK",
    color: "bg-primary",
  },
  {
    name: "Mr. Karabo Mithi",
    role: "AI & Development Lead",
    expertise: ["Artificial Intelligence", "Applications Development"],
    organization: "University of Johannesburg",
    initials: "KM",
    color: "bg-chart-2",
  },
  {
    name: "Ms. Tiisetso Kekana",
    role: "Community Engagement",
    expertise: ["Geomatics", "Community Development"],
    organization: "Geomatics by MT",
    initials: "TK",
    color: "bg-chart-3",
  },
];

const organizations = [
  {
    name: "University of Johannesburg",
    department: "Dept of Geography, Environmental Management and Energy Studies",
    role: "Lead Organisation",
  },
  {
    name: "Geomatics by MT",
    department: "Capacity building and community development",
    role: "Collaborating Partner",
  },
];

export function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-20 lg:py-32 bg-muted/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-testid="text-team-title">
            The Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-team-description">
            A multidisciplinary team of experts in Earth Observation, AI, and community engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-visible hover-elevate" data-testid={`card-team-${index}`}>
                <CardContent className="p-6 text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarFallback className={`${member.color} text-white text-xl font-bold`} data-testid={`avatar-team-${index}`}>
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-bold mb-1" data-testid={`text-team-name-${index}`}>{member.name}</h3>
                  <p className="text-primary font-medium mb-3" data-testid={`text-team-role-${index}`}>{member.role}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skill} variant="secondary" className="text-xs" data-testid={`badge-team-skill-${index}-${skillIndex}`}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4" data-testid={`text-team-org-${index}`}>{member.organization}</p>
                  {member.email && (
                    <Button variant="ghost" size="sm" asChild data-testid={`button-team-email-${index}`}>
                      <a href={`mailto:${member.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Contact
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-center mb-8" data-testid="text-partners-title">Partner Organizations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {organizations.map((org, index) => (
              <Card key={org.name} className="hover-elevate" data-testid={`card-partner-${index}`}>
                <CardContent className="p-6 flex items-start gap-4 flex-wrap">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {org.name.includes("University") ? (
                      <GraduationCap className="w-6 h-6 text-primary" />
                    ) : (
                      <Building2 className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2" data-testid={`badge-partner-role-${index}`}>{org.role}</Badge>
                    <h4 className="font-semibold" data-testid={`text-partner-name-${index}`}>{org.name}</h4>
                    <p className="text-sm text-muted-foreground" data-testid={`text-partner-dept-${index}`}>{org.department}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
