"use client";
import { DollarSign, Home, LayoutGrid, List, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function PropertiesPage() {

    const [view, setView] = useState("grid");


    return (
        <div className="min-h-screen text-white px-6 py-8 myborder rounded-lg bg-neutral-800">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold">My Properties</h1>
                    <p className="text-gray-400 text-sm mt-1">
                        Manage and track your real estate portfolio
                    </p>
                </div>
                <Link href="/dashboard/addproperty" className="bg-[var(--brandBg,#00d8ff)] hover:opacity-90 transition text-black font-semibold px-5 py-2 rounded-md">
                    + Add Property
                </Link>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-neutral-950 myborder rounded-xl p-4 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                        <Home size={18} />
                        <span>Total Properties</span>
                    </div>
                    <p className="text-3xl font-bold">0</p>
                </div>

                <div className="bg-neutral-950 myborder rounded-xl p-4 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                        <DollarSign size={18} />
                        <span>Total Value</span>
                    </div>
                    <p className="text-3xl font-bold">$0.0M</p>
                </div>

                <div className="bg-neutral-950 myborder rounded-xl p-4 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                        <DollarSign size={18} />
                        <span>Avg. Value</span>
                    </div>
                    <p className="text-3xl font-bold">$0K</p>
                </div>

                <div className="bg-neutral-950 myborder rounded-xl p-4 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-gray-400 mb-1">
                        <MapPin size={18} />
                        <span>Cities</span>
                    </div>
                    <p className="text-3xl font-bold">0</p>
                </div>
            </div>

            {/* Search + Filters */}
            <div className="flex flex-col md:flex-row items-center gap-3 mb-10">
                <input
                    type="text"
                    placeholder="Search properties..."
                    className="w-full md:flex-1 bg-neutral-950 myborder rounded-lg px-4 py-2.5 focus:outline-none focus:border-cyan-400 placeholder-gray-500"
                />
                <select className="bg-neutral-950 myborder rounded-lg px-3 py-2 text-gray-300">
                    <option>Sort by Date</option>
                    <option>Sort by Name</option>
                </select>
                <select className="bg-neutral-950 myborder rounded-lg px-3 py-2 text-gray-300">
                    <option>All Types</option>
                </select>
                <select className="bg-neutral-950 myborder rounded-lg px-3 py-2 text-gray-300">
                    <option>All Cities</option>
                </select>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setView("grid")}
                        className={`p-2 rounded-md border ${view === "grid" ? "border-cyan-400" : "border-gray-700"
                            }`}
                    >
                        <LayoutGrid size={18} />
                    </button>
                    <button
                        onClick={() => setView("list")}
                        className={`p-2 rounded-md border ${view === "list" ? "border-cyan-400" : "border-gray-700"
                            }`}
                    >
                        <List size={18} />
                    </button>
                </div>
            </div>

            {/* Empty State */}
            <div className="flex flex-col items-center justify-center text-center mt-24">
                <Home size={48} className="text-gray-500 mb-4" />
                <h2 className="text-lg font-semibold mb-1">No properties found</h2>
                <p className="text-gray-500 mb-6 text-sm">
                    Get started by adding your first property
                </p>
                <Link href="/dashboard/addproperty" className="bg-[var(--brandBg,#00d8ff)] hover:opacity-90 transition text-black font-semibold px-5 py-2 rounded-md">
                    Add Your First Property
                </Link>
            </div>
        </div>
    );
}



export default PropertiesPage;