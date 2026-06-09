import { Link } from "wouter";
import { Brain, Cloud, BarChart, ShieldCheck, Code, Building, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "ai",
    title: "AI & Machine Learning Training",
    description: "Equip your team with the skills to build, deploy, and scale machine learning models and generative AI solutions.",
    icon: Brain,
    features: ["Deep Learning", "Generative AI", "NLP", "MLOps"]
  },
  {
    id: "cloud",
    title: "Cloud Computing Training",
    description: "Master modern cloud architectures across AWS, Azure, and GCP. From foundational concepts to advanced cloud-native design.",
    icon: Cloud,
    features: ["AWS / Azure / GCP", "Serverless", "Kubernetes", "Cloud Migration"]
  },
  {
    id: "data",
    title: "Data Analytics Training",
    description: "Transform raw data into strategic insights. Comprehensive training in data engineering, visualization, and advanced analytics.",
    icon: BarChart,
    features: ["Data Engineering", "Power BI / Tableau", "Predictive Analytics", "Big Data"]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity Training",
    description: "Fortify your organization's defenses with expert-led training in ethical hacking, compliance, and threat mitigation.",
    icon: ShieldCheck,
    features: ["Ethical Hacking", "Cloud Security", "DevSecOps", "Compliance (SOC2/ISO)"]
  },
  {
    id: "software",
    title: "Software Development Training",
    description: "Level up your engineering teams with modern stacks, clean architecture, and agile best practices.",
    icon: Code,
    features: ["Full-Stack React", "Microservices", "API Design", "TDD & CI/CD"]
  },
  {
    id: "corporate",
    title: "Corporate Technology Workshops",
    description: "Intensive, customized workshops designed to solve specific organizational challenges and accelerate digital transformation.",
    icon: Building,
    features: ["Custom Curriculum", "Executive Briefings", "Hackathons", "Tech Strategy"]
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Our Training Services</h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed">
            Comprehensive, expert-led technology training designed to elevate your team's capabilities and accelerate your enterprise's digital transformation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group relative flex flex-col p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="mt-auto">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    Request Syllabus <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/50 border-t">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-secondary">Need a custom training program?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We can design a bespoke curriculum tailored to your organization's specific tech stack, goals, and skill gaps.
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-base px-8">
              Discuss Custom Training
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
