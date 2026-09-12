import React, { useState } from 'react';
import { videoCategories, videosData } from '../data/videos';
import { Play } from 'lucide-react';

export default function VideoGallery({ onSelectVideo }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos = selectedCategory === "All"
    ? videosData
    : videosData.filter(item => item.category === selectedCategory);

  return (
    <section id="videos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary block mb-2">
            Stage In Motion
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Video Gallery
          </h2>
          <div className="gold-ornament w-24 mx-auto mb-4" />
          <p className="text-base text-charcoal/70 font-light">
            Watch real stage performances, theatrical sequences, and musical recitals recorded on site.
          </p>
        </div>

        {/* Video Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {videoCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-primary text-gold border border-gold shadow'
                  : 'bg-cream text-charcoal/80 border border-charcoal/10 hover:border-gold/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => onSelectVideo(video)}
              className="group cursor-pointer rounded-lg overflow-hidden border border-charcoal/10 bg-cream/20 hover:border-gold/70 transition-all duration-300 shadow-sm hover:shadow-md"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSelectVideo(video);
              }}
              aria-label={`Play video: ${video.title}`}
            >
              {/* Poster Container with Play Icon */}
              <div className="relative aspect-video bg-black overflow-hidden">
                <img
                  src={video.poster}
                  alt={video.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = video.fallbackPoster;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/90 text-gold flex items-center justify-center border border-gold shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <span className="text-[11px] font-semibold text-primary uppercase tracking-wider block mb-1">
                  {video.category}
                </span>
                <h4 className="font-serif font-bold text-sm text-charcoal group-hover:text-primary transition-colors line-clamp-1">
                  {video.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}