import { Target, Compass, Award, ExternalLink, BadgeCheck, Star } from "lucide-react";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "400+", label: "Sessions Delivered" },
  { value: "60+", label: "Enterprise Clients" },
  { value: "Top 100", label: "Quality MCT Globally" }
];

const certifications = [
  { title: "Microsoft Certified Trainer (MCT)", badge: "Top 100 Quality MCT out of 22,000 Globally" },
  { title: "Microsoft MVP — Azure", badge: "Awarded 2016" },
  { title: "Azure Master", badge: "Awarded by Microsoft" },
  { title: "Alibaba Cloud MVP", badge: "Alibaba Cloud China" },
  { title: "AI Certs Certified Trainer", badge: "AI+ Executive" },
  { title: "Alibaba Cloud Certified Trainer", badge: "ACP Alibaba Cloud" },
];

const technicalSkills = [
  "Microsoft Azure Cloud (IaaS, PaaS, SaaS)",
  "Microsoft Copilot & GitHub Copilot",
  "Generative AI & Azure OpenAI",
  "Microsoft Foundry & Azure AI Services",
  "Microsoft Fabric & Data Engineering",
  "Microsoft Data Science Services",
  "Azure DevOps & CI/CD",
  "Internet of Things (IoT) with Cloud",
  "BizTalk Server 2013 & 2016 / Logic Apps",
  "ASP.NET, C#.NET, WCF, WPF, UWP Apps",
  "Microsoft Purview & Security",
  "Microsoft Sentinel (SIEM)",
];

const officialWorkshops = [
  { code: "DW-100", name: "Copilot Business Value Bootcamp" },
  { code: "DW-101", name: "Copilot for Microsoft 365 Deployment Workshop" },
  { code: "DW-102", name: "Building AI-powered Copilots with Copilot Studio" },
  { code: "DW-103", name: "Securing & Governing Copilot with Microsoft Purview" },
  { code: "DW-200", name: "Azure OpenAI Workshop" },
  { code: "DW-201", name: "Building & Modernizing AI Apps on Azure" },
  { code: "DW-300", name: "Fortify Data Security with Microsoft Purview" },
  { code: "DW-301", name: "Migrating SIEM Solution to Microsoft Sentinel" },
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">About SUGAMI Cloud and AI Technologies</h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed">
            Founded by a Microsoft MVP, Azure Master, and globally recognised Top 100 MCT — we bring elite, certified technology training to enterprises worldwide.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-foreground/20">
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-primary-foreground/80 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <Star className="h-4 w-4" /> Founder & CEO
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">Suketu Nayak</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Suketu Nayak is the Founder & CEO of SUGAMI Cloud and AI Technologies. With over 20 years of experience, he is a globally recognised <strong>Microsoft Certified Trainer</strong>, honoured as one of the <strong>Top 100 Quality MCTs out of 22,000 trainers worldwide</strong> by Microsoft.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                A <strong>Microsoft MVP for Azure (2016)</strong> and <strong>Azure Master</strong>, Suketu has delivered hundreds of sessions to Fortune 500 enterprises across the USA, India, UK, Europe, and the Middle East — including Boeing, Goldman Sachs, Deloitte, PepsiCo, CISCO, Wipro, Accenture, and many more.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                He is also an <strong>Alibaba Cloud MVP</strong> and an <strong>AI Certs Certified Trainer</strong>, specialising in Azure AI, Generative AI, Microsoft Copilot, GitHub Copilot, Microsoft Fabric, and enterprise cloud security.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://www.credly.com/users/suketu-nayak/badges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <BadgeCheck className="h-4 w-4" /> View Credentials on Credly <ExternalLink className="h-3 w-3" />
                </a>
                <a
                  href="https://learn.microsoft.com/en-us/users/suketunayak4683/transcript/7kn4mhj94glqgp6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  <ExternalLink className="h-4 w-4" /> Microsoft Transcript
                </a>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-muted/40 rounded-2xl border p-8">
              <h3 className="text-xl font-bold text-secondary mb-6">Core Technical Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {technicalSkills.map((skill, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30 border-t border-b">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-secondary">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower professionals and organisations with the technical mastery required to innovate, secure, and scale the digital infrastructure of tomorrow. Every session we deliver is designed to be immediately actionable — not just informative.
              </p>
            </div>
            <div className="space-y-6">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Compass className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-secondary">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the most trusted name in enterprise technology education globally — recognised by Microsoft, Alibaba Cloud, and AI industry bodies as the definitive training partner for Cloud, AI, and Digital Transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Microsoft Official Workshops */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Microsoft Official Workshops</h2>
            <p className="text-lg text-muted-foreground">
              Authorised to deliver the full suite of Microsoft Organisation Skilling workshops to enterprise clients through Microsoft ESI.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {officialWorkshops.map((ws, i) => (
              <div key={i} className="bg-card border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all">
                <div className="text-xs font-mono font-bold text-primary mb-2">{ws.code}</div>
                <p className="text-sm font-medium text-foreground leading-snug">{ws.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30 border-t">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <Award className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-secondary mb-10">Awards & Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            {certifications.map((cert, i) => (
              <div key={i} className="bg-card border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all">
                <BadgeCheck className="h-7 w-7 text-primary mb-3" />
                <h3 className="font-bold text-foreground mb-1">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.badge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
