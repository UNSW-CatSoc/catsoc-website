import Image from "next/image";

export const Hero = () => {
    return (
        <div className="relative w-full h-screen">
            <Image
                src="/images/placeholder.jpg"
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Welcome to the UNSW Cat Appreciation Society!</h1>
                <p className="text-white text-lg md:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    );
};
