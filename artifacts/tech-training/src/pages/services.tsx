import { Link } from "wouter";
import { Brain, Cloud, BarChart, ShieldCheck, Code, Building, ArrowRight, Cpu, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "ai",
    title: "AI & Generative AI Training",
    description: "Master Azure OpenAI, Microsoft Copilot, GitHub Copilot, and Generative AI fundamentals. Delivered by a Microsoft MVP and certified AI trainer to Fortune 500 enterprises.",
    icon: Brain,
    features: ["Azure OpenAI & Copilot Studio", "GitHub Copilot", "Microsoft Foundry", "AI+ Executive (AI Certs)"]
  },
  {
    id: "cloud",
    title: "Microsoft Azure Cloud Training",
    description: "Comprehensive Azure training from foundational to advanced — IaaS, PaaS, SaaS, cloud architecture, and migration. Authorised Microsoft Official Curriculum delivery.",
    icon: Cloud,
    features: ["AZ-104, AZ-204, AZ-305, AZ-400", "AZ-700 (Networking)", "Azure Architecture", "Cloud Migration"]
  },
  {
    id: "data",
    title: "Data Engineering & Analytics",
    description: "Azure-focused data training covering Fabric, Data Science, Data Engineering, and analytics pipelines. Delivered to Optum, Deloitte, KPMG, and more.",
    icon: BarChart,
    features: ["Microsoft Fabric (DP-700)", "DP-100, DP-203, DP-300", "Azure Data Engineering", "Power BI & Analytics"]
  },
  {
    id: "cybersecurity",
    title: "Cloud Security & Compliance",
    description: "Enterprise-grade security training covering Microsoft Purview, Sentinel, and cloud security best practices. Designed for CISOs, security architects, and compliance teams.",
    icon: ShieldCheck,
    features: ["Microsoft Sentinel (SIEM)", "Microsoft Purview", "SC-300, SC-900", "DW-300 / DW-301 Workshops"]
  },
  {
    id: "copilot",
    title: "Microsoft Copilot Workshops",
    description: "Official Microsoft Copilot for Microsoft 365 deployment, governance, and adoption workshops. Part of the Microsoft Organisation Skilling programme.",
    icon: Cpu,
    features: ["DW-100 Copilot Business Value", "DW-101 M365 Deployment", "DW-102 Copilot Studio", "DW-103 Purview Governance"]
  },
  {
    id: "devops",
    title: "DevOps & GitHub Training",
    description: "Modern DevOps practices with Azure DevOps, GitHub Actions, and CI/CD pipelines. Delivered to Microsoft, Opsgility, Accenture, and enterprise teams globally.",
    icon: GitBranch,
    features: ["AZ-400 Azure DevOps", "GitHub Copilot & Actions", "CI/CD Pipelines", "Microsoft Foundry & Agents"]
  },
  {
    id: "software",
    title: "Software Development Training",
    description: "Full-stack development and modern application architecture training using Microsoft technologies, REST APIs, and cloud-native patterns.",
    icon: Code,
    features: ["ASP.NET & C#.NET", "Microservices & APIs", "UWP, WCF, WPF", "BizTalk & Logic Apps"]
  },
  {
    id: "corporate",
    title: "Corporate Technology Workshops",
    description: "Customised, intensive workshops designed around your organisation's specific cloud and AI goals. Delivered on-site, virtually, or in hybrid format globally.",
    icon: Building,
    features: ["Custom Curriculum Design", "Executive Briefings", "Microsoft Hackathons", "Technology Adoption Consulting"]
  }
];

const recentDeliveries = [
  { org: "Boeing USA", course: "DP-3021, DP-3014" },
  { org: "Goldman Sachs", course: "MS4018" },
  { org: "PepsiCo", course: "MS4018" },
  { org: "Cisco USA", course: "AI900" },
  { org: "Wipro", course: "AI900" },
  { org: "Optum India", course: "DP-100, DP-700" },
  { org: "Deloitte USA", course: "AI-050, DP-203, AZ-400" },
  { org: "Accenture / Avanade", course: "DP-700, AZ-400" },
  { org: "Synechron", course: "AZ-104, AZ-204, AZ-900" },
  { org: "KPMG", course: "AI-102, DP-203" },
  { org: "Microsoft ESI USA", course: "DW Series, AI Series, AZ Series" },
  { org: "Intel USA", course: "AI-102" },
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
            Certified, expert-led technology training delivered by a Microsoft MVP, Azure Master, and globally recognised Top 100 MCT — to enterprises across USA, India, UK, and beyond.
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
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow text-sm">
                  {service.description}
                </p>
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2 shrink-0" />
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

      {/* Recent Enterprise Deliveries */}
      <section className="py-20 bg-muted/30 border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Recent Enterprise Deliveries</h2>
            <p className="text-lg text-muted-foreground">A snapshot of recent training sessions delivered to leading global organisations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentDeliveries.map((item, i) => (
              <div key={i} className="bg-card border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all">
                <p className="font-bold text-foreground text-sm mb-1">{item.org}</p>
                <p className="text-xs font-mono text-primary">{item.course}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Need a custom training program?</h2>
          <p className="text-lg text-secondary-foreground/80 mb-8">
            We design bespoke curricula tailored to your organisation's tech stack, cloud maturity, and skill gaps — delivered globally, in-person or virtually.
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
