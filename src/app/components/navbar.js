import React from "react";
import Link from "next/link";
import { User, Settings } from "lucide-react";

function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-gray-100 border-b border-gray-300">
            <div className="flex gap-4">
                <Link href="/settings">
                    <Settings size={24} className="cursor-pointer" />
                </Link>
            </div>

            <div className="font-bold text-3xl">
                <Link href="/">
                    <span className="cursor-pointer">DevGPA</span>
                </Link>
            </div>

            <div className="flex gap-4">
                <Link href="/profile">
                    <User size={24} className="cursor-pointer" />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
