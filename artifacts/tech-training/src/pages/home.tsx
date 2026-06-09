import React from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Award, Users, BookOpen, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-secondary text-secondary-foreground overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-transparent z-10" />
          {/* Placeholder for hero image - ideally replaced with actual generated image later */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Empowering Professionals Through Technology Training
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl leading-relaxed">
              We deliver cutting-edge technology education tailored for the modern enterprise. From AI and Cloud to Cybersecurity, we bridge the skills gap with elite, hands-on learning.
            </p>
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

      {/* Highlights Section */}
      <section className="py-16 bg-background border-b">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Expert Trainers", desc: "Learn from industry veterans and certified practitioners." },
              { icon: BookOpen, title: "Industry-Relevant Curriculum", desc: "Syllabuses continuously updated to match market demands." },
              { icon: Award, title: "Corporate Training", desc: "Customized upskilling programs for enterprise teams." },
              { icon: Laptop, title: "Hands-on Learning", desc: "Project-based methodology with real-world applications." }
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

      {/* Brief Intro */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-secondary">The Definitive Partner for Enterprise Upskilling</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Technology evolves rapidly. Ensuring your team stays ahead of the curve requires more than generic video courses. It requires rigorous, expert-led training designed for practical application.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Tailored learning paths for different roles",
                  "Flexible delivery: on-site, virtual, or hybrid",
                  "Post-training support and certification preparation",
                  "Measurable ROI on your training investment"
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Link href="/about">
                  <Button variant="outline" className="group">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative">
                {/* Placeholder for about image */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
