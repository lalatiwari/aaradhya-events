import React, { useState } from 'react';
import { galleryCategories, galleryItems } from '../data/gallery';
import { Maximize2 } from 'lucide-react';

export default function Gallery({ onSelectImage }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary block mb-2">
            Visual Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Photo Gallery
          </h2>
          <div className="gold-ornament w-24 mx-auto mb-4" />
          <p className="text-base text-charcoal/70 font-light">
            Moments from real event executions, stage performances, and official assemblies.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-primary text-gold border border-gold shadow'
                  : 'bg-white text-charcoal/80 border border-charcoal/10 hover:border-gold/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry-Style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(filteredItems, index)}
              className="group relative cursor-pointer overflow-hidden rounded-lg bg-black aspect-square shadow-sm"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSelectImage(filteredItems, index);
              }}
              aria-label={`View ${item.title}`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = item.fallback;
                }}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                <span className="text-[10px] sm:text-xs text-gold font-medium uppercase tracking-wider">
                  {item.category}
                </span>
                <h4 className="text-xs sm:text-sm font-serif font-bold text-cream truncate">
                  {item.title}
                </h4>
                <div className="mt-2 flex items-center gap-1 text-[11px] text-cream/75">
                  <Maximize2 className="w-3 h-3 text-gold" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}