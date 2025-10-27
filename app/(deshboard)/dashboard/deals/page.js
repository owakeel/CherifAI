"use client";

import {
    BarChart3,
    Bookmark,
    Calculator,
    CheckCircle,
    DollarSign,
    Home,
    Percent,
    Plus,
    Search,
    TrendingUp,
} from "lucide-react";
import { useState } from "react";

/**
 * DealAnalyzerPage.jsx — JavaScript + Tailwind (Next.js)
 * Matches your screenshots: search bar, property header, KPI tiles,
 * monthly projections, AI recommendation, and comparable properties.
 * Pure Tailwind, responsive, no external chart libs.
 */
export default function DealAnalyzerPage() {
    const [url, setUrl] = useState("");

    // Demo output values — wire these to your backend later
    const deal = {
        address: "123 Main St, Miami, FL 33139",
        facts: ["3 bed", "2 bath", "1,850 sqft", "Built 2015"],
        purchasePrice: 485000,
        roi: 14.5,
        capRate: 6.8,
        rentalYield: 8.2,
        cashFlow: 200,
        monthly: {
            income: 3200,
            mortgage: 2150,
            expenses: 850,
            net: 200,
        },
        ai: {
            verdict: "BUY",
            strength: "Strong investment opportunity",
            riskLabel: "Low",
            riskPct: 0.2, // 0..1
            notes:
                "This property shows strong fundamentals with a 14.5% ROI and positive cash flow. The location has seen consistent appreciation, and rental demand is high. Consider this for a buy-and-hold strategy.",
        },
        comps: [
            { addr: "125 Main St", price: 495000, roi: 13.8 },
            { addr: "130 Oak Ave", price: 475000, roi: 15.2 },
            { addr: "145 Pine St", price: 510000, roi: 12.5 },
        ],
    };

    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-100">
            <div className="px-4 py-6">
                {/* Title */}
                <div className="mb-4 flex items-center gap-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-inset ring-neutral-800">
                        <Calculator className="h-4 w-4 brandColor" />
                    </div>
                    <h1 className="text-2xl font-extrabold tracking-tight">Deal Analyzer</h1>
                </div>
                <p className="mb-3 text-sm text-neutral-300">
                    Paste a Zillow or property URL to get instant AI‑powered investment analysis
                </p>

                {/* Search bar */}
                <div className="mb-6 flex w-full items-center gap-3 rounded-2xl myborder bg-neutral-900 p-2">
                    <div className="relative flex-1">
                        <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                        <input
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="https://zillow.com/..."
                            className="w-full rounded-xl border border-transparent bg-neutral-950 py-3 pl-9 pr-3 text-sm outline-none placeholder:text-neutral-500 focus:border-neutral-700"
                        />
                    </div>
                    <button className="shrink-0 rounded-xl brandBg px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-teal-400">
                        Analyze Property
                    </button>
                </div>

                {/* Property header */}
                <Card className="mb-6">
                    <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                        <div>
                            <h2 className="text-xl font-extrabold tracking-tight">{deal.address}</h2>
                            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-neutral-400">
                                {deal.facts.map((f, i) => (
                                    <span key={i}>{f}</span>
                                ))}
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <button className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm font-semibold hover:border-neutral-700 hover:bg-neutral-800">
                                    <Bookmark className="h-4 w-4" /> Save to Vault
                                </button>
                                <button className="inline-flex items-center gap-2 rounded-xl brandBg px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-teal-400">
                                    <Plus className="h-4 w-4" /> Add to Properties
                                </button>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-4xl font-extrabold">{money(deal.purchasePrice)}</div>
                            <div className="text-xs text-neutral-400 mt-1">Purchase Price</div>
                        </div>
                    </div>
                </Card>

                {/* KPI tiles */}
                <div className="mb-6 grid gap-4 md:grid-cols-4">
                    <Tile icon={<TrendingUp className="h-5 w-5 text-emerald-300" />} title="ROI" value={`${deal.roi}%`} hint="Estimated annual return" />
                    <Tile icon={<Percent className="h-5 w-5 brandColor" />} title="Cap Rate" value={`${deal.capRate}%`} hint="Capitalization rate" />
                    <Tile icon={<Home className="h-5 w-5 text-purple-300" />} title="Rental Yield" value={`${deal.rentalYield}%`} hint="Annual rental income" />
                    <Tile icon={<DollarSign className="h-5 w-5 text-blue-300" />} title="Cash Flow" value={money(deal.cashFlow)} hint="Monthly net income" />
                </div>

                {/* Projections + AI Recommendation */}
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <h3 className="mb-3 text-base font-semibold">Monthly Projections</h3>
                        <ListRow label="Rental Income" value={`+${money(deal.monthly.income)}`} positive />
                        <ListRow label="Mortgage Payment" value={`-${money(deal.monthly.mortgage)}`} negative />
                        <ListRow label="Expenses (Tax, Insurance, HOA)" value={`-${money(deal.monthly.expenses)}`} negative />
                        <div className="mt-4 rounded-xl border border-neutral-700 bg-neutral-900/70 px-4 py-3 font-semibold">
                            <div className="text-sm text-neutral-300">Net Cash Flow</div>
                            <div className="mt-1 text-emerald-300">{money(deal.monthly.net)}</div>
                        </div>
                    </Card>

                    <Card>
                        <h3 className="mb-3 text-base font-semibold">AI Recommendation</h3>
                        <div className="rounded-2xl border border-emerald-900/40 bg-emerald-900/15 p-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="h-6 w-6 text-emerald-300" />
                                <div>
                                    <div className="text-xl font-extrabold tracking-tight">{deal.ai.verdict}</div>
                                    <div className="text-sm text-neutral-300">{deal.ai.strength}</div>
                                </div>
                            </div>
                        </div>

                        {/* Risk bar */}
                        <div className="mt-4 text-sm">
                            <div className="mb-2 flex items-center justify-between text-neutral-300">
                                <span>Risk Score</span>
                                <span className="text-emerald-300">{deal.ai.riskLabel}</span>
                            </div>
                            <div className="h-2 rounded-full bg-neutral-800">
                                <div className="h-2 rounded-full bg-emerald-400" style={{ width: `${deal.ai.riskPct * 100}%` }} />
                            </div>
                        </div>

                        <div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-900/70 p-3 text-sm text-neutral-300">
                            {deal.ai.notes}
                        </div>
                    </Card>
                </div>

                {/* Comparable Properties */}
                <Card className="mt-6">
                    <div className="mb-4 flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 brandColor" />
                        <h3 className="text-base font-semibold">Comparable Properties</h3>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                        {deal.comps.map((c, i) => (
                            <CompCard key={i} {...c} />
                        ))}
                    </div>

                    <div className="mt-4 rounded-xl border border-neutral-700 bg-neutral-900/70 p-3 text-sm text-neutral-300">
                        This property is priced competitively compared to similar properties in the area, with an above‑average ROI potential.
                    </div>
                </Card>
            </div>
        </main>
    );
}

