import { Building2, Quote, ArrowRight, BarChart, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const testimonials = [
  {
    quote: "TechTrainPro fundamentally transformed our engineering department. The AWS training was intense, practical, and exactly what we needed to migrate our legacy systems.",
    author: "Sarah Jenkins",
    role: "VP of Engineering, GlobalFin",
    company: "GlobalFin Inc."
  },
  {
    quote: "We brought them in for a week-long cybersecurity workshop for our C-suite. The level of expertise and authority the instructors commanded was truly exceptional.",
    author: "David Chen",
    role: "CISO",
    company: "Nexus Health"
  },
  {
    quote: "The React and Microservices curriculum took our junior devs to mid-level in a matter of weeks. The ROI on this training engagement was immediate.",
    author: "Elena Rodriguez",
    role: "Director of Product",
    company: "Streamline Tech"
  }
];

export default function Clientele() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Trusted by Industry Leaders</h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed">
            From agile startups to Fortune 500 enterprises, we partner with forward-thinking organizations to build elite technology teams.
          </p>
        </div>
      </section>

      {/* Logos Grid (Placeholders) */}
      <section className="py-20 bg-background border-b">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-12">Our Corporate Partners</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center opacity-60">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <Building2 className="h-16 w-16 text-muted-foreground" />
                <span className="sr-only">Partner {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl border shadow-sm relative">
                <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
                <p className="text-foreground/80 leading-relaxed mb-8 relative z-10">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">Real results from our comprehensive training programs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group rounded-2xl overflow-hidden border bg-card flex flex-col">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors" />
                <div className="w-full h-full flex items-center justify-center bg-secondary/5">
                   <BarChart className="h-16 w-16 text-primary/40" />
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-sm font-semibold text-primary mb-3">Cloud Migration</div>
                <h3 className="text-2xl font-bold mb-4">Accelerating Cloud Readiness for Global Retailer</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Trained 150+ engineers over 6 months, resulting in a 40% reduction in cloud migration timeline and zero security incidents during rollout.
                </p>
                <Link href="/contact" className="inline-flex items-center text-primary font-medium hover:underline">
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border bg-card flex flex-col">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors" />
                <div className="w-full h-full flex items-center justify-center bg-secondary/5">
                   <Brain className="h-16 w-16 text-primary/40" />
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-sm font-semibold text-primary mb-3">AI Integration</div>
                <h3 className="text-2xl font-bold mb-4">Upskilling Data Team in Generative AI</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Delivered a 4-week intensive on LLMs and LangChain, empowering the team to build an internal AI assistant that saved 20 hours per week per employee.
                </p>
                <Link href="/contact" className="inline-flex items-center text-primary font-medium hover:underline">
                  Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
