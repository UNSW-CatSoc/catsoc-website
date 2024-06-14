"use client";

import { FaDiscord, FaTiktok } from "react-icons/fa"; // Importing TikTok and Discord icons from react-icons
import { Facebook, Instagram, Linkedin } from "lucide-react"; // Existing imports from lucide-react
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4">
                <div className="mb-4 md:mb-0 w-full md:w-auto md:flex-1">
                    <h4 className="text-lg font-bold mb-2">Quick Links</h4>
                    <nav className="flex flex-col space-y-2">
                        <Link href="/about" className="hover:underline">About</Link>
                        <Link href="/events" className="hover:underline">Events</Link>
                        <Link href="/resources" className="hover:underline">Resources</Link>
                        <Link href="/contact" className="hover:underline">Contact Us</Link>
                    </nav>
                </div>
                <div className="mb-4 md:mb-0">
                    <h4 className="text-lg font-bold mb-2">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/unswcatsoc" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram className="h-6 w-6 hover:text-gray-400" />
                        </a>
                        <a href="https://discord.com/invite/9WEAJ47NtD" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                            <FaDiscord className="h-6 w-6 hover:text-gray-400" />
                        </a>
                        <a href="https://www.tiktok.com/@unswcatsoc" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <FaTiktok className="h-6 w-6 hover:text-gray-400" />
                        </a>
                        <a href="https://www.facebook.com/unswcatsoc" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook className="h-6 w-6 hover:text-gray-400" />
                        </a>
                        <a href="https://www.linkedin.com/company/unswcatsoc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="h-6 w-6 hover:text-gray-400" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                &copy; {new Date().getFullYear()} UNSW Cat Appreciation Society. All rights reserved.
            </div>
            <div className="mt-4 text-center text-sm px-4">
                <p>Proudly supported by Arc UNSW</p>
                {/* <p className="mt-2">
                    UNSW CatSoc acknowledges the Aboriginal and Torres Strait Islander peoples as the first inhabitants of this nation and the Bedegal people as the Traditional Custodians of the Land where the UNSW Kensington campus is situated. We pay our respects to all Elders past, present, and future.
                </p> */}
            </div>
        </footer>
    );
};
