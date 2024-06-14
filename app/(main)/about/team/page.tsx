import Image from "next/image";
import { Hero } from "../../(components)/hero";
import TeamList from "../../(components)/teamList";

export default function Team() {
  return (
    <div>
        <Hero src="/images/placeholder.jpg" text="Meet the Team" />
        <div className="py-8 px-12 xl:px-96">
            <p className="text-lg md:text-xl mb-4 text-center">
                Our Team
            </p>
            <p className="text-md md:text-lg text-gray-600 text-center">
                The UNSW Cat Appreciation Society team is composed of dedicated members who strive to create a supportive community for all cat enthusiasts. Meet our Executive Team, Directors, and Subcommittee Members who work tirelessly to bring together cat lovers through various events and initiatives.
            </p>
        </div>
        <TeamList />
    </div>
  );
}
