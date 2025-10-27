

export default function TabsPanel() {
    const tabs = ["Performance", "Comparisons", "Projections"];
    const [active, setActive] = useState(tabs[0]);

    return (
        <Card className="mt-6">
            <div className="mb-4 flex items-center gap-2">
                {tabs.map((t) => (
                    <button
                        key={t}
                        onClick={() => setActive(t)}
                        className={`rounded-xl border px-3 py-1.5 text-sm transition ${active === t
                            ? "border-teal-800 bg-neutral-900 text-white"
                            : "border-neutral-800 bg-neutral-950 text-neutral-300 hover:border-neutral-700"
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            <div className="h-56 rounded-xl border border-neutral-800 bg-neutral-950/60 p-4 text-sm text-neutral-400">
                {/* Replace with your charts */}
                <div className="flex h-full items-center justify-center">
                    <span>Chart placeholder — {active}</span>
                </div>
            </div>
        </Card>
    );
}
