import Image from "next/image";
import { Hero } from "./(components)/hero";
import { Footer } from "./(components)/footer";
import { ShortDescription } from "./(components)/description";
import { CatOfTheWeek } from "./(components)/catoftheweek";

export default function Home() {
  return (
    <div>
        <Hero src="/images/placeholder.jpg" text="Welcome to the UNSW Cat Appreciation Society!" buttonLink="https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F00003WjedWQAR" buttonText="Join Us!" />
        <ShortDescription />
        <CatOfTheWeek />
    </div>
  );
}
