import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MembersSection from "@/components/MembersSection";
import TriviaSection from "@/components/TriviaSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <MembersSection />
      <TriviaSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
