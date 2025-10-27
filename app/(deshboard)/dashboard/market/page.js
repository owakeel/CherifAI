"use client";

import {
    Clock,
    DollarSign,
    Home,
    MapPin,
    Search,
    SlidersHorizontal,
    TrendingUp,
} from "lucide-react";
import { useState } from "react";

/**
 * MarketWatchPage.jsx — JavaScript + Tailwind (Next.js)
 * - Search bar (location, budget, type)
 * - Map heat‑map placeholder with Filters
 * - Right rail list of trending ZIP codes
 * - City cards grid (Avg Price, Avg Rent, Inventory, Days on Market)
 * - Portfolio vs Market comparison banner
 *
 * NOTE: Uses `brandBg` and `.brandColor` utility classes for accents,
 * per your theming preference.
 */
export default function MarketWatchPage() {
    const [query, setQuery] = useState({ city: "Miami Beach", budget: "400000", type: "Condo" });

    const zips = [
        { zip: "33139", city: "Miami Beach, FL", yoy: +18.5, tag: "Very Hot" },
        { zip: "78701", city: "Austin, TX", yoy: +15.2, tag: "Hot" },
        { zip: "85004", city: "Phoenix, AZ", yoy: +14.8, tag: "Hot" },
        { zip: "80202", city: "Denver, CO", yoy: +12.3, tag: "Trending" },
        { zip: "37203", city: "Nashville, TN", yoy: +10.1, tag: "Rising" },
    ];

    const cities = [
        {
            title: "Miami, FL 33139",
            appreciation: "+15.2% appreciation",
            price: 485000,
            priceChange: "+8.5%",
            rent: 2850,
            rentChange: "+12.3%",
            inventory: 245,
            dom: 32,
        },
        {
            title: "Austin, TX 78701",
            appreciation: "+12.8% appreciation",
            price: 625000,
            priceChange: "+6.2%",
            rent: 3200,
            rentChange: "+9.8%",
            inventory: 189,
            dom: 28,
        },
        {
            title: "Phoenix, AZ 85004",
            appreciation: "+18.6% appreciation",
            price: 395000,
            priceChange: "+11.4%",
            rent: 2100,
            rentChange: "+14.5%",
            inventory: 312,
            dom: 25,
        },
        {
            title: "Denver, CO 80202",
            appreciation: "9.5% appreciation",
            price: 545000,
            priceChange: "+4.8%",
            rent: 2650,
            rentChange: "+7.2%",
            inventory: 156,
            dom: 35,
        },
    ];

    const portfolio = { value: 1250000, yoy: "+9.2% YoY", marketGrowth: "11.5%", perf: "Below", delta: "2.3% behind market" };

    return (
        <main className="min-h-screen bg-neutral-800 myborder rounded-lg text-neutral-100">
            <div className="mx-auto max-w-6xl px-4 py-6">
                {/* Title */}
                <div className="mb-4 flex items-center gap-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg myborder bg-neutral-900 ring-1 ring-inset ring-neutral-800">
                        <TrendingUp className="h-4 w-4 brandColor" />
                    </div>
                    <h1 className="text-2xl font-extrabold tracking-tight">Market Watch</h1>
                </div>
                <p className="mb-4 text-sm text-neutral-300">Live market data, trends, and investment opportunities</p>

                {/* Search bar */}
                <div className="mb-6 flex w-full flex-col gap-3 rounded-2xl myborder bg-neutral-800 p-3 md:flex-row md:items-center">
                    <input
                        className="flex-1 rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none placeholder:text-neutral-500 focus:border-neutral-600"
                        placeholder="Enter city or ZIP"
                        value={query.city}
                        onChange={(e) => setQuery({ ...query, city: e.target.value })}
                    />
                    <input
                        className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:border-neutral-600 md:w-44"
                        value={query.budget}
                        onChange={(e) => setQuery({ ...query, budget: e.target.value })}
                    />
                    <select
                        className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm outline-none focus:border-neutral-600 md:w-44"
                        value={query.type}
                        onChange={(e) => setQuery({ ...query, type: e.target.value })}
                    >
                        <option>Condo</option>
                        <option>Single Family</option>
                        <option>Townhome</option>
                        <option>Multi‑Family</option>
                    </select>
                    <button className="brandBg inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-neutral-900 hover:opacity-90">
                        <Search className="h-4 w-4" /> Search
                    </button>
                </div>

                {/* Map & Trending */}
                <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
                    <div className="rounded-2xl myborder bg-neutral-900 p-4">
                        <div className="mb-3 flex items-center justify-between">
                            <h3 className="text-base font-semibold">Market Heat Map</h3>
                            <button className="inline-flex items-center gap-2 rounded-lg myborder bg-neutral-900 px-3 py-1.5 text-xs hover:border-neutral-700 hover:bg-neutral-800">
                                <SlidersHorizontal className="h-4 w-4" /> Filters
                            </button>
                        </div>
                        <div className="flex h-72 items-center justify-center rounded-xl myborder bg-neutral-950">
                            <div className="text-center text-neutral-400">
                                <MapPin className="mx-auto mb-2 h-8 w-8 brandColor" />
                                <div className="font-medium">Interactive map coming soon</div>
                                <div className="text-xs">Visualize market trends across regions</div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl myborder bg-neutral-900 p-4">
                        <h3 className="mb-3 text-base font-semibold">Trending ZIP Codes</h3>
                        <div className="space-y-3">
                            {zips.map((z) => (
                                <div key={z.zip} className="flex items-start justify-between rounded-xl myborder bg-neutral-950 p-3">
                                    <div>
                                        <div className="font-semibold">{z.zip}</div>
                                        <div className="text-xs text-neutral-400">{z.city}</div>
                                        <div className="mt-1 text-xs text-emerald-400">↑ {z.yoy}% YoY Growth</div>
                                    </div>
                                    <div className="text-xs text-neutral-500">{z.tag}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* City cards grid */}
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {cities.map((c, i) => (
                        <CityCard key={i} c={c} />
                    ))}
                </div>

                {/* Comparison banner */}
                <div className="mt-8 rounded-2xl myborder bg-gradient-to-b from-neutral-950 to-neutral-950 p-5">
                    <h3 className="mb-3 text-base font-semibold">Compare My Portfolio to Market</h3>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div>
                            <div className="text-xs text-neutral-400">Your Portfolio Value</div>
                            <div className="mt-1 text-3xl font-extrabold">{money(portfolio.value)}</div>
                            <div className="mt-1 text-xs text-emerald-400">↑ {portfolio.yoy}</div>
                        </div>
                        <div>
                            <div className="text-xs text-neutral-400">Market Average Growth</div>
                            <div className="mt-1 text-3xl font-extrabold brandColor">{portfolio.marketGrowth}</div>
                            <div className="mt-1 text-xs text-neutral-400">Across tracked markets</div>
                        </div>
                        <div>
                            <div className="text-xs text-neutral-400">Performance</div>
                            <div className="mt-1 text-3xl font-extrabold text-yellow-300">{portfolio.perf}</div>
                            <div className="mt-1 text-xs text-neutral-400">{portfolio.delta}</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

/* ----------------------------- Pieces ----------------------------- */
function CardStat({ icon, label, value, hint }) {
    return (
        <div className="rounded-xl myborder bg-neutral-950 p-3">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
                {icon}
                {label}
            </div>
            <div className="mt-2 text-xl font-extrabold">{value}</div>
            {hint && <div className="mt-1 text-xs text-emerald-400">{hint}</div>}
        </div>
    );
}

function CityCard({ c }) {
    return (
        <div className="rounded-2xl myborder bg-neutral-900 p-4">
            <div className="mb-3">
                <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 brandColor" />
                    <div className="text-lg font-semibold">{c.title}</div>
                </div>
                <div className="mt-1 text-xs text-emerald-400">↑ {c.appreciation}</div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <CardStat icon={<DollarSign className="h-4 w-4" />} label="Avg Price" value={money(c.price)} hint={c.priceChange} />
                <CardStat icon={<Home className="h-4 w-4" />} label="Avg Rent" value={money(c.rent)} hint={c.rentChange} />
                <CardStat icon={<TrendingUp className="h-4 w-4" />} label="Inventory" value={c.inventory} hint="Active listings" />
                <CardStat icon={<Clock className="h-4 w-4" />} label="Days on Market" value={c.dom} hint="Average" />
            </div>
        </div>
    );
}

/* ----------------------------- utils ----------------------------- */
function money(x) {
    try {
        return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(x || 0);
    } catch {
        return `$${Math.round(x || 0).toLocaleString()}`;
    }
}
