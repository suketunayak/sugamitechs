import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
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
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Photo + intro */}
            <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
              <img
                src="/suketu-nayak.png"
                alt="Suketu Nayak"
                className="w-72 h-80 object-cover rounded-2xl shadow-xl border border-border"
              />
              <div>
                <h3 className="text-2xl font-extrabold text-secondary">Suketu Nayak</h3>
                <p className="text-primary font-semibold">Founder & CEO</p>
                <p className="text-sm text-muted-foreground mt-1">SUGAMI Cloud and AI Technologies</p>
              </div>
            </div>

            {/* Contact details */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-10">Get in Touch</h2>
              <div className="space-y-8">

                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Headquarters</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      B2/24 Orchid Heights,<br />
                      Applewood Township, SP Ring Road,<br />
                      Ahmedabad, Gujarat 380058<br />
                      INDIA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Phone</h3>
                    <a
                      href="tel:+919925552595"
                      className="text-primary font-medium text-base hover:underline"
                    >
                      +91 992 555 2595
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Email</h3>
                    <a
                      href="mailto:suketunayak@gmail.com"
                      className="text-primary font-medium text-base hover:underline"
                    >
                      suketunayak@gmail.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
