import Image from "next/image";
import React from "react";

export const Hero = ({ src, text }) => {
    return (
        <div className="relative w-full h-[70vh]">
            <Image
                src={src}
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <div className="px-12 xl:px-96 text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">{text}</h1>
                </div>
            </div>
        </div>
    );
};