/* ------------------------------- Building blocks ------------------------------ */
function Card({ className = "", children }) {
    return <div className={`rounded-2xl myborder bg-neutral-800 p-4 shadow-lg ${className}`}>{children}</div>;
}

function Tile({ icon, title, value, hint }) {
    return (
        <Card>
            <div className="flex items-start gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 ring-1 ring-inset ring-neutral-800">
                    {icon}
                </div>
                <div>
                    <div className="text-sm text-neutral-300">{title}</div>
                    <div className="mt-1 text-2xl font-extrabold">{value}</div>
                    <div className="mt-1 text-xs text-neutral-500">{hint}</div>
                </div>
            </div>
        </Card>
    );
}

function ListRow({ label, value, positive, negative }) {
    return (
        <div className="mb-3 rounded-xl myborder bg-neutral-900 px-4 py-3">
            <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-300">{label}</span>
                <span className={`${positive ? "text-emerald-400" : negative ? "text-red-400" : "text-neutral-200"}`}>{value}</span>
            </div>
        </div>
    );
}

function CompCard({ addr, price, roi }) {
    return (
        <div className="rounded-2xl myborder bg-neutral-900 p-4">
            <div className="text-neutral-300">{addr}</div>
            <div className="mt-2 text-xl font-extrabold">{money(price)}</div>
            <div className="mt-1 text-xs text-neutral-400">Price</div>
            <div className="mt-4 text-right">
                <div className="brandColor text-lg font-extrabold">{roi}%</div>
                <div className="text-xs text-neutral-400">ROI</div>
            </div>
        </div>
    );
}

/* --------------------------------- utils --------------------------------- */
function money(x) {
    try {
        return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(x || 0);
    } catch {
        return `$${Math.round(x || 0).toLocaleString()}`;
    }
}
