"use client";

import {
    AlertTriangle,
    CheckCircle,
    DollarSign,
    FileDown,
    Info,
} from "lucide-react";
import { useState } from "react";

/**
 * FundingFinderPage.jsx — Next.js + Tailwind (JavaScript)
 * Matches your screenshots: loan input form, recommended programs, pros/cons, ROI bar comparison.
 * Uses brandBg and .brandColor for theme consistency.
 */
export default function FundingFinderPage() {
    const [form, setForm] = useState({
        propertyType: "Multi-Family",
        creditRange: "620-679 (Good)",
        loanAmount: "700000",
        experience: "Experienced Investor",
    });

    const loans = [
        {
            title: "Conventional Loan",
            type: "Traditional",
            rate: 7,
            down: "$0K",
            payment: "$5",
            cost: "$1K",
            roi: 12.5,
            pros: [
                "Lower interest rates",
                "No mortgage insurance with 20% down",
                "Flexible terms",
            ],
            cons: [
                "Requires good credit",
                "Higher down payment",
                "Strict qualification",
            ],
            bestFor: "Buyers with strong credit and 20% down payment",
        },
        {
            title: "FHA Loan",
            type: "Government",
            rate: 6.8,
            down: "$0K",
            payment: "$6",
            cost: "$1K",
            roi: 11.2,
            pros: [
                "Low down payment (3.5%)",
                "Lower credit requirements",
                "Easier qualification",
            ],
            cons: [
                "Mortgage insurance required",
                "Property limits",
                "Slightly higher rates",
            ],
            bestFor: "First-time buyers or those with limited down payment",
        },
        {
            title: "Private Money",
            type: "Alternative",
            rate: 9,
            down: "$0K",
            payment: "$7",
            cost: "$1K",
            roi: 18.5,
            pros: ["Fast approval", "Flexible terms", "Credit issues okay"],
            cons: ["Higher rates", "Shorter terms", "More expensive overall"],
            bestFor: "Fix-and-flip investors or those needing quick funding",
        },
    ];

    return (
        <main className="min-h-screen bg-neutral-800 text-neutral-100 myborder rounded-lg">
            <div className="mx-auto max-w-6xl px-4 py-8">
                {/* Header */}
                <div className="mb-6 flex items-center gap-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 ring-1 ring-inset ring-neutral-800 myborder">
                        <DollarSign className="h-4 w-4 brandColor" />
                    </div>
                    <h1 className="text-2xl font-extrabold tracking-tight">Funding Finder</h1>
                </div>
                <p className="mb-4 text-sm text-neutral-300">
                    Find the best loan programs for your investment with AI-powered matching
                </p>

                {/* Form */}
                <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
                    <div className="grid gap-4 md:grid-cols-2">
                        <Field label="Property Type">
                            <Select value={form.propertyType} onChange={(e) => setForm({ ...form, propertyType: e.target.value })}>
                                <option>Single Family</option>
                                <option>Multi-Family</option>
                                <option>Condo</option>
                            </Select>
                        </Field>

                        <Field label="Credit Score Range">
                            <Select value={form.creditRange} onChange={(e) => setForm({ ...form, creditRange: e.target.value })}>
                                <option>580-619 (Fair)</option>
                                <option>620-679 (Good)</option>
                                <option>680-739 (Very Good)</option>
                                <option>740+ (Excellent)</option>
                            </Select>
                        </Field>

                        <Field label="Desired Loan Amount">
                            <Input
                                type="number"
                                value={form.loanAmount}
                                onChange={(e) => setForm({ ...form, loanAmount: e.target.value })}
                            />
                        </Field>

                        <Field label="Experience Level">
                            <Select value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })}>
                                <option>First-Time Buyer</option>
                                <option>Experienced Investor</option>
                                <option>Commercial Investor</option>
                            </Select>
                        </Field>
                    </div>

                    <button className="brandBg mt-5 w-full rounded-xl px-4 py-3 text-sm font-semibold text-neutral-900 hover:opacity-90">
                        Find Best Loan Programs
                    </button>
                </div>

                {/* Export */}
                <div className="mt-5 flex justify-end">
                    <button className="flex items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800">
                        <FileDown className="h-4 w-4" /> Export as PDF
                    </button>
                </div>

                {/* Recommended Programs */}
                <h2 className="mt-10 text-xl font-extrabold">Recommended Loan Programs</h2>

                <div className="mt-4 grid gap-6 md:grid-cols-2">
                    {loans.map((loan, i) => (
                        <LoanCard key={i} loan={loan} />
                    ))}
                </div>

                {/* ROI Comparison */}
                <div className="mt-10 rounded-2xl myborder bg-neutral-900 p-5">
                    <h3 className="mb-4 flex items-center gap-2 text-base font-semibold">
                        <DollarSign className="h-5 w-5 brandColor" /> ROI Comparison
                    </h3>
                    <div className="space-y-4">
                        {loans.map((loan, i) => (
                            <div key={i}>
                                <div className="mb-1 text-sm text-neutral-300">{loan.title}</div>
                                <div className="relative h-6 rounded-full bg-neutral-800 myborder">
                                    <div
                                        className="absolute left-0 top-0 h-6 rounded-full brandBg text-right pr-2 text-xs font-semibold text-neutral-900 flex items-center justify-end"
                                        style={{ width: `${loan.roi * 2}%` }}
                                    >
                                        {loan.roi}%
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

/* ------------------------------- Components ------------------------------- */
function Field({ label, children }) {
    return (
        <div>
            <label className="mb-1 block text-xs font-semibold text-neutral-300">{label}</label>
            {children}
        </div>
    );
}

function Input(props) {
    return (
        <input
            {...props}
            className="w-full rounded-lg myborder bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-neutral-500"
        />
    );
}

function Select(props) {
    return (
        <select
            {...props}
            className="w-full rounded-lg myborder bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-neutral-500"
        />
    );
}

function LoanCard({ loan }) {
    return (
        <div className="rounded-2xl myborder bg-neutral-900 p-5">
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-lg font-semibold">{loan.title}</h3>
                    <div className="text-sm text-neutral-400">{loan.type}</div>
                </div>
                <div className="text-right">
                    <div className="text-xl font-bold brandColor">{loan.rate}%</div>
                    <div className="text-xs text-neutral-400">Interest Rate</div>
                </div>
            </div>

            <div className="mt-4 rounded-xl border border-neutral-700 bg-neutral-950/70 p-3">
                <div className="grid grid-cols-2 text-sm text-neutral-300">
                    <div>
                        <div>Down Payment</div>
                        <div className="text-neutral-100">{loan.down}</div>
                        <div className="mt-2">Total Cost</div>
                        <div className="text-neutral-100">{loan.cost}</div>
                    </div>
                    <div className="text-right">
                        <div>Monthly Payment</div>
                        <div className="text-neutral-100">{loan.payment}</div>
                        <div className="mt-2">Est. ROI</div>
                        <div className="text-emerald-400 font-semibold">{loan.roi}%</div>
                    </div>
                </div>
            </div>

            {/* Pros and Cons */}
            <div className="mt-4 space-y-3">
                <div>
                    <div className="flex items-center gap-2 font-semibold text-emerald-400">
                        <CheckCircle className="h-4 w-4" /> Pros
                    </div>
                    <ul className="ml-6 mt-1 list-disc space-y-1 text-sm text-neutral-300">
                        {loan.pros.map((p, i) => (
                            <li key={i}>{p}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div className="flex items-center gap-2 font-semibold text-yellow-400">
                        <AlertTriangle className="h-4 w-4" /> Cons
                    </div>
                    <ul className="ml-6 mt-1 list-disc space-y-1 text-sm text-neutral-300">
                        {loan.cons.map((c, i) => (
                            <li key={i}>{c}</li>
                        ))}
                    </ul>
                </div>

                <div className="rounded-xl border border-neutral-700 bg-neutral-900/70 p-3">
                    <div className="flex items-center gap-2 text-sm text-emerald-400 font-semibold">
                        <Info className="h-4 w-4" /> Best For
                    </div>
                    <div className="mt-1 text-sm text-neutral-300">{loan.bestFor}</div>
                </div>
            </div>

            <button className="brandBg mt-5 w-full rounded-lg px-4 py-2 text-sm font-semibold text-neutral-900 hover:opacity-90">
                Get Pre-Qualified
            </button>
        </div>
    );
}