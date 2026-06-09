import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent Successfully",
        description: "One of our training advisors will contact you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed">
            Ready to transform your team? Reach out to discuss training programs, enterprise engagements, or general inquiries.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background flex-grow">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-card p-8 md:p-10 rounded-2xl border shadow-sm">
              <h2 className="text-3xl font-bold text-secondary mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" required placeholder="John" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" required placeholder="Doe" className="bg-background" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email</Label>
                  <Input id="email" type="email" required placeholder="john@company.com" className="bg-background" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-background" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea id="message" required placeholder="Tell us about your team's training needs..." className="min-h-[150px] bg-background" />
                </div>
                
                <Button type="submit" size="lg" className="w-full text-base" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Headquarters</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        100 Innovation Drive<br />
                        Tech District, Suite 400<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (800) 555-0199</p>
                      <p className="text-sm text-muted-foreground mt-1">Mon-Fri from 8am to 6pm PST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-primary font-medium">contact@techtrainpro.com</p>
                      <p className="text-sm text-muted-foreground mt-1">We aim to respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-muted rounded-2xl border overflow-hidden relative flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="font-medium">Interactive Map Placeholder</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
