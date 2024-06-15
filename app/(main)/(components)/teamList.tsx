// @ts-nocheck

import React from 'react';
import Image from 'next/image';
import pastTeamData from '../(data)/teamData';

const DEFAULT_PROFILE_IMAGE = "/images/blank_profile.png";

const TeamList = () => {
    const currentTeam = pastTeamData.find(team => team.year === 2024);

    return (
        <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center mt-12 px-12">Executive Team - 2024</h2>
            <div className="flex flex-wrap justify-center gap-8 py-8 px-12 xl:px-96">
                {currentTeam.execList.map((person, index) => (
                    <div key={index} className="flex flex-col items-center bg-gray-100 p-6 shadow-lg rounded-lg w-72">
                        <div className="w-36 h-36 mb-4">
                            <Image
                                src={DEFAULT_PROFILE_IMAGE} // Replace with actual image paths
                                alt={person.name}
                                width={144}
                                height={144}
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-semibold">{person.name}</h3>
                        <p className="text-md text-gray-600">{person.role}</p>
                    </div>
                ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center mt-12 px-12">Directors and Subcommittees - 2024</h2>
            <div className="flex flex-wrap justify-center gap-8 py-8 px-12 xl:px-96">
                {currentTeam.directorList.map((director, index) => (
                    <div key={index} className="w-full flex flex-col items-center bg-gray-100 p-6 shadow-lg rounded-lg mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-center">{director.role} Directors</h3>
                        <div className="flex flex-wrap justify-center gap-4 mb-4">
                            {director.directors.map((name, idx) => (
                                <div key={idx} className="flex flex-col items-center w-36">
                                    <div className="w-36 h-36 mb-2">
                                        <Image
                                            src={DEFAULT_PROFILE_IMAGE} // Replace with actual image paths
                                            alt={name}
                                            width={144}
                                            height={144}
                                            className="rounded-lg object-cover"
                                        />
                                    </div>
                                    <p className="text-md text-gray-800 font-medium text-center">{name}</p>
                                </div>
                            ))}
                        </div>
                        <div className="w-full">
                            <p className="text-md font-semibold text-gray-800 text-center">Subcommittee Members:</p>
                            <div className="text-gray-600 text-sm text-center">
                                {currentTeam.subcommittee
                                    .find(sub => sub.role === director.role)
                                    ?.members.join(', ')}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamList;
