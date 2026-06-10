import React from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Award, Users, BookOpen, Laptop, BadgeCheck, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const credentialBadges = [
  "Microsoft Certified Trainer (MCT)",
  "Top 100 Quality MCT — out of 22,000 Globally",
  "Microsoft MVP — Azure (2016)",
  "Azure Master",
  "Alibaba Cloud MVP",
  "AI Certs Certified Trainer",
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-transparent z-10" />
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">Empowering Professionals Through Technology Training & Consulting</h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl leading-relaxed">Led by a Microsoft Certified Trainer, Microsoft MVPr, Azure Master, Copilot Proficient, AI Engineer & globally recognised Top 100 MCT — we deliver expert Azure, AI, Copilot, and Data training to enterprises across the USA, India, UK, and beyond.</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/services">
                <Button size="lg" className="w-full sm:w-auto text-base">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base bg-transparent text-secondary-foreground border-secondary-foreground/20 hover:bg-secondary-foreground/10 hover:text-secondary-foreground">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Credential Badges Strip */}
      <section className="py-6 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {credentialBadges.map((badge, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary-foreground/10 text-sm font-medium border border-primary-foreground/20">
                <BadgeCheck className="h-3.5 w-3.5 shrink-0" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
      {/* Highlights Section */}
      <section className="py-16 bg-background border-b">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Expert Trainers", desc: "Microsoft MVP, Azure Master, Top 100 MCT — learn from the world's best." },
              { icon: BookOpen, title: "Official Microsoft Curriculum", desc: "Authorised delivery of Microsoft ESI, DW, AZ, AI and DP course series." },
              { icon: Award, title: "Corporate Training", desc: "Customised upskilling delivered to Boeing, Goldman Sachs, Deloitte, and 60+ more." },
              { icon: Laptop, title: "Hands-on Learning", desc: "Every session is practical, lab-driven, and immediately applicable on the job." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/50 transition-transform hover:-translate-y-1">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About the Founder */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <Star className="h-4 w-4" /> Meet the Founder
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary">Suketu Nayak — Founder & CEO</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over <strong>20 years of experience</strong>, Suketu is a <strong>Microsoft Certified Trainer</strong> awarded as one of the <strong>Top 100 Quality MCTs globally</strong> (out of 22,000). He is a <strong>Microsoft MVP for Azure (2016)</strong>, <strong>Azure Master</strong>, and <strong>Alibaba Cloud MVP</strong>.
              </p>
              <ul className="space-y-4">
                {[
                  "400+ sessions delivered to 60+ global enterprise clients",
                  "Authorised trainer for Microsoft ESI, Opsgility USA, and AI Certs",
                  "Delivered to Boeing, Goldman Sachs, Deloitte, PepsiCo, Cisco, and more",
                  "BE (IT) + M.Tech (CSE) — 20+ years industry experience"
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/about">
                  <Button variant="outline" className="group">
                    Full Profile <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a
                  href="https://www.credly.com/users/suketu-nayak/badges"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" className="text-primary hover:text-primary gap-2">
                    <BadgeCheck className="h-4 w-4" /> View Credentials <ExternalLink className="h-3 w-3" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
