import Image from "next/image";
import React from "react";

export const CatOfTheWeek = () => {
    return (
        <div className="bg-white py-8 px-4 md:px-12 lg:px-24 text-center shadow-lg rounded-lg my-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cat of the Week</h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="mb-4 md:mb-0 md:mr-8">
                    <Image
                        src="/images/bmo.jpg" // Replace with your image path
                        alt="Cat of the Week"
                        width={300}
                        height={300}
                        className="rounded-full"
                    />
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-2">BMO</h3> {/* Cat's name */}
                    <p className="text-md md:text-lg text-gray-600">
                        BMO is super playful and loves begging strangers to be fed despite eating 3 times a day.
                    </p>
                </div>
            </div>
        </div>
    );
};
