import Image from "next/image";
import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

// Sets the image for the navbar icon (top left corner)
export const Logo = () => {
    return (
        <div className="flex items-center gap-x-2">
            <div className="hidden md:block">
                <Image
                    src="/images/logo/long_black.png"
                    height="200"
                    width="200"
                    alt="logo"
                />
            </div>
            <div className="block md:hidden">
                <Image
                    src="/images/logo/logo.png"
                    height="45"
                    width="45"
                    alt="logo"
                />
            </div>
        </div>
    );
};
