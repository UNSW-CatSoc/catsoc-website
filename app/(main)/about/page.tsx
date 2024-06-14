import Image from "next/image";
import { Hero } from "../(components)/hero";
import CatSocInfoCard from "../(components)/aboutInfo";

export default function About() {
  return (
    <div>
        <Hero src="/images/placeholder.jpg" text="About Us" />
        <div className="py-8 px-8"><CatSocInfoCard /></div>
        
    </div>
  );
}
