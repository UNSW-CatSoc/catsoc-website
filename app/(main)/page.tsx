import Image from "next/image";
import { Hero } from "./_components/hero";
import { Footer } from "./_components/footer";
import { ShortDescription } from "./_components/description";
import { CatOfTheWeek } from "./_components/catoftheweek";

export default function Home() {
  return (
    <div>
        <Hero />
        <ShortDescription />
        <CatOfTheWeek />
        <Footer />
    </div>
  );
}
