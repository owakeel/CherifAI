import {
    Activity
} from "lucide-react";

import Card from "./Card";

export default function StatCard({ icon: Icon, title, value, hint, actionLabel }) {
    return (
        <Card className="bg-neutral-800">
            <div className="flex items-start justify-between">
                <div>
                    <div className="text-sm text-neutral-300">{title}</div>
                    <div className="mt-2 text-3xl font-extrabold">{value}</div>
                    <div className="mt-2 text-xs text-neutral-400">{hint}</div>
                    <button className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-neutral-200 hover:text-white">
                        <Activity className="h-3.5 w-3.5 brandColor" /> {actionLabel}
                    </button>
                </div>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 myborder ring-1 ring-inset ring-neutral-800">
                    {Icon ? <Icon className="h-5 w-5 brandColor" /> : null}
                </div>
            </div>
        </Card>
    );
}
