import Image from "next/image";
import { Hero } from "../(components)/hero";
import ContactCard from "../(components)/contact";


export default function Contact() {
  return (
    <div>
        <Hero src="/images/placeholder.jpg" text="Contact Us" />
        <div className="py-8 px-8"><ContactCard /></div>
        
    </div>
  );
}
