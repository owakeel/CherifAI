"use client";

import { AlertTriangle, ChevronRight, DollarSign, Info, MapPin, ShieldCheck, TrendingUp } from "lucide-react";

/**
 * AnalysesAndAlerts.jsx (JavaScript + Tailwind)
 * Two-column section: Recent Analyses (left) + Market Alerts (right)
 * - Mobile responsive (stacks to single column)
 * - Accessible semantics
 * - Styled to match your screenshot (dark cards, subtle rings, colored alerts)
 */
export default function AnalysesAndAlerts({ analyses, alerts }) {
    const demoAnalyses = analyses?.length
        ? analyses
        : [
            { id: 1, title: "Property Analysis", time: "11:15:48 AM" },
            { id: 2, title: "Property Analysis", time: "11:08:49 AM" },
            { id: 3, title: "Property Analysis", time: "11:08:14 AM" },
            { id: 4, title: "Property Analysis", time: "12:51:32 PM" },
        ];

    const demoAlerts = alerts?.length
        ? alerts
        : [
            {
                id: "miami",
                color: "emerald",
                icon: TrendingUp,
                title: "Miami Market Surge",
                desc: "Property values up 18.5% YoY in target ZIP codes",
                cta: { label: "View Details", href: "#" },
            },
            {
                id: "funding",
                color: "blue",
                icon: DollarSign,
                title: "New Funding Options",
                desc: "3 new loan programs with rates as low as 5.8%",
                cta: { label: "Explore Loans", href: "#" },
            },
            {
                id: "neighborhood",
                color: "purple",
                icon: MapPin,
                title: "Emerging Neighborhood",
                desc: "Downtown Austin showing strong growth signals",
                cta: { label: "View Analysis", href: "#" },
            },
            {
                id: "rate-change",
                color: "amber",
                icon: Info,
                title: "Rate Change Alert",
                desc: "Fed signals potential rate adjustment next quarter",
                cta: { label: "Read More", href: "#" },
            },
        ];

    return (
        <section className="w-full bg-neutral-950 text-neutral-100">
            <div className="mx-auto grid grid-cols-1 gap-6 py-6 md:grid-cols-2 md:gap-8">
                {/* Recent Analyses */}
                <div className="rounded-2xl myborder bg-neutral-800 p-4 shadow-lg ring-1 ring-inset ring-neutral-800">
                    <div className="mb-3 flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-teal-300" />
                        <h3 className="text-lg font-semibold">Recent Analyses</h3>
                    </div>

                    <ul className="space-y-4">
                        {demoAnalyses.map((a) => (
                            <li key={a.id}>
                                <AnalysisItem title={a.title} time={a.time} />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Market Alerts */}
                <div className="rounded-2xl myborder bg-neutral-800 p-4 shadow-lg ring-1 ring-inset ring-neutral-800">
                    <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5 text-yellow-300" />
                            <h3 className="text-lg font-semibold">Market Alerts</h3>
                        </div>
                        <span className="text-xs text-neutral-400">4 New</span>
                    </div>

                    <div className="space-y-4">
                        {demoAlerts.map((al) => (
                            <AlertCard key={al.id} {...al} />)
                        )}
                    </div>

                    <button className="mt-4 w-full rounded-xl myborder border-neutral-900 bg-neutral-900/70 px-4 py-2 text-sm font-semibold text-neutral-200 transition hover:border-neutral-700 hover:bg-neutral-800">
                        View All Alerts
                    </button>
                </div>
            </div>
        </section>
    );
}




/* ------------------------------- Analysis Item ------------------------------- */
function AnalysisItem({ title, time }) {
    return (
        <div className="flex items-center justify-between rounded-xl myborder bg-neutral-900/60 px-4 py-3 shadow-inner">
            <div className="flex items-center gap-3">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 ring-1 ring-inset ring-neutral-800">
                    <MapPin className="h-4 w-4 text-teal-300" />
                </div>
                <div>
                    <div className="text-sm font-medium">{title}</div>
                    <div className="text-xs text-neutral-400">{time}</div>
                </div>
            </div>
            <div className="text-[10px] font-semibold text-neutral-400">—</div>
        </div>
    );
}

/* --------------------------------- Alert Card -------------------------------- */
function AlertCard({ color = "emerald", icon: Icon = Info, title, desc, cta }) {
    const theme = getTheme(color);
    return (
        <div
            className={`rounded-2xl myborder p-4 shadow-md ${theme.bg} ${theme.border}`}
            role="region" aria-label={title}
        >
            <div className="flex items-start gap-3">
                <div className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ring-1 ring-inset ${theme.iconRing}`}>
                    <Icon className={`h-4 w-4 ${theme.icon}`} />
                </div>
                <div className="flex-1">
                    <div className="text-base font-semibold">{title}</div>
                    <p className="mt-1 text-sm text-neutral-200/85">{desc}</p>
                    {cta?.label && (
                        <a
                            href={cta.href || "#"}
                            className={`mt-2 inline-flex items-center gap-1 text-sm font-semibold ${theme.link}`}
                        >
                            {cta.label} <ChevronRight className="h-4 w-4" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

function getTheme(color) {
    switch (color) {
        case "emerald":
            return {
                bg: "from-emerald-950/30 to-emerald-900/20 bg-gradient-to-b",
                border: "border-emerald-900/30",
                icon: "text-emerald-300",
                iconRing: "ring-emerald-900/40 bg-neutral-900",
                link: "text-emerald-300 hover:text-emerald-200",
            };
        case "blue":
            return {
                bg: "from-blue-950/30 to-blue-900/20 bg-gradient-to-b",
                border: "border-blue-900/30",
                icon: "text-blue-300",
                iconRing: "ring-blue-900/40 bg-neutral-900",
                link: "text-blue-300 hover:text-blue-200",
            };
        case "purple":
            return {
                bg: "from-purple-950/30 to-purple-900/20 bg-gradient-to-b",
                border: "border-purple-900/30",
                icon: "text-purple-300",
                iconRing: "ring-purple-900/40 bg-neutral-900",
                link: "text-purple-300 hover:text-purple-200",
            };
        case "amber":
            return {
                bg: "from-amber-950/30 to-amber-900/20 bg-gradient-to-b",
                border: "border-amber-900/30",
                icon: "text-amber-300",
                iconRing: "ring-amber-900/40 bg-neutral-900",
                link: "text-amber-300 hover:text-amber-200",
            };
        default:
            return {
                bg: "from-neutral-900/40 to-neutral-800/30 bg-gradient-to-b",
                border: "border-neutral-800",
                icon: "text-neutral-300",
                iconRing: "ring-neutral-800 bg-neutral-900",
                link: "text-neutral-200",
            };
    }
}
