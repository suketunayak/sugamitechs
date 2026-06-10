import { Building2, Quote, ArrowRight, BarChart, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const testimonials = [
  {
    quote: "I worked with Suketu Nayak at Opsgility for a little over a year on multiple projects. He was our top go-to trainer in India as he could teach Azure in our custom Developer, IaaS and Big Data content to perfection! He consistently would hit our top tier in survey results and was the most dependable trainer we worked with. Many clients would request him after their initial class due to his vast real world knowledge of Azure. He was always gracious and a pleasure to work with.",
    author: "Lindsey Morris-Smith",
    role: "Program Manager, Customer Service & Support",
    company: "Microsoft Corporation"
  },
  {
    quote: "Attended one of the Azure classroom trainings Suketu did for Adobe. Being a newbie to Azure, I found the training very helpful and insightful. The training content was pretty apt for beginners as well as for advanced audience. Training was done in a very flexible manner with ample scope of hands-on exercises and QnA. Based on audience's choice and interest area, the instructor was able to convert topics into really deep dive sessions.",
    author: "Ashok Kumar",
    role: "Computer Scientist",
    company: "Adobe Systems India Pvt. Ltd."
  },
  {
    quote: "The training was very inspirational, energizing, bringing lots of ideas, with both substantial and in-depth knowledge together with case studies. Learning from experience and being fully practice-oriented. Well-balanced composition of participants, which contributed to interesting and focused discussions and exchanges.",
    author: "Manoj Barot",
    role: "Infrastructure Architect, Cloud Migration Factory",
    company: "IBM Bangalore"
  },
  {
    quote: "It was an excellent training on MS Azure - 70-533. The theory as well as the practicals were explained so well. The delivery of the entire training programme was extremely smooth and you left no question unanswered. I would like to take more training from you in the future as well as I strongly recommend you for any organization that needs a subject matter expert on MS Azure.",
    author: "Subhankar Patnaik",
    role: "Discovery Architect, Cloud Migration Factory",
    company: "IBM"
  },
  {
    quote: "The whole training from start to finish was superb and as a result of which I am Azure certified today. Suketu is a fantastic and knowledgeable trainer. His experience provided me a direct understanding of current situation and future goals. The course was well structured, right time frame, well organized and hands-on training was without doubt the best part. Thank you Suketu for the wonderful training.",
    author: "Rahul Gupta",
    role: "Lead Incident Commander",
    company: "Symantec Corporation, Pune"
  },
  {
    quote: "The training sessions conducted by you were awesome. I found the sessions to be really fruitful due to some great mix of theoretical and practical aspects supplemented by tutorials. Your knowledge/expertise helped gain insights into Azure and its functioning in great detail. You have been really professional in conducting these sessions — the energy and commitment you showed is exemplary.",
    author: "Yogesh Gaikwad",
    role: "Head of Engineering & Delivery",
    company: "British Telecom (BT), Bangalore"
  },
  {
    quote: "Just wanted to thank you for a wonderful Azure training. I have thoroughly enjoyed it and have gained confidence and knowledge on Azure from your classes. It was very well explained and I really appreciate your way of teaching and the way of explaining difficult things in a funny way. Thank you ever so much.",
    author: "Pawan Kumar",
    role: "Consultant",
    company: "Deloitte"
  },
  {
    quote: "I would like to personally thank you on the Azure Training Program conducted in Bangalore. The training material covered a wide variety of topics on Azure that were very useful. Stand out for me was the machine learning content explanation and different real time scenarios explained by you. Thanks for accommodating the Databricks content within short time. Definitely will keep coming back to you on Azure platform questions in future.",
    author: "Venkat Gani",
    role: "Senior Manager | Insights & Data | Big Data Architect",
    company: "Capgemini India, Hyderabad"
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

      {/* Client Logos Grid */}
      <section className="py-20 bg-background border-b">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-12">Our Corporate Partners &amp; Clients</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "/clients-1.jpg",
              "/clients-2.jpg",
              "/clients-3.jpg",
              "/clients-4.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className="rounded-2xl border bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-4 flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`Client logos set ${i + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-secondary">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
