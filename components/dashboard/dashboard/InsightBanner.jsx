import {
    Zap
} from "lucide-react";

import Card from "./Card";



function InsightBanner({
    title = "AI Insight",
    text = "Opportunity: Consider upgrading to energy‑efficient properties for +5% yield potential",
    primary = "Explore Opportunities",
    secondary = "Learn More",
}) {
    return (
        <Card className="mb-6 bg-neutral-800">
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                    <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 ring-1 ring-inset ring-neutral-800 myborder">
                        <Zap className="h-5 w-5 brandColor" />
                    </div>
                    <div>
                        <div className="text-base font-semibold">{title}</div>
                        <p className="mt-1 max-w-3xl text-sm text-neutral-300">{text}</p>
                    </div>
                </div>
                <div className="flex shrink-0 gap-2">
                    <button className="rounded-lg brandBg px-3 py-2 text-sm font-semibold text-neutral-950 hover:bg-sky-400">{primary}</button>
                    <button className="rounded-lg myborder bg-neutral-900 px-3 py-2 text-sm font-semibold hover:border-neutral-700 hover:bg-neutral-800">{secondary}</button>
                </div>
            </div>
        </Card>
    );
}


export default InsightBanner;