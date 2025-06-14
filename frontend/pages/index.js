import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import News from "@/components/News";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <News />
    </div>
  );
}
