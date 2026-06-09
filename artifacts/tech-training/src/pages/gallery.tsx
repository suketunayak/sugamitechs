import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Training Sessions", "Workshops", "Corporate Events", "Classroom Activities"];

// Placeholders since we're skipping image gen to save time, using colored divs with icons
const images = [
  { id: 1, category: "Training Sessions", title: "AWS Architecture Class" },
  { id: 2, category: "Workshops", title: "Cybersecurity Hackathon" },
  { id: 3, category: "Corporate Events", title: "Tech Leaders Summit" },
  { id: 4, category: "Classroom Activities", title: "React Pair Programming" },
  { id: 5, category: "Training Sessions", title: "Data Engineering Lab" },
  { id: 6, category: "Workshops", title: "AI Model Deployment" },
  { id: 7, category: "Corporate Events", title: "Annual Tech Gala" },
  { id: 8, category: "Classroom Activities", title: "Agile Planning Session" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  const filteredImages = activeCategory === "All" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Photo Gallery</h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed">
            Take a look inside our state-of-the-art training facilities and see our interactive learning environments in action.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-16 bg-background flex-grow">
        <div className="container mx-auto px-4 md:px-8">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                className="rounded-full px-6"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((img) => (
              <div 
                key={img.id}
                className="group relative aspect-square bg-muted rounded-xl overflow-hidden cursor-pointer flex items-center justify-center border hover:border-primary transition-colors"
                onClick={() => setSelectedImage(img)}
              >
                <span className="text-muted-foreground/50 font-medium">Image Placeholder</span>
                
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                  <ZoomIn className="h-8 w-8 text-primary mb-3" />
                  <p className="text-white font-semibold">{img.title}</p>
                  <p className="text-primary-foreground/70 text-sm">{img.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-6 right-6 text-white hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </Button>
          
          <div className="max-w-5xl w-full">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-6">
               <span className="text-muted-foreground font-medium text-2xl">{selectedImage.title}</span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              <p className="text-white/60">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
