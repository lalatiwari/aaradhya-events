import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function MediaLightbox({ activeMedia, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!activeMedia) return null;

  const isVideo = activeMedia.type === 'video';

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Lightbox Controls */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 text-white/80 hover:text-gold p-2 rounded-full bg-black/40 hover:bg-black/80 transition-colors"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-gold p-2.5 rounded-full bg-black/40 hover:bg-black/80 transition-colors"
          aria-label="Previous item"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-gold p-2.5 rounded-full bg-black/40 hover:bg-black/80 transition-colors"
          aria-label="Next item"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Media Viewport */}
      <div 
        className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {isVideo ? (
          <div className="w-full aspect-video rounded-lg overflow-hidden bg-black shadow-2xl">
            <video
              src={activeMedia.data.src}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            >
              Your browser does not support playing this video.
            </video>
          </div>
        ) : (
          <img
            src={activeMedia.data.src}
            alt={activeMedia.data.title}
            onError={(e) => {
              if (activeMedia.data.fallback) {
                e.currentTarget.src = activeMedia.data.fallback;
              }
            }}
            className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl"
          />
        )}

        {/* Title & Metadata */}
        <div className="mt-4 text-center">
          <p className="text-xs uppercase tracking-widest text-gold font-semibold">
            {activeMedia.data.category}
          </p>
          <h3 className="text-base sm:text-lg font-serif font-bold text-cream mt-1">
            {activeMedia.data.title}
          </h3>
        </div>
      </div>
    </div>
  );
}