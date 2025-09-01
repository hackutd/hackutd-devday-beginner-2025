import React from "react";
import { User, Settings } from "lucide-react";

function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-gray-100 border-b border-gray-300">
            <div className="flex gap-4">
                <Settings size={24} />
            </div>
            <div className="font-bold text-3xl">DevGPA</div>
            <div className="flex gap-4">
                <User size={24} />
            </div>
        </nav>
    );
}

export default Navbar;
