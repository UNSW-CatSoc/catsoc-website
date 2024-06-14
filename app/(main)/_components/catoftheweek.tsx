import Image from "next/image";
import React from "react";

export const CatOfTheWeek = () => {
    return (
        <div className="bg-gray-100 py-8 px-12 md:px-24 lg:px-32 xl:px-48 shadow-lg rounded-lg my-8 mx-4 md:mx-auto max-w-screen-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Cat of the Week</h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-4 md:mb-0 md:mr-8">
                    <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
                        <Image
                            src="/images/bmo.jpg" // Replace with your image path
                            alt="Cat of the Week"
                            width={256}
                            height={256}
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-2xl font-semibold mb-2">BMO</h3> {/* Cat's name */}
                    <p className="text-md md:text-lg text-gray-600">
                        BMO is super playful and loves begging strangers to be fed despite eating 3 times a day.
                    </p>
                </div>
            </div>
        </div>
    );
};
