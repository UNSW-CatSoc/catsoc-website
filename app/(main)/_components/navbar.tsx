"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ShoppingCartIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import { Logo } from "./logo";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
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
                    <Link className="px-2" href={"/about"}>About</Link>
                    <Link className="px-2" href={"/events"}>Events</Link>
                    <Link className="px-2" href={"/resources"}>Resources</Link>
                    <Link className="px-2" href={"/contact"}>Contact Us</Link>
                    <Link className="px-2" href={"/contact"}><ShoppingCartIcon /></Link>
                </div>
            </div>
            <div className={`fixed inset-y-0 left-0 w-64 bg-white p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden overflow-y-auto`}>
                <nav className="flex flex-col space-y-4">
                    <Link className="px-2" href={"/about"} onClick={toggleSidebar}>About</Link>
                    <Link className="px-2" href={"/events"} onClick={toggleSidebar}>Events</Link>
                    <Link className="px-2" href={"/resources"} onClick={toggleSidebar}>Resources</Link>
                    <Link className="px-2" href={"/contact"} onClick={toggleSidebar}>Contact Us</Link>
                    <Link className="px-2" href={"/contact"} onClick={toggleSidebar}><ShoppingCartIcon /></Link>
                </nav>
            </div>
        </div>
    );
}
