"use client";

import {
    Activity,
    Settings
} from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

/**
 * DashboardLayout.jsx (JS)
 * A modular dashboard layout inspired by your screenshot.
 * Tailwind-only, responsive, and split into small, composable components.
 *
 * Components in this file:
 *  - DashboardLayout: main shell with <Sidebar/> + <Topbar/>
 *  - Sidebar: vertical nav (collapsible on small screens)
 *  - Topbar: breadcrumb/title area with actions
 *  - PageHeader: page heading with LIVE badge
 *  - InsightBanner: teal info card with CTA buttons
 *  - StatRow + StatCard: KPI cards
 *  - TabsPanel: simple tabs (Performance / Comparisons / Projections)
 *  - Card: generic panel wrapper used by multiple parts
 */

export default function DashboardLayout({ children, title = "Dashboard" }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
            <TopNav onMenu={() => setOpen(true)} />
            <div className="relative grid  grid-cols-1 md:grid-cols-[260px_1fr]">
                <Sidebar open={open} onClose={() => setOpen(false)} />
                <div className="min-h-[calc(100vh-56px)] flex flex-col border-neutral-900 md:border-l">
                    <main className="flex-1 overflow-x-hidden p-3 sm:p-4 lg:p-5">{children}</main>
                </div>
            </div>
        </div>
    );
}



/* ------------------------------- Topbar ------------------------------- */
export function Topbar({ title = "Dashboard" }) {
    return (
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-neutral-900 bg-neutral-950/80 px-4 backdrop-blur">
            <div className="flex items-center gap-3">
                <Activity className="h-4 w-4 text-teal-300" />
                <span className="text-sm text-neutral-300">Dashboard</span>
                <ChevronDown className="h-4 w-4 text-neutral-500" />
                <span className="text-sm text-neutral-500">/</span>
                <span className="text-sm font-medium text-white">{title}</span>
            </div>

            <div className="flex items-center gap-2">
                <button className="rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-200 hover:border-neutral-700 hover:bg-neutral-800">
                    <Settings className="mr-1 inline-block h-3.5 w-3.5" /> Settings
                </button>
                <span className="rounded-full border border-emerald-900/40 bg-emerald-900/20 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">● LIVE</span>
            </div>
        </header>
    );
}

/* ---------------------------- Page Header ---------------------------- */
export function PageHeader({ title = "Portfolio Overview", children }) {
    return (
        <div className="mb-4 flex items-center justify-between">
            <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight">
                <Activity className="h-5 w-5 text-teal-300" /> {title}
            </h1>
            {children}
        </div>
    );
}

