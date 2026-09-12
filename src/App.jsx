import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import GovernmentEvents from './components/GovernmentEvents';
import Performances from './components/Performances';
import ArtistTeam from './components/ArtistTeam';
import WhyChooseUs from './components/WhyChooseUs';
import EventHighlights from './components/EventHighlights';
import Gallery from './components/Gallery';
import VideoGallery from './components/VideoGallery';
import MediaLightbox from './components/MediaLightbox';
import HowWeWork from './components/HowWeWork';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [activeMedia, setActiveMedia] = useState(null);
  const [galleryState, setGalleryState] = useState({ list: [], index: 0 });

  const handleSelectImage = (list, index) => {
    setGalleryState({ list, index });
    setActiveMedia({
      type: 'image',
      data: list[index]
    });
  };

  const handleNextImage = () => {
    if (galleryState.list.length === 0) return;
    const nextIdx = (galleryState.index + 1) % galleryState.list.length;
    setGalleryState({ ...galleryState, index: nextIdx });
    setActiveMedia({
      type: 'image',
      data: galleryState.list[nextIdx]
    });
  };

  const handlePrevImage = () => {
    if (galleryState.list.length === 0) return;
    const prevIdx = (galleryState.index - 1 + galleryState.list.length) % galleryState.list.length;
    setGalleryState({ ...galleryState, index: prevIdx });
    setActiveMedia({
      type: 'image',
      data: galleryState.list[prevIdx]
    });
  };

  const handleSelectVideo = (video) => {
    setActiveMedia({
      type: 'video',
      data: video
    });
  };

  const handleCloseLightbox = () => {
    setActiveMedia(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <GovernmentEvents />
        <Performances />
        <ArtistTeam />
        <WhyChooseUs />
        <EventHighlights />
        <Gallery onSelectImage={handleSelectImage} />
        <VideoGallery onSelectVideo={handleSelectVideo} />
        <HowWeWork />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      
      <FloatingActions />

      <MediaLightbox
        activeMedia={activeMedia}
        onClose={handleCloseLightbox}
        onNext={activeMedia?.type === 'image' ? handleNextImage : null}
        onPrev={activeMedia?.type === 'image' ? handlePrevImage : null}
      />
    </div>
  );
}