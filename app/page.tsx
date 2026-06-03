import Navbar        from "@/components/Navbar";
import Hero           from "@/components/Hero";
import About          from "@/components/About";
import Experience     from "@/components/Experience";
import Projects       from "@/components/Projects";
import ProfileTracks  from "@/components/ProfileTracks";
import ResumeVersions from "@/components/ResumeVersions";
import Skills         from "@/components/Skills";
import Education      from "@/components/Education";
import Contact        from "@/components/Contact";
import Footer         from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070A]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <ProfileTracks />
      <ResumeVersions />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
