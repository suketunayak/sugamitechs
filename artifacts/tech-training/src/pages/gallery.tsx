import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Award Ceremonies", "Training Sessions", "Corporate Events", "International Deliveries"];

const images = [
  { id: 1,  src: "/gallery-02.jpg", category: "Award Ceremonies" },
  { id: 2,  src: "/gallery-16.jpg", category: "Training Sessions" },
  { id: 3,  src: "/gallery-06.jpg", category: "Training Sessions" },
  { id: 4,  src: "/gallery-10.jpg", category: "Training Sessions" },
  { id: 5,  src: "/gallery-17.jpg", category: "Corporate Events" },
  { id: 6,  src: "/gallery-18.jpg", category: "Training Sessions" },
  { id: 7,  src: "/gallery-03.jpg", category: "Corporate Events" },
  { id: 8,  src: "/gallery-04.jpg", category: "Training Sessions" },
  { id: 9,  src: "/gallery-05.jpg", category: "Corporate Events" },
  { id: 10, src: "/gallery-07.jpg", category: "Corporate Events" },
  { id: 11, src: "/gallery-08.jpg", category: "Corporate Events" },
  { id: 12, src: "/gallery-09.jpg", category: "Corporate Events" },
  { id: 13, src: "/gallery-11.jpg", category: "International Deliveries" },
  { id: 14, src: "/gallery-12.jpg", category: "International Deliveries" },
  { id: 15, src: "/gallery-13.jpg", category: "International Deliveries" },
  { id: 16, src: "/gallery-14.jpg", category: "International Deliveries" },
  { id: 17, src: "/gallery-15.jpg", category: "International Deliveries" },
  { id: 18, src: "/gallery-19.jpg", category: "Corporate Events" },
  { id: 19, src: "/gallery-01.jpg", category: "Award Ceremonies" },
  { id: 20, src: "/gallery-20.jpg", category: "Training Sessions" },
  { id: 21, src: "/gallery-21.jpg", category: "Training Sessions" },
  { id: 22, src: "/gallery-22.jpg", category: "Training Sessions" },
  { id: 23, src: "/gallery-23.jpg", category: "Corporate Events" },
  { id: 24, src: "/gallery-24.jpg", category: "Corporate Events" },
  { id: 25, src: "/gallery-25.jpg", category: "Award Ceremonies" },
  { id: 26, src: "/gallery-26.jpg", category: "Award Ceremonies" },
  { id: 27, src: "/gallery-27.jpg", category: "Training Sessions" },
  { id: 28, src: "/gallery-28.jpg", category: "Training Sessions" },
  { id: 29, src: "/gallery-29.jpg", category: "Corporate Events" },
  { id: 30, src: "/gallery-30.jpg", category: "Corporate Events" },
  { id: 31, src: "/gallery-31.jpg", category: "Corporate Events" },
  { id: 32, src: "/gallery-32.jpg", category: "Corporate Events" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? images
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (id: number) => {
    setSelectedIdx(filtered.findIndex(img => img.id === id));
  };

  const prev = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx - 1 + filtered.length) % filtered.length);
  };

  const next = () => {
    if (selectedIdx === null) return;
    setSelectedIdx((selectedIdx + 1) % filtered.length);
  };

  const selected = selectedIdx !== null ? filtered[selectedIdx] : null;

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Photo Gallery</h1>
          <p className="text-lg md:text-xl text-secondary-foreground/80 leading-relaxed">
            Behind-the-scenes moments from training sessions, award ceremonies, corporate deliveries, and international engagements across the globe.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-16 bg-background flex-grow">
        <div className="container mx-auto px-4 md:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map((img) => (
              <div
                key={img.id}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-border hover:border-primary shadow-sm hover:shadow-lg transition-all duration-300"
                onClick={() => openLightbox(img.id)}
              >
                <img
                  src={img.src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/97 flex items-center justify-center p-4"
          onClick={() => setSelectedIdx(null)}
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
            onClick={() => setSelectedIdx(null)}
          >
            <X className="h-8 w-8" />
          </button>

          <button
            className="absolute left-4 text-white/70 hover:text-white transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <div
            className="max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt=""
              className="max-h-[85vh] w-auto rounded-xl shadow-2xl object-contain"
            />
            <p className="text-white/30 text-xs mt-4">{selectedIdx! + 1} / {filtered.length}</p>
          </div>

          <button
            className="absolute right-4 text-white/70 hover:text-white transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </div>
  );
}
