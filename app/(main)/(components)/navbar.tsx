"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ShoppingCartIcon, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleResourcesDropdown = () => {
        setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
    };

    return (
        <div>
            <div className={cn(
                "z-50 fixed top-0 flex items-center justify-between w-full p-4 xl:px-96 bg-white",
                "border-b"
            )}>
                <Link className="font-bold text-left mr-6" href={"/"}><Logo /></Link>
                <div className="flex items-center ml-auto gap-x-2 md:hidden">
                    <button onClick={toggleSidebar} className="text-gray-600">
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
                <div className="hidden md:flex items-center ml-auto gap-x-2">
                    <Link className="px-2" href={"/"}>Home</Link>
                    <div className="relative px-2 flex items-center">
                        <button onClick={toggleDropdown} className="text-gray-800 flex items-center">
                            About
                            {isDropdownOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                                <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-t-lg" href={"/about"}>About CatSoc</Link>
                                <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href={"/about/team"}>Meet the Team</Link>
                                <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-b-lg" href={"https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F00003WjedWQAR"}>Join Us</Link>
                            </div>
                        )}
                    </div>
                    <Link className="px-2" href={"/events"}>Events</Link>
                    <div className="relative px-2 flex items-center">
                        <button onClick={toggleResourcesDropdown} className="text-gray-800 flex items-center">
                            Resources
                            {isResourcesDropdownOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
                        </button>
                        {isResourcesDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                                <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-t-lg" href={"/guide-for-adoption"}>Guide for Adoption</Link>
                                <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href={"/guide-for-care"}>Guide for Care</Link>
                                <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded-b-lg" href={"/animal-shelters"}>Animal Shelters</Link>
                            </div>
                        )}
                    </div>
                    <Link className="px-2" href={"/contact"}>Contact Us</Link>
                    <Link className="px-2" href={"/coming-soon"}><ShoppingCartIcon /></Link>
                </div>
            </div>
            <div className={`fixed inset-y-0 left-0 w-64 bg-white p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden overflow-y-auto`}>
                <nav className="flex flex-col space-y-4">
                    <Link className="px-2" href={"/"}>Home</Link>
                    <button className="px-2 text-left flex items-center" onClick={toggleDropdown}>
                        About
                        {isDropdownOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
                    </button>
                    {isDropdownOpen && (
                        <div className="pl-4">
                            <Link className="block px-2 py-2 text-gray-800 hover:bg-gray-200 rounded-t-lg" href={"/about"} onClick={toggleSidebar}>About CatSoc</Link>
                            <Link className="block px-2 py-2 text-gray-800 hover:bg-gray-200" href={"/about/team"} onClick={toggleSidebar}>Meet the Team</Link>
                            <Link className="block px-2 py-2 text-gray-800 hover:bg-gray-200 rounded-b-lg" href={"https://member.arc.unsw.edu.au/s/clubdetail?clubid=0016F00003WjedWQAR"} onClick={toggleSidebar}>Join Us</Link>
                        </div>
                    )}
                    <Link className="px-2" href={"/events"} onClick={toggleSidebar}>Events</Link>
                    <button className="px-2 text-left flex items-center" onClick={toggleResourcesDropdown}>
                        Resources
                        {isResourcesDropdownOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
                    </button>
                    {isResourcesDropdownOpen && (
                        <div className="pl-4">
                            <Link className="block px-2 py-2 text-gray-800 hover:bg-gray-200 rounded-t-lg" href={"/guide-for-adoption"} onClick={toggleSidebar}>Guide for Adoption</Link>
                            <Link className="block px-2 py-2 text-gray-800 hover:bg-gray-200" href={"/guide-for-care"} onClick={toggleSidebar}>Guide for Care</Link>
                            <Link className="block px-2 py-2 text-gray-800 hover:bg-gray-200 rounded-b-lg" href={"/animal-shelters"} onClick={toggleSidebar}>Animal Shelters</Link>
                        </div>
                    )}
                    <Link className="px-2" href={"/contact"} onClick={toggleSidebar}>Contact Us</Link>
                    <Link className="px-2" href={"/coming-soon"} onClick={toggleSidebar}><ShoppingCartIcon /></Link>
                </nav>
            </div>
        </div>
    );
}
