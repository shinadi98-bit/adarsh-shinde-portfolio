"use client";

import { useState } from "react";

import Navbar            from "@/components/Navbar";
import ActiveTrackBanner from "@/components/ActiveTrackBanner";
import Hero              from "@/components/Hero";
import TrackSelector     from "@/components/TrackSelector";
import About             from "@/components/About";
import Experience        from "@/components/Experience";
import Projects          from "@/components/Projects";
import ProfileTracks     from "@/components/ProfileTracks";
import ResumeVersions    from "@/components/ResumeVersions";
import Skills            from "@/components/Skills";
import Education         from "@/components/Education";
import Contact           from "@/components/Contact";
import Footer            from "@/components/Footer";

export default function PortfolioClient() {
  const [activeTrack, setActiveTrack] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#05070A]">
      <Navbar />
      <ActiveTrackBanner activeTrack={activeTrack} onClear={() => setActiveTrack(null)} />
      <Hero />
      <TrackSelector
        activeTrack={activeTrack}
        onSelect={setActiveTrack}
        onClear={() => setActiveTrack(null)}
      />
      <About />
      <Experience activeTrack={activeTrack} />
      <Projects activeTrack={activeTrack} />
      <ProfileTracks activeTrack={activeTrack} onSelect={setActiveTrack} />
      <ResumeVersions activeTrack={activeTrack} />
      <Skills activeTrack={activeTrack} />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
