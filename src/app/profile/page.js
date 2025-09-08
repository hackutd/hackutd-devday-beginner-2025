import React from "react";
import Navbar from "../components/navbar";

export default function Profile() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto mt-10 p-6 bg-white shadow rounded">
                <h1 className="text-2xl font-bold mb-4text-gray-900">Profile</h1>
                <p className="text-gray-900">View and edit your profile information here.</p>
                {/* Add your profile components here */}
            </div>
        </div>
    );
}
