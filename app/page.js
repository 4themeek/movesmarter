import Hero from "@/components/Hero";
import DataStrip from "@/components/DataStrip";
import Pillars from "@/components/Pillars";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <DataStrip />
      <Pillars />
      <Amenities />
      <Location />
      <CTA />
      <Footer />
    </main>
  );
}
