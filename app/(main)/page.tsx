import Image from "next/image";
import { Hero } from "./(components)/hero";
import { Footer } from "./(components)/footer";
import { ShortDescription } from "./(components)/description";
import { CatOfTheWeek } from "./(components)/catoftheweek";

export default function Home() {
  return (
    <div>
        <Hero src="/images/placeholder.jpg" text="Welcome to the UNSW Cat Appreciation Society!" />
        <ShortDescription />
        <CatOfTheWeek />
    </div>
  );
}
