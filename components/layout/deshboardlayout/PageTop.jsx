import {
    Activity,
    Settings
} from "lucide-react";


function PageTop({ title }) {
    return (
        <header className="flex items-center justify-between border-b border-neutral-900 px-4 py-3 md:px-6">
            <h1 className="flex items-center gap-2 text-lg font-bold tracking-tight md:text-2xl">
                <Activity className="h-5 w-5 text-teal-300" /> {title}
            </h1>
            <div className="hidden items-center gap-2 md:flex">
                <button className="rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs font-medium hover:border-neutral-700 hover:bg-neutral-800">
                    <Settings className="mr-1 inline-block h-3.5 w-3.5" /> Settings
                </button>
                <span className="rounded-full border border-emerald-900/40 bg-emerald-900/20 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">● LIVE</span>
            </div>
        </header>
    );
}

export default PageTop