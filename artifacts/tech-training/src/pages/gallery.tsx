import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Award Ceremonies", "Training Sessions", "Corporate Events", "International Deliveries"];

const images = [
  { id: 1,  src: "/gallery-02.jpg", category: "Award Ceremonies",       title: "Microsoft MVP Award",             desc: "Suketu receiving the Microsoft Most Valuable Professional award at Infragistics 2018." },
  { id: 2,  src: "/gallery-06.jpg", category: "Training Sessions",      title: "Keynote & Training Session",      desc: "Suketu delivering a corporate training session at Capitol." },
  { id: 3,  src: "/gallery-16.jpg", category: "Training Sessions",      title: "Microsoft Open Source Talk",      desc: "Presenting 'Microsoft ❤ Open Source' at C# Corner conference — Azure Data Lake Analytics." },
  { id: 4,  src: "/gallery-10.jpg", category: "Training Sessions",      title: "Azure Training — Lab Session",    desc: "Interactive hands-on Azure lab session with enterprise participants." },
  { id: 5,  src: "/gallery-17.jpg", category: "Corporate Events",       title: "Boeing India Training",           desc: "Azure training session delivered to Boeing India engineers." },
  { id: 6,  src: "/gallery-18.jpg", category: "Training Sessions",      title: "Large-Scale Classroom Delivery",  desc: "Full-room enterprise training session with 30+ participants." },
  { id: 7,  src: "/gallery-03.jpg", category: "Corporate Events",       title: "Corporate Team Training",         desc: "Post-training group photo with a corporate team batch." },
  { id: 8,  src: "/gallery-04.jpg", category: "Training Sessions",      title: "Enterprise Batch Session",        desc: "Group photo with engineering batch after completing training." },
  { id: 9,  src: "/gallery-05.jpg", category: "Corporate Events",       title: "Citrix Office Training",          desc: "Training session delivered at Citrix India office." },
  { id: 10, src: "/gallery-07.jpg", category: "Corporate Events",       title: "AON Training Batch",              desc: "Group photo with AON corporate training participants." },
  { id: 11, src: "/gallery-08.jpg", category: "Corporate Events",       title: "Corporate Batch Group Photo",     desc: "Post-training group photo with enterprise batch participants." },
  { id: 12, src: "/gallery-09.jpg", category: "Corporate Events",       title: "Synechron FinTech Training",      desc: "Training at Synechron — Leading FinTech Innovation, 2019." },
  { id: 13, src: "/gallery-11.jpg", category: "International Deliveries", title: "Middle East Tech Conference",  desc: "Attending a global tech conference in the Middle East with Microsoft & Huawei partners." },
  { id: 14, src: "/gallery-12.jpg", category: "International Deliveries", title: "International Classroom",      desc: "International training batch group photo." },
  { id: 15, src: "/gallery-13.jpg", category: "International Deliveries", title: "International Lab Session",    desc: "Hands-on Azure lab delivery to an international enterprise team." },
  { id: 16, src: "/gallery-14.jpg", category: "International Deliveries", title: "Azure Classroom — International", desc: "Suketu presenting Azure content to an international batch." },
  { id: 17, src: "/gallery-15.jpg", category: "International Deliveries", title: "Global Enterprise Training",   desc: "Full-room international training session with Azure labs in progress." },
  { id: 18, src: "/gallery-19.jpg", category: "Corporate Events",       title: "Microsoft Event — Chandigarh University", desc: "At Chandigarh University for a Microsoft event with global trainers." },
  { id: 19, src: "/gallery-01.jpg", category: "Award Ceremonies",       title: "Infragistics Speaker 2018",       desc: "At Infragistics 2018 conference as a Speaker — with fellow technology professionals." },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((img) => (
              <div
                key={img.id}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border border-border hover:border-primary shadow-sm hover:shadow-lg transition-all duration-300"
                onClick={() => openLightbox(img.id)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <ZoomIn className="h-8 w-8 text-primary mb-3" />
                  <p className="text-white font-semibold text-sm leading-tight">{img.title}</p>
                  <p className="text-primary-foreground/70 text-xs mt-1">{img.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
            onClick={() => setSelectedIdx(null)}
          >
            <X className="h-8 w-8" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 text-white/70 hover:text-white transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl w-full flex flex-col items-center gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={selected.title}
              className="max-h-[70vh] w-auto rounded-xl shadow-2xl object-contain"
            />
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-1">{selected.title}</h3>
              <p className="text-white/60 text-sm max-w-xl">{selected.desc}</p>
              <p className="text-primary text-xs mt-2 font-medium uppercase tracking-wider">{selected.category}</p>
            </div>
            <p className="text-white/30 text-xs">{selectedIdx! + 1} / {filtered.length}</p>
          </div>

          {/* Next */}
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
