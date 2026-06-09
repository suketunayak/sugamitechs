import { Target, Compass, Award, Users } from "lucide-react";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50k+", label: "Professionals Trained" },
  { value: "200+", label: "Corporate Partners" },
  { value: "50+", label: "Expert Instructors" }
];

const team = [
  { name: "Dr. James Wilson", role: "Head of AI Training", exp: "Ex-Google Research" },
  { name: "Sarah O'Connor", role: "Lead Cloud Architect", exp: "AWS Certified Solutions Architect" },
  { name: "Marcus Chen", role: "Cybersecurity Director", exp: "CISSP, Former DoD Consultant" },
  { name: "Priya Patel", role: "VP of Engineering Training", exp: "15 yrs Full-Stack Dev" }
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">About TechTrainPro</h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed">
            We are technologists teaching technologists. Our mission is to close the global skills gap by providing rigorous, practical, and cutting-edge education.
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

      {/* Mission & Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-secondary">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower professionals and organizations with the technical mastery required to innovate, secure, and scale the digital infrastructure of tomorrow. We believe training should be transformative, not just informative.
              </p>
            </div>
            <div className="space-y-6">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <Compass className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-secondary">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the global standard for enterprise technology education, recognized by industry leaders as the definitive partner for continuous technical upskilling and organizational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-muted/30 border-t">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Meet Our Lead Instructors</h2>
            <p className="text-lg text-muted-foreground">
              Our faculty aren't just teachers—they are active practitioners, open-source contributors, and industry veterans who bring real-world context to every session.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-square bg-card rounded-2xl overflow-hidden mb-6 border shadow-sm flex items-center justify-center text-muted-foreground">
                  {/* Placeholder for trainer photo */}
                  <Users className="h-16 w-16 opacity-20" />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-primary font-medium mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <Award className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-secondary mb-8">Recognized & Accredited</h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            <span className="px-6 py-3 rounded-full bg-muted">AWS Training Partner</span>
            <span className="px-6 py-3 rounded-full bg-muted">Microsoft Gold Learning</span>
            <span className="px-6 py-3 rounded-full bg-muted">CompTIA Official</span>
            <span className="px-6 py-3 rounded-full bg-muted">ISO 9001:2015</span>
          </div>
        </div>
      </section>
    </div>
  );
}
