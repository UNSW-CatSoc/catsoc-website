import Image from "next/image";
import { Hero } from "./(main)/(components)/hero";

export default function Custom404() {
  return (
    <div>
        <Hero src="/images/placeholder.jpg" text="Uh Oh!!! Error 404 :3" />
    </div>
  );
}
